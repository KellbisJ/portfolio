import { createPreviewMe } from "../preview-me/index.js";
import { translateMenu } from "../translate-menu/index.js";
import { filteredContent } from "../content-me-filtered/index.js";

const pageLayout = () =>
  new Promise((resolve, reject) => {
    const body = document.body;

    const LAYOUT = document.createElement("main");
    LAYOUT.classList.add("layout");

    // DECOR
    const decor = document.createElement("div");
    decor.classList.add("decor");

    const waveDecor = document.createElement("div");
    waveDecor.classList.add("wave__decor");

    const waveBox = document.createElement("div");
    waveBox.classList.add("box__left__lg__wave");
    waveDecor.appendChild(waveBox);

    decor.appendChild(waveDecor);

    // Three simple circled dots!
    const dotsDecor = document.createElement("div");
    dotsDecor.classList.add("dots__decor");

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div");
      dot.classList.add("box__dot__sm", "dot__circle");
      dotsDecor.appendChild(dot);
    }

    decor.appendChild(dotsDecor);

    LAYOUT.appendChild(decor);
    // DECOR

    const CONTENT_ME = document.createElement("div");
    CONTENT_ME.classList.add("content__me");

    const CONTENT_ME_FILTERED = document.createElement("div");
    CONTENT_ME_FILTERED.classList.add("content__me__filtered");

    LAYOUT.append(CONTENT_ME, CONTENT_ME_FILTERED);
    body.appendChild(LAYOUT);

    const layoutExistsInBody = Array.from(document.body.children).some((child) => child.classList.contains("layout"));

    if (layoutExistsInBody) {
      if (LAYOUT?.querySelector(".content__me") !== null && LAYOUT?.querySelector(".content__me__filtered")) {
        resolve();
      }
    } else {
      reject("Error when creating DOM essential elements");
    }

    return LAYOUT;
  });

pageLayout()
  // All this is to avoid, cannot read properties of null errors.
  .then(() => {
    createPreviewMe();
    filteredContent();
    translateMenu();
  })
  .catch((err) => console.error(err));
