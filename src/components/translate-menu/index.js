import { selectedLanguage, LANGUAGES, setSelectedLanguage } from "../../language/index.js";

const translateMenu = (translateBtn) => {
  const TRANSLATE_MENU_CONTAINER = document.createElement("div");
  TRANSLATE_MENU_CONTAINER.classList.add("translate__menu__container");

  let showTranslateMenu = false;

  translateBtn.addEventListener("click", () => {
    showTranslateMenu = !showTranslateMenu;
    TRANSLATE_MENU_CONTAINER.classList.toggle("show", showTranslateMenu);
  });

  const updateMenuText = () => {
    translateMenuTitle.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Traducir la página:" : "Translate page:";
  };

  const translateMenuTitle = document.createElement("h3");
  updateMenuText();

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

  TRANSLATE_MENU_CONTAINER.append(translateMenuTitle, translateOptionsBtn);
  translateBtn.appendChild(TRANSLATE_MENU_CONTAINER);

  return updateMenuText;
};

export { translateMenu };
