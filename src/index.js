(() => {
  let dataLoaded = false;

  const loadResource = (url, type, options = {}) =>
    new Promise((resolve, reject) => {
      if (type === "script") {
        const script = document.createElement("script");
        script.src = url;
        script.type = options.module ? "module" : "text/javascript";
        if (options.defer) script.defer = true;
        script.onload = resolve;
        script.onerror = () => reject(`Script failed: ${url}`);
        document.body.appendChild(script);
      } else if (type === "css") {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        link.onload = resolve;
        link.onerror = () => reject(`CSS failed: ${url}`);

        if (options.printMedia) {
          link.media = "print";
          link.onload = () => {
            link.media = "all";
            resolve();
          };
        }
        document.head.appendChild(link);
      }
    });

  const loadBatch = (resources) => Promise.allSettled(resources.map(([url, type, options]) => loadResource(url, type, options)));

  const RESOURCES = {
    mainCSS: [
      ["src/index.css", "css"],
      ["src/components/index.css", "css"],
      ["src/components/layout-initializer/index.css", "css"],
      ["src/components/preview-me/index.css", "css"],
      ["src/components/technologies/index.css", "css"],
    ],

    mainScripts: [
      ["src/components/layout-initializer/index.js", "script", { module: true }],
      ["src/language/index.js", "script", { module: true }],
      ["src/components/preview-me/index.js", "script", { module: true }],
      ["src/components/technologies/index.js", "script", { module: true }],
      ["src/components/content-me-filtered/index.js", "script", { module: true }],
    ],

    cdnCSS: [
      ["https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css", "css"],
      ["https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css", "css"],
      ["https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap", "css"],
    ],

    deferredCSS: [
      ["src/components/projects/index.css", "css", { printMedia: true }],
      ["src/components/my-studies/index.css", "css", { printMedia: true }],
      ["src/components/contact-me/index.css", "css", { printMedia: true }],
      ["src/components/translate-menu/index.css", "css", { printMedia: true }],
    ],

    deferredScripts: [
      ["src/components/projects/index.js", "script", { module: true, defer: true }],
      ["src/components/my-studies/index.js", "script", { module: true, defer: true }],
      ["src/components/contact-me/index.js", "script", { module: true, defer: true }],
      ["src/language/eventEmitter.js", "script", { module: true, defer: true }],
    ],
  };

  const hideLoadingMetaData = () => {
    const loadingMetadata = document.getElementById("loading__metadata");
    if (!loadingMetadata) return;

    let loadingTimeout;

    if (loadingMetadata) clearTimeout(loadingTimeout);

    loadingTimeout = setTimeout(() => {
      loadingMetadata.classList.add("hidden");
      loadingMetadata.addEventListener(
        "transitionend",
        () => {
          loadingMetadata.remove();
        },
        { once: true }
      );
    }, 200);
  }; // hide <div id="loading-metadata" class="loading-metadata"> when page is loaded

  const LOAD_PAGE_CONTENT_PROTOCOL = async () => {
    try {
      // Phase 1: Load critical CSS + CDN CSS in parallel
      await Promise.all([loadBatch(RESOURCES.mainCSS), loadBatch(RESOURCES.cdnCSS)]);

      // Phase 2: Load main scripts
      await loadBatch(RESOURCES.mainScripts);

      // Phase 3: Load deferred resources
      await Promise.all([loadBatch(RESOURCES.deferredCSS), loadBatch(RESOURCES.deferredScripts)]);

      // Anddddd... Open! (Finalized)
      dataLoaded = true;
      hideLoadingMetaData();
    } catch (error) {
      console.error("Resource loading failed:", error);
      const fallbackLoader = document.createElement("div");
      fallbackLoader.innerHTML = `⚠️ Failed to load resources. <button onclick="location.reload()">Retry</button>`;
      document.body.prepend(fallbackLoader);
    }
  };

  if (!dataLoaded) LOAD_PAGE_CONTENT_PROTOCOL();
})();
