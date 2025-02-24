(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const normalScripts = [
      "/src/language/index.js",
      "/src/components/navbar/index.js",
      "/src/components/preview-me/index.js",
      "/src/components/technologies/index.js",
      "/src/components/projects/index.js",
      "/src/components/my-studies/index.js",
      "/src/components/about-me/index.js",
      "/src/components/contact-me/index.js",
      "/src/scripts/particles-js/index.js",
    ];

    const cdnScripts = ["https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"];

    const loadScripts = (scripts, type) => {
      scripts.forEach((src) => {
        const script = document.createElement("script");
        script.type = type;
        script.src = src;
        document.body.appendChild(script);
      });
    };
    loadScripts(normalScripts, "module");

    loadScripts(cdnScripts, "text/javascript");
  });
})();
