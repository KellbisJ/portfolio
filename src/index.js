// main .css
import "./index.css";
import "./styles/colors.css";
import "./components/index.css";
import "./components/layout-initializer/index.css";
import "./components/preview-me/index.css";
import "./components/technologies/index.css";

// main .js

import "./components/layout-initializer/index.js";
import "./language/index.js";
import "./components/preview-me/index.js";
import "./components/technologies/index.js";
import "./components/content-me-filtered/index.js";

// deferred resources

function loadDeferredResources() {
  const cdnResources = [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
    "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",
  ];

  cdnResources.forEach((href) => {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });

  import("./components/projects/index.js");
  import("./components/my-studies/index.js");
  import("./language/eventEmitter.js");

  import("./components/projects/index.css");
  import("./components/my-studies/index.css");
  import("./components/translate-menu/index.css");
}

window.addEventListener("load", loadDeferredResources);
