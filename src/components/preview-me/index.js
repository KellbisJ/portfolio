import { languageEmitter } from "../../language/eventEmitter.js";
import { selectedLanguage, LANGUAGES } from "../../language/index.js";
import { copyFieldText } from "../../utils/copy-field/index.js";
import { translateMenu } from "../translate-menu/index.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";
import { previewMeData, previewContentMeSocialMediaBox } from "./previewMe.data.js";

const contentImg = document.createElement("div");
contentImg.classList.add("content__img");

const createPreviewMe = () => {
  const previewMeImgUrl = previewMeData.meImgUrl;
  const previewMeIcons = previewMeData.icons;
  const previewMeContentMeTranlations = previewMeData.contentMeTranslations;

  const contentMePresentation = document.createElement("div");
  contentMePresentation.classList.add("content__me__presentation");

  const contentMeBrand = document.createElement("section");
  contentMeBrand.classList.add("content__me__brand");

  const contentMeDescriptionInfo = document.createElement("div");
  contentMeDescriptionInfo.classList.add("content__me__descriptionInfo");

  const imgLoadingSkeletonPulse = document.createElement("div");
  imgLoadingSkeletonPulse.classList.add("meImgSk");

  imgCreatorDisplayer("meImg", previewMeImgUrl, contentImg, imgLoadingSkeletonPulse);

  const contentMeSocialMedia = document.createElement("div");
  contentMeSocialMedia.classList.add("content__me__socialMedia");

  const myName = document.createElement("h1");
  myName.classList.add("my__name");
  myName.textContent = "Kellbis Salazar";

  const contentMeDescription = document.createElement("p");
  contentMeDescription.classList.add("content__me__description");

  contentMeBrand.appendChild(contentImg);
  contentMeBrand.appendChild(myName);
  contentMeDescriptionInfo.appendChild(contentMeDescription);

  const emailCopyElement = document.createElement("button");
  emailCopyElement.classList.add("social-media-element", "email__copy");

  const copiedMailText = document.createElement("p");
  copiedMailText.classList.add("copy-mail-text", "hidden");
  copiedMailText.id = "copyMailPreview";
  copiedMailText.ariaLive = "polite";

  const mailICon = document.createElement("i");
  mailICon.classList.add(...previewMeIcons.mailIcon);
  mailICon.id = "mailIcon";

  const inputMailField = document.createElement("input");
  inputMailField.type = "text";
  inputMailField.value = "kellbisdevsw@gmail.com";
  inputMailField.style = "position: absolute; left: -9999px";

  previewContentMeSocialMediaBox.forEach((socialMediaLink) => {
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
  emailCopyElement.appendChild(mailICon);
  emailCopyElement.appendChild(inputMailField);
  contentMeSocialMedia.appendChild(emailCopyElement);

  emailCopyElement.addEventListener("click", () => {
    copyFieldText(inputMailField, emailCopyElement, copiedMailText);
  });

  contentMeBrand.appendChild(contentMeSocialMedia);
  contentMePresentation.appendChild(contentMeBrand);
  contentMePresentation.appendChild(contentMeDescriptionInfo);

  const updateCopiedText = (lang) => {
    const copiedMailTextEl = document.querySelector(".copy-mail-text");
    if (!copiedMailTextEl) return;

    if (lang === LANGUAGES.SPANISH) {
      copiedMailTextEl.textContent = previewMeContentMeTranlations.contentMe_ES.copiedTextElement_ES;
    } else if (lang === LANGUAGES.ENGLISH) {
      copiedMailTextEl.textContent = previewMeContentMeTranlations.contentMe_EN.copiedTextElement_EN;
    }
  };

  const updateDescription = (lang) => {
    if (lang === LANGUAGES.SPANISH) {
      contentMeDescription.textContent = previewMeContentMeTranlations.contentMe_ES.contentMeText_ES;
    } else if (lang === LANGUAGES.ENGLISH) {
      contentMeDescription.textContent = previewMeContentMeTranlations.contentMe_EN.contentMeText_EN;
    }
  };

  updateCopiedText(selectedLanguage);
  updateDescription(selectedLanguage);

  languageEmitter.on("languageChanged", (lang) => {
    updateDescription(lang);
    updateCopiedText(lang);
  });

  CONTENT_ME.appendChild(contentMePresentation);
  CONTENT_ME.appendChild(fineLine);

  return CONTENT_ME;
};

const CONTENT_ME = document.createElement("div");
CONTENT_ME.classList.add("content__me");

export { createPreviewMe };
