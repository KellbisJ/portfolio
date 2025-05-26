import { filterContent } from "../../utils/filter-content/index.js";
import { projectsContent } from "../projects/index.js";

const filteredContent = (content = projectsContent()) => {
  const CONTENT_ME_FILTERED = document.querySelector(".content__me__filtered");
  filterContent(CONTENT_ME_FILTERED, content);
  return CONTENT_ME_FILTERED;
};

filteredContent();

export { filteredContent };
