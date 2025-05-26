(() => {
  document.addEventListener("DOMContentLoaded", () => {
    let mainContentLoaded = false;

    // ### MAIN CONTENT ### //
    const mainModuleScripts = [
      "src/language/index.js",
      "src/components/content-me-filtered/index.js",
      "src/components/navbar/index.js",
      "src/components/preview-me/index.js",
      "src/components/projects/index.js",
    ]; // MAIN JS SCRIPTS COMPONENTS

    const mainCssFiles = ["src/index.css", "src/components/index.css", "src/components/navbar/index.css", "src/components/preview-me/index.css", "src/components/projects/index.css"]; // MAIN CSS STYLES;

    const loadScripts = (scripts, type, callback) => {
      let loadedData = 0;

      scripts.forEach((src) => {
        if (scripts === mainCssFiles && type === "text/css") {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.type = type;
          link.href = src;
          link.onload = () => {
            loadedData++;
            if (loadedData === scripts.length) {
              callback();
            }
          };
          document.head.appendChild(link);
        } else if ((scripts === cdnScripts && type === "text/javascript") || (scripts === mainModuleScripts && type === "module")) {
          const script = document.createElement("script");
          script.type = type;
          script.src = src;
          script.onload = () => {
            loadedData++;
            if (loadedData === scripts.length) {
              callback();
            }
          };
          document.body.appendChild(script);
        } else if (scripts === deferredCSS && type === "stylesheet") {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = src;
          link.media = "print";
          link.onload = () => {
            link.media = "all";
            loadedData++;
            if (loadedData === scripts.length) {
              callback();
            }
          };
          document.head.appendChild(link);
        } else if (scripts === deferredModuleScripts && type === "module") {
          const script = document.createElement("script");
          script.defer = true;
          script.type = type;
          script.src = src;
          script.onload = () => {
            loadedData++;
            if (loadedData === scripts.length) {
              callback();
            }
          };
          document.body.appendChild(script);
        }
      });
    };

    const loadMainContent = () => {
      loadScripts(mainCssFiles, "text/css", () => {
        loadScripts(mainModuleScripts, "module", () => {
          mainContentLoaded = true;
        });
      });
    };

    // ### DEFERRED CONTENT ### //

    const linkStylesheetResources = [
      "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap",
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    ]; // FONTS, CDNS, LIBRARIES, ETC.

    const loadLinkStylesheetResources = () => {
      linkStylesheetResources.forEach((url) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
      });
    };

    const cdnScripts = ["https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"]; // CDNS SCRIPTS

    const deferredModuleScripts = [
      "src/components/technologies/index.js",
      "src/components/my-studies/index.js",
      "src/components/about-me/index.js",
      "src/components/contact-me/index.js",
      "src/language/eventEmitter.js",
      // "src/scripts/particles-js/index.js",
    ]; // DEFERRED JS SCRIPTS COMPONENTS

    const deferredCSS = ["src/components/technologies/index.css", "src/components/my-studies/index.css", "src/components/about-me/index.css", "src/components/contact-me/index.css"]; // DEFERRED CSS STYLES

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
    }; // hide <div id="loading-metadata" class="loading-metadata"> when page is loaded

    const loadDeferredContent = () => {
      loadLinkStylesheetResources();
      loadScripts(deferredCSS, "stylesheet", () => {
        loadScripts(deferredModuleScripts, "module", () => {
          if (loadingMetadataTimeout) {
            clearTimeout(loadingMetadataTimeout);
          }
          loadingMetadataTimeout = setTimeout(() => {
            hideLoadingMetaData();
          }, 500);
        });
      });
    };

    if (!mainContentLoaded) loadMainContent();

    window.addEventListener("load", () => {
      // console.log(mainContentLoaded);

      if (mainContentLoaded) loadDeferredContent();
    });
  });
})();
