const LANGUAGES = {
  SPANISH: "Spanish",
  ENGLISH: "English",
};

let selectedLanguage = LANGUAGES.SPANISH;

function setSelectedLanguage(newLanguage) {
  if (Object.values(LANGUAGES).includes(newLanguage)) {
    selectedLanguage = newLanguage;
  }
}

export { selectedLanguage, setSelectedLanguage, LANGUAGES };
