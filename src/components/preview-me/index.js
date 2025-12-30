import { languageEmitter } from "../../language/eventEmitter.js";
import { selectedLanguage, LANGUAGES } from "../../language/index.js";
import { copyFieldText } from "../../utils/copy-field/index.js";
import { filteredContent } from "../content-me-filtered/index.js";
import { technologiesContent, TECH_CONTENT_KEY } from "../technologies/index.js";
import { projectsContent, PROJECTS_CONTENT_KEY } from "../projects/index.js";
import { myStudiesContent, STUDIES_CONTENT_KEY } from "../my-studies/index.js";
import { contactMeContent, CONTACT_CONTENT_KEY } from "../contact-me/index.js";
import { translateMenu } from "../translate-menu/index.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";
import { previewMeData } from "./previewMe.data.js";

const my_content_categories = document.createElement("div");
my_content_categories.classList.add("my__content__categories");

const contentImg = document.createElement("div");
contentImg.classList.add("content__img");

const createPreviewMe = () => {
  const CONTENT_ME = document.querySelector(".content__me");
  if (!CONTENT_ME) {
    console.error("CONTENT_ME is missing");
    return;
  }

  const previewMeImgUrl = previewMeData.meImgUrl();
  const previewMeIcons = previewMeData.icons();
  const previewMeSocialMediaBox = previewMeData.contentMeSocialMediaBox();
  const previewMeContentMeTranlations = previewMeData.contentMeTranslations();
  const previewMeBtnIconsOrdered = previewMeData.categoryBtnIconsOrdered();

  const contentMePresentation = document.createElement("div");
  contentMePresentation.classList.add("content__me__presentation");

  const contentMeBrand = document.createElement("section");
  contentMeBrand.classList.add("content__me__brand");

  const contentMeDescriptionInfo = document.createElement("div");
  contentMeDescriptionInfo.classList.add("content__me__descriptionInfo");

  const imgLoadingSkeletonPulse = document.createElement("div");
  imgLoadingSkeletonPulse.classList.add("meImgSk");
  // contentImg.appendChild(imgLoadingSkeletonPulse);

  imgCreatorDisplayer("meImg", previewMeImgUrl, contentImg, imgLoadingSkeletonPulse);

  const contentMeSocialMedia = document.createElement("div");
  contentMeSocialMedia.classList.add("content__me__socialMedia");

  const myName = document.createElement("h1");
  myName.classList.add("my__name");
  myName.textContent = "Kellbis Salazar";

  const contentMeText = document.createElement("h2");
  contentMeText.classList.add("content__me__text");

  // const descriptionInfoAccesibility = document.createElement("div");
  // descriptionInfoAccesibility.classList.add("description__info_accesibility");

  contentMeBrand.appendChild(contentImg);
  contentMeBrand.appendChild(myName);

  contentMeDescriptionInfo.append(contentMeText);

  const emailCopyElement = document.createElement("button");
  emailCopyElement.classList.add("social-media-element", "email__copy");

  const copiedMailText = document.createElement("p");
  copiedMailText.classList.add("copy-mail-text", "hidden");
  copiedMailText.id = "copyMailPreview";
  copiedMailText.ariaLive = "polite";

  const mailICon = document.createElement("i");
  mailICon.classList.add(previewMeIcons.mailIcon);
  mailICon.id = "mailIcon";

  const inputMailField = document.createElement("input");
  inputMailField.type = "text";
  inputMailField.value = "kellbisdevsw@gmail.com";
  // inputMailField.id = "emailInputField";
  inputMailField.style = "position: absolute; left: -9999px";

  previewMeSocialMediaBox.forEach((socialMediaLink) => {
    const aElement = document.createElement("a");
    aElement.href = socialMediaLink.url;
    aElement.target = "_blank";
    aElement.rel = "noopener noreferrer";

    const socialMediaElement = document.createElement("button");
    socialMediaElement.type = "button";
    socialMediaElement.classList.add("social-media-element");

    const socialMediaIcon = document.createElement("i");
    socialMediaIcon.classList.add(socialMediaLink.icon);

    socialMediaElement.appendChild(socialMediaIcon);
    aElement.appendChild(socialMediaElement);
    contentMeSocialMedia.appendChild(aElement);
  });

  const fineLine = document.createElement("hr");
  fineLine.classList.add("fine__line");

  emailCopyElement.appendChild(copiedMailText);
  // emailCopyElement.appendChild(copyMailFieldIcon);
  emailCopyElement.appendChild(mailICon);
  emailCopyElement.appendChild(inputMailField);
  contentMeSocialMedia.appendChild(emailCopyElement);

  //listeners
  emailCopyElement.addEventListener("click", () => {
    copyFieldText(inputMailField, emailCopyElement, copiedMailText);
  }); // CopyMail

  // mailICon.addEventListener("click", () => {
  //   const emailAddress = "kellbisdevsw@gmail.com";
  //   window.location.href = `mailto:${emailAddress}`;
  // }); // SendEmail

  contentMeBrand.appendChild(contentMeSocialMedia);
  contentMePresentation.appendChild(contentMeBrand);
  contentMePresentation.appendChild(contentMeDescriptionInfo);

  CONTENT_ME.appendChild(contentMePresentation);
  CONTENT_ME.appendChild(fineLine);

  let updateTranslateMenu;

  const updateContentBasedOnSelectedLanguage = () => {
    my_content_categories.innerHTML = "";

    const contentMeText = document.querySelector(".content__me__text");
    const copiedMailText = document.querySelector(".copy-mail-text");

    if (selectedLanguage === LANGUAGES.SPANISH) {
      contentMeText.textContent = previewMeContentMeTranlations.contentMe_ES.contentMeText_ES;
      copiedMailText.textContent = previewMeContentMeTranlations.contentMe_ES.copiedTextElement_ES;
    } else if (selectedLanguage === LANGUAGES.ENGLISH) {
      contentMeText.textContent = previewMeContentMeTranlations.contentMe_EN.contentMeText_EN;
      copiedMailText.textContent = previewMeContentMeTranlations.contentMe_EN.copiedTextElement_EN;
    }

    function createContentCategoriesBtn(classs, btnTextContent, index) {
      const content_btn = document.createElement("button");
      content_btn.classList.add("prevMeBtn", classs);

      const btnIcon = document.createElement("i");
      btnIcon.classList = previewMeBtnIconsOrdered[index];
      btnIcon.style.background = "none";
      content_btn.appendChild(btnIcon);

      const textBtn = document.createTextNode(" " + btnTextContent);
      content_btn.appendChild(textBtn);

      if (btnTextContent === "Tecnologías" || btnTextContent === "Technologies") content_btn.classList.add("btn_my_content__selected");

      content_btn.addEventListener("click", (e) => {
        const clickedBtn = e.target.closest(`.${classs}`);

        const btns = document.querySelectorAll(`.${classs}`);
        btns.forEach((btn) => {
          btn.classList.remove("btn_my_content__selected");
        });

        clickedBtn.classList.add("btn_my_content__selected");

        switch (btnTextContent) {
          case "Tecnologías":
          case "Technologies":
            filteredContent(technologiesContent, TECH_CONTENT_KEY);
            break;
          case "Proyectos":
          case "Projects":
            filteredContent(projectsContent, PROJECTS_CONTENT_KEY);
            break;
          case "Certificaciones":
          case "Certifications":
            filteredContent(myStudiesContent, STUDIES_CONTENT_KEY);
            break;
          case "¡Contrátame!":
          case "Hire me!":
            filteredContent(contactMeContent, CONTACT_CONTENT_KEY);
            break;
          default:
            console.warn("A fucking error occurred");
        }
      });
      return content_btn;
    }

    if (selectedLanguage === LANGUAGES.SPANISH) {
      previewMeContentMeTranlations.myContentCategories_ES.forEach((content, index) => {
        const classs = "btn_my_content";

        const myContentBtn = createContentCategoriesBtn(classs, content, index);

        my_content_categories.appendChild(myContentBtn);
      });
    } else if (selectedLanguage === LANGUAGES.ENGLISH) {
      previewMeContentMeTranlations.myContentCategories_EN.forEach((content, index) => {
        const classs = "btn_my_content";

        const myContentBtn = createContentCategoriesBtn(classs, content, index);

        my_content_categories.appendChild(myContentBtn);
      });
    } else {
      console.log("something weird ocurred waaaaaa");
    }

    const translateBtn = document.createElement("button");
    translateBtn.classList.add("prevMeBtn", "translateBtn");
    const translateIcon = document.createElement("i");
    translateIcon.classList.add("fa-solid", "fa-language");
    translateBtn.appendChild(translateIcon);
    my_content_categories.appendChild(translateBtn);

    updateTranslateMenu = translateMenu(translateBtn);

    if (updateTranslateMenu) updateTranslateMenu();

    window.addEventListener("load", () => {
      CONTENT_ME.insertBefore(my_content_categories, fineLine);
    });
  };

  updateContentBasedOnSelectedLanguage();

  languageEmitter.on("languageChanged", () => {
    updateContentBasedOnSelectedLanguage();
    if (updateTranslateMenu) updateTranslateMenu();
  });

  return CONTENT_ME;
};

export { createPreviewMe };
