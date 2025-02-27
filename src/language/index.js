import { languageEmitter } from "./eventEmitter.js";
import { barLoadingAnimation } from "../utils/bar-loading-animation/index.js";

const LANGUAGES = {
  SPANISH: "Spanish",
  ENGLISH: "English",
};

let selectedLanguage = LANGUAGES.SPANISH;

let languageTimeout;

function setSelectedLanguage(newLanguage) {
  if (Object.values(LANGUAGES).includes(newLanguage)) {
    barLoadingAnimation(); // animation yooo

    if (languageTimeout) {
      clearTimeout(languageTimeout);
    }

    languageTimeout = setTimeout(() => {
      selectedLanguage = newLanguage;
      languageEmitter.emit("languageChanged", newLanguage);
    }, 250);
  }
}
export { selectedLanguage, setSelectedLanguage, LANGUAGES };
