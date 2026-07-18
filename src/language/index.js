import { languageEmitter } from "./eventEmitter.js";
import { barLoadingAnimation } from "../utils/bar-loading-animation/index.js";

const LANGUAGES = {
  SPANISH: "Español",
  ENGLISH: "English",
};

let selectedLanguage = LANGUAGES.SPANISH;

// Auto-detect browser language on init
const browserLang = navigator.language || navigator.languages?.[0] || "";
if (browserLang.startsWith("en")) {
  selectedLanguage = LANGUAGES.ENGLISH;
}

let languageTimeout;

function setSelectedLanguage(newLanguage) {
  if (Object.values(LANGUAGES).includes(newLanguage)) {
    barLoadingAnimation();

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
