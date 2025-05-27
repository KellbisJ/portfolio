import { filterContent } from "../../utils/filter-content/index.js";
import { technologiesContent } from "../technologies/index.js";

const filteredContent = (content = technologiesContent()) => {
  const CONTENT_ME_FILTERED = document.querySelector(".content__me__filtered");
  filterContent(CONTENT_ME_FILTERED, content);
  return CONTENT_ME_FILTERED;
};

filteredContent();

export { filteredContent };
