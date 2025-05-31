import { filterContent, contentCache } from "../../utils/filter-content/index.js";
import { technologiesContent, TECH_CONTENT_KEY } from "../technologies/index.js";

const filteredContent = (contentGenerator = technologiesContent, contentKey = TECH_CONTENT_KEY) => {
  const CONTENT_ME_FILTERED = document.querySelector(".content__me__filtered");

  filterContent(CONTENT_ME_FILTERED, contentGenerator, contentKey);
  return CONTENT_ME_FILTERED;
};

window.addEventListener("load", () => {
  filteredContent();
});
// filteredContent();

export { filteredContent };
