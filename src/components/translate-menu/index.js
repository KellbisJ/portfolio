import { languageEmitter } from "../../language/eventEmitter.js";
import { selectedLanguage, LANGUAGES, setSelectedLanguage } from "../../language/index.js";

const translateMenuData = [];

const translateMenu = () => {
  const translateBtn = document.querySelector(".translateBtn");

  if (!translateBtn) {
    console.error("Translate button element missing");
    return;
  }

  const TRANSLATE_MENU_CONTAINER = document.createElement("div");
  TRANSLATE_MENU_CONTAINER.classList.add("translate__menu__container");

  const translateMenuTitle = document.createElement("h3");
  translateMenuTitle.textContent = "Traducir la página:";
  TRANSLATE_MENU_CONTAINER.append(translateMenuTitle);

  const translateOptionsBtn = document.createElement("div");
  translateOptionsBtn.classList.add("translate__options__btn");

  Object.values(LANGUAGES).forEach((lang) => {
    const btn = document.createElement("button");
    btn.textContent = lang;
    btn.classList.add("prevMeBtn", "lang__select");

    btn.addEventListener("click", () => {
      if (selectedLanguage === lang) {
        return;
      } else if (!selectedLanguage === Object.values(LANGUAGES)) {
        return;
      } else {
        setSelectedLanguage(lang);
        TRANSLATE_MENU_CONTAINER.classList.remove("show");
      }
    });

    translateOptionsBtn.appendChild(btn);
  });

  TRANSLATE_MENU_CONTAINER.appendChild(translateOptionsBtn);
  translateBtn.appendChild(TRANSLATE_MENU_CONTAINER);

  return TRANSLATE_MENU_CONTAINER;
};

export { translateMenu };
