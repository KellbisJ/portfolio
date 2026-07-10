// main .css
// (CSS is now loaded from index.html <head> to prevent layout shift)

// main .js
import "./components/layout-initializer/index.js";
import "./language/index.js";
import "./components/preview-me/index.js";
import "./components/technologies/index.js";
import "./components/content-me-filtered/index.js";

function loadDeferredResources() {
  import("./components/projects/index.js");
  import("./components/my-studies/index.js");
  import("./language/eventEmitter.js");
}

window.addEventListener("load", loadDeferredResources);
