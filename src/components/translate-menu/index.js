import { selectedLanguage, LANGUAGES, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

const translateMenu = (translateBtn) => {
  const TRANSLATE_MENU_CONTAINER = document.createElement("div");
  TRANSLATE_MENU_CONTAINER.classList.add("translate__menu__container");

  let showTranslateMenu = false;

  translateBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    showTranslateMenu = !showTranslateMenu;

    TRANSLATE_MENU_CONTAINER.classList.toggle("show", showTranslateMenu);
  });

  const updateMenuText = () => {
    translateMenuTitle.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Idioma:" : "Language:";
  };

  const translateMenuTitle = document.createElement("h3");
  TRANSLATE_MENU_CONTAINER.appendChild(translateMenuTitle);

  updateMenuText();

  const translateOptionsBtn = document.createElement("div");
  translateOptionsBtn.classList.add("translate__options__btn", "language-options");

  const langConfig = [
    { key: LANGUAGES.SPANISH, label: "Español", flag: "🇪🇸" },
    { key: LANGUAGES.ENGLISH, label: "English", flag: "🇺🇸" },
  ];

  langConfig.forEach((lang) => {
    const btn = document.createElement("button");
    btn.textContent = lang.label;

    btn.setAttribute("data-flag", lang.flag);

    btn.classList.add("prevMeBtn", "lang__select");

    if (selectedLanguage === lang.key) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // visual bug (event bubbling fixed).

      if (selectedLanguage !== lang.key) {
        TRANSLATE_MENU_CONTAINER.classList.remove("show");
        showTranslateMenu = false;

        setSelectedLanguage(lang.key);
      }
    });

    translateOptionsBtn.appendChild(btn);
  });

  TRANSLATE_MENU_CONTAINER.append(translateMenuTitle, translateOptionsBtn);

  translateBtn.appendChild(TRANSLATE_MENU_CONTAINER);

  document.addEventListener("click", (e) => {
    if (!translateBtn.contains(e.target) && !TRANSLATE_MENU_CONTAINER.contains(e.target)) {
      TRANSLATE_MENU_CONTAINER.classList.remove("show");
      showTranslateMenu = false;
    }
  });

  languageEmitter.on("languageChanged", () => {
    updateMenuText();
    const buttons = translateOptionsBtn.querySelectorAll(".lang__select");
    langConfig.forEach((conf, index) => {
      if (selectedLanguage === conf.key) {
        buttons[index].classList.add("active");
      } else {
        buttons[index].classList.remove("active");
      }
    });
  });

  return updateMenuText;
};

export { translateMenu };
