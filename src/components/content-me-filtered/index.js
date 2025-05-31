import { filterContent, contentCache } from "../../utils/filter-content/index.js";
import { technologiesContent, TECH_CONTENT_KEY } from "../technologies/index.js";

const filteredContent = (contentGenerator = technologiesContent, contentKey = TECH_CONTENT_KEY) => {
  const CONTENT_ME_FILTERED = document.querySelector(".content__me__filtered");

  if (!CONTENT_ME_FILTERED) {
    console.error("content__me__filtered element not found");
    return;
  }

  filterContent(CONTENT_ME_FILTERED, contentGenerator, contentKey);
  return CONTENT_ME_FILTERED;
};

export { filteredContent };
