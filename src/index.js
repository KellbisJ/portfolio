(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const moduleScripts = [
      "src/language/index.js",
      "src/components/navbar/index.js",
      "src/components/preview-me/index.js",
      "src/components/projects/index.js",
      "src/components/technologies/index.js",
      "src/components/my-studies/index.js",
      "src/components/about-me/index.js",
      "src/components/contact-me/index.js",
      "src/language/eventEmitter.js",
      "src/scripts/particles-js/index.js",
    ];

    const cdnScripts = ["https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"];

    const loadScripts = (scripts, type, callback) => {
      let loadedScripts = 0;
      scripts.forEach((src) => {
        const script = document.createElement("script");
        script.type = type;
        script.src = src;
        script.onload = () => {
          loadedScripts++;
          if (loadedScripts === scripts.length) {
            callback();
          }
        };
        // script.onerror = () => {
        //   console.error(`erorr: ${src}`);
        // };
        document.body.appendChild(script);
      });
    };

    let loadingMetadataTimeout;

    const hideLoadingMetaData = () => {
      const loadingMetadata = document.getElementById("loading-metadata");
      if (loadingMetadata) {
        loadingMetadata.classList.add("hidden");
        loadingMetadata.addEventListener(
          "transitionend",
          () => {
            loadingMetadata.remove();
          },
          { once: true }
        );
      }
    };

    loadScripts(cdnScripts, "text/javascript", () => {
      loadScripts(moduleScripts, "module", () => {
        if (loadingMetadataTimeout) {
          clearTimeout(loadingMetadataTimeout);
        }
        loadingMetadataTimeout = setTimeout(() => {
          hideLoadingMetaData();
        }, 800);
      });
    });
  });
})();
