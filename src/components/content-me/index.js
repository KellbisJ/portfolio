import { selectedLanguage, LANGUAGES } from "../../language/index.js";
import { copyFieldText } from "../../utils/copy-field/index.js";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const general = {
      meImgUrl: "https://drive.google.com/thumbnail?id=1LFZJjC2IIP45n1aqvehgqCktbgEqEsQJ&sz=s300",
      gitHubProfile: "https://github.com/KellbisJ",
      linkedinProfile: "https://linkedin.com/in/kellbis-salazar-arnaez-3a844833a",
    };

    const icons = {
      gitHubIcon: "devicon-github-original",
      linkedinIcon: "devicon-linkedin-plain",
      copyIcon: ["fa-regular", "fa-copy"],
      mailIcon: ["fa-solid", "fa-envelope"],
    };

    const socialMediaLinks = {
      github: {
        url: general.gitHubProfile,
        icon: icons.gitHubIcon,
      },
      linkedin: {
        url: general.linkedinProfile,
        icon: icons.linkedinIcon,
      },
    };

    const contentMe_ES = {
      greetingText_ES: `¡Hola! Soy Kellbis Salazar`,
      contentMeText_ES: `Desarrollador freelance especializado en desarrollo frontend con conocimientos en backend.`,
      copiedTextElement_ES: `¡Copiado!`,
    };
    const contentMe_EN = {
      greetingText_EN: `Hi! I'm Kellbis Salazar`,
      contentMeText_EN: `Freelance developer specialized in frontend development with backend knowledge.`,
      copiedTextElement_EN: `Copied!`,
    };

    const CONTENT_ME = document.querySelector(".content__me");

    const createContentMe = () => {
      const contentImg = document.createElement("div");
      contentImg.classList.add("content__img");
      const meImg = document.createElement("img");
      meImg.classList.add("meImg");
      meImg.src = general.meImgUrl;
      meImg.alt = "meImg";
      contentImg.appendChild(meImg);

      const contentMeInfo = document.createElement("div");
      contentMeInfo.classList.add("content__me__info");

      const greetingTextH1 = document.createElement("h1");

      const contentMeText = document.createElement("p");
      contentMeText.classList.add("content__me__text");

      const contentMeSocialMedia = document.createElement("div");
      contentMeSocialMedia.classList.add("content__me__social__media");

      const emailCopyElement = document.createElement("div");
      emailCopyElement.classList.add("social-media-element", "email__copy");

      const copiedMailText = document.createElement("p");
      copiedMailText.classList.add("copy-mail-text", "hidden");
      copiedMailText.id = "copyMailPreview";

      const copyMailFieldIcon = document.createElement("i");
      copyMailFieldIcon.classList.add(...icons.copyIcon);
      copyMailFieldIcon.id = "copyMailPreviewField";

      const mailICon = document.createElement("i");
      mailICon.classList.add(...icons.mailIcon);
      mailICon.id = "mailIcon";

      const inputMailField = document.createElement("input");
      inputMailField.type = "text";
      inputMailField.value = "kellbisdevsw@gmail.com";
      inputMailField.id = "emailInputField";
      inputMailField.style = "position: absolute; left: -9999px";

      if (selectedLanguage === LANGUAGES.SPANISH) {
        greetingTextH1.textContent = contentMe_ES.greetingText_ES;
        contentMeText.textContent = contentMe_ES.contentMeText_ES;
        copiedMailText.textContent = contentMe_ES.copiedTextElement_ES;
      }

      Object.keys(socialMediaLinks).forEach((socialMediaLink) => {
        const { url, icon } = socialMediaLinks[socialMediaLink];

        const aElement = document.createElement("a");
        aElement.href = url;
        aElement.target = "_blank";
        aElement.rel = "noopener noreferrer";

        const socialMediaElement = document.createElement("div");
        socialMediaElement.classList.add("social-media-element");

        const socialMediaIcon = document.createElement("i");
        socialMediaIcon.classList.add(icon);

        socialMediaElement.appendChild(socialMediaIcon);
        aElement.appendChild(socialMediaElement);
        contentMeSocialMedia.appendChild(aElement);
      });
      emailCopyElement.appendChild(copiedMailText);
      emailCopyElement.appendChild(copyMailFieldIcon);
      emailCopyElement.appendChild(mailICon);
      emailCopyElement.appendChild(inputMailField);
      contentMeSocialMedia.appendChild(emailCopyElement);

      contentMeInfo.appendChild(greetingTextH1);
      contentMeInfo.appendChild(contentMeText);
      contentMeInfo.appendChild(contentMeSocialMedia);

      //listeners
      copyMailFieldIcon.addEventListener("click", () => {
        copyFieldText(inputMailField, copyMailFieldIcon, copiedMailText);
      }); // CopyMail

      mailICon.addEventListener("click", () => {
        const emailAddress = "kellbisdevsw@gmail.com";
        window.location.href = `mailto:${emailAddress}`;
      }); // SendEmail

      CONTENT_ME.appendChild(contentImg);
      CONTENT_ME.appendChild(contentMeInfo);
      return CONTENT_ME;
    };
    createContentMe();
  });
})();
