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

    const cssFiles = ["src/index.css", "src/components/about-me/index.css"];

    const loadScriptsAndComponents = (scripts, type, callback) => {
      let loadedData = 0;

      scripts.forEach((src) => {
        if (type === "text/css") {
          const script = document.createElement("link");
          script.rel = "stylesheet";
          script.type = type;
          script.href = src;
          script.onload = () => {
            loadedData++;
            if (loadedData === scripts.length) {
              callback();
            }
          };

          document.head.appendChild(script);
        }

        if (type === "text/javascript" || type === "module") {
          const script = document.createElement("script");
          script.type = type;
          script.src = src;
          script.onload = () => {
            loadedData++;
            if (loadedData === scripts.length) {
              callback();
            }
          };
          // script.onerror = () => {
          //   console.error(`erorr: ${src}`);
          // };
          document.body.appendChild(script);
        }
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

    loadScriptsAndComponents(cssFiles, "text/css", () => {
      loadScriptsAndComponents(cdnScripts, "text/javascript", () => {
        loadScriptsAndComponents(moduleScripts, "module", () => {
          if (loadingMetadataTimeout) {
            clearTimeout(loadingMetadataTimeout);
          }
          loadingMetadataTimeout = setTimeout(() => {
            hideLoadingMetaData();
          }, 800);
        });
      });
    });
  });
})();
