import { languageEmitter } from "../../language/eventEmitter.js";
import { selectedLanguage, LANGUAGES, setSelectedLanguage } from "../../language/index.js";

const translateMenu = () => {
  const layout = document.querySelector(".layout");
  if (!layout) {
    console.error("Layout element missing");
    return;
  }

  const TRANSLATE_MENU_CONTAINER = document.createElement("div");
  TRANSLATE_MENU_CONTAINER.classList.add("translate__menu__container");

  Object.values(LANGUAGES).forEach((lang) => {
    const btn = document.createElement("button");
    btn.textContent = lang;
    btn.classList.add("lang__select");

    btn.addEventListener("click", () => {
      if (selectedLanguage === lang) {
        return;
      } else if (!selectedLanguage === Object.values(LANGUAGES)) {
        return;
      } else {
        setSelectedLanguage(lang);
      }
    });

    TRANSLATE_MENU_CONTAINER.append(btn);
  });

  layout.appendChild(TRANSLATE_MENU_CONTAINER);

  return TRANSLATE_MENU_CONTAINER;
};

export { translateMenu };
