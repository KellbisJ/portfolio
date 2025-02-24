import { LANGUAGES, selectedLanguage } from "../../language/index.js";
import { copyFieldText } from "../../utils/copy-field/index.js";

(() => {
  const icons = {
    bookPersonIcon: ["fa-solid", "fa-address-book"],
    mailIcon: ["fas", "fa-envelope"],
    copyIcon: ["fa-regular", "fa-copy"],
    linkedinIcon: ["fab", "fa-linkedin"],
    githubIcon: ["fab", "fa-github"],
    goToPageIcon: ["fa-solid", "fa-up-right-from-square", "link-to-media"],
    copyrightIcon: ["fa-solid", "fa-copyright"],
    phoneIcon: ["fas", "fa-phone"],
  };
  const general = {
    mailContactMe: "kellbisdevsw@gmail.com",
    phoneNumber: "+58 412 125 1605",
    linkedinProfileUrl: "https://linkedin.com/in/kellbis-salazar-arnaez-3a844833a",
    gitHubProfileUrl: "https://github.com/KellbisJ",
  };
  const contactManners = {
    viaEmail: {
      icon: icons.mailIcon,
      mail: general.mailContactMe,
      copy: icons.copyIcon,
    },
    viaPhone: {
      icon: icons.phoneIcon,
      phonenumber: general.phoneNumber,
      copy: icons.copyIcon,
    },
    viaLinkedin: {
      icon: icons.linkedinIcon,
      linkedin: general.linkedinProfileUrl,
      goToPageIcon: icons.goToPageIcon,
    },
    viaGithub: {
      icon: icons.githubIcon,
      github: general.gitHubProfileUrl,
      goToPageIcon: icons.goToPageIcon,
    },
  };

  const contactMeContent_ES = {
    headerTitle: "Contacto",
    contactText: "Si tienes alguna pregunta o quieres que trabajemos juntos, no dudes en contactarme.",
    copiedText: "¡Copiado!",
    copyrightText: "2025 Kellbis Salazar. Todos los derechos reservados.",
  };
  const contactMeContent_EN = {
    headerTitle: "Contact",
    contactText: "If you have any questions or want us to work together, don't hesitate to contact me.",
    copiedText: "Copied!",
    copyrightText: "2025 Kellbis Salazar. All rights reserved.",
  };

  const CONTENT_CONTACT = document.querySelector(".content__contact");

  const createContactMeContent = () => {
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("contact__title");
    const iconTitle = document.createElement("i");
    iconTitle.classList.add(...icons.bookPersonIcon);
    contactTitle.appendChild(iconTitle);

    const textTitle = document.createElement("h2");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const contactText = document.createElement("p");
    contactText.classList.add("contact-text");

    const copyright = document.createElement("div");
    copyright.classList.add("copyright");

    const iconCopyright = document.createElement("i");
    iconCopyright.classList.add(...icons.copyrightIcon);
    copyright.appendChild(iconCopyright);

    const copyrightText = document.createElement("p");

    if (selectedLanguage === LANGUAGES.SPANISH) {
      textTitle.textContent = contactMeContent_ES.headerTitle;
      contactText.textContent = contactMeContent_ES.contactText;
      copyrightText.textContent = contactMeContent_ES.copyrightText;

      contactTitle.appendChild(textTitle);
      contactInfo.appendChild(contactText);
    }
    if (selectedLanguage === LANGUAGES.ENGLISH) {
      textTitle.textContent = contactMeContent_EN.headerTitle;
      contactText.textContent = contactMeContent_EN.contactText;
      copyrightText.textContent = contactMeContent_EN.copyrightText;

      contactTitle.appendChild(textTitle);
      contactInfo.appendChild(contactText);
    }
    copyright.appendChild(copyrightText);
    const addressContact = document.createElement("address");
    addressContact.classList.add("addres__contact");
    Object.keys(contactManners).forEach((viaContact) => {
      const contactItem = document.createElement("div");
      contactItem.classList.add("contact-item");

      const icon = document.createElement("i");
      icon.classList.add(...contactManners[viaContact].icon);
      contactItem.appendChild(icon);

      if (viaContact === "viaEmail") {
        const span = document.createElement("span");
        span.textContent = contactManners[viaContact].mail;
        contactItem.appendChild(span);

        const copyIcon = document.createElement("i");
        copyIcon.classList.add(...contactManners[viaContact].copy);
        copyIcon.id = "copyMailContactField";
        copyIcon.setAttribute("aria-label", "Copy email");
        copyIcon.setAttribute("role", "button");
        copyIcon.setAttribute("tabindex", "0");
        contactItem.appendChild(copyIcon);

        const copyMailText = document.createElement("p");
        copyMailText.classList.add("copy-mail-text", "hidden");
        copyMailText.id = "copyMailContact";
        copyMailText.setAttribute("aria-live", "polite");
        copyMailText.textContent = selectedLanguage === LANGUAGES.SPANISH ? contactMeContent_ES.copiedText : contactMeContent_EN.copiedText;
        contactItem.appendChild(copyMailText);
      } else if (viaContact === "viaPhone") {
        const span = document.createElement("span");
        span.textContent = contactManners[viaContact].phonenumber;
        contactItem.appendChild(span);

        const copyIcon = document.createElement("i");
        copyIcon.classList.add(...contactManners[viaContact].copy);
        copyIcon.id = "copyPhonenumberField";
        copyIcon.setAttribute("aria-label", "Copy phone number");
        copyIcon.setAttribute("role", "button");
        copyIcon.setAttribute("tabindex", "0");
        contactItem.appendChild(copyIcon);

        const copyPhoneText = document.createElement("p");
        copyPhoneText.classList.add("copy-phonenumber-text", "hidden");
        copyPhoneText.id = "copyTextPhoneNumber";
        copyPhoneText.setAttribute("aria-live", "polite");
        copyPhoneText.textContent = selectedLanguage === LANGUAGES.SPANISH ? contactMeContent_ES.copiedText : contactMeContent_EN.copiedText;
        contactItem.appendChild(copyPhoneText);

        const input = document.createElement("input");
        input.type = "text";
        input.value = contactManners[viaContact].phonenumber;
        input.id = "phonenumberField";
        input.style.position = "absolute";
        input.style.left = "-9999px";
        contactItem.appendChild(input);
      } else if (viaContact === "viaLinkedin") {
        const span = document.createElement("span");
        const link = document.createElement("a");
        link.href = contactManners[viaContact].linkedin;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "LinkedIn";
        span.appendChild(link);
        contactItem.appendChild(span);

        const goToPageIcon = document.createElement("a");
        goToPageIcon.href = contactManners[viaContact].linkedin;
        goToPageIcon.target = "_blank";
        goToPageIcon.rel = "noopener noreferrer";
        const icon = document.createElement("i");

        icon.classList.add(...contactManners[viaContact].goToPageIcon);
        goToPageIcon.appendChild(icon);
        contactItem.appendChild(goToPageIcon);
      } else if (viaContact === "viaGithub") {
        const span = document.createElement("span");
        const link = document.createElement("a");
        link.href = contactManners[viaContact].github;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "GitHub";
        span.appendChild(link);
        contactItem.appendChild(span);

        const goToPageIcon = document.createElement("a");
        goToPageIcon.href = contactManners[viaContact].github;
        goToPageIcon.target = "_blank";
        goToPageIcon.rel = "noopener noreferrer";
        const icon = document.createElement("i");
        icon.classList.add(...contactManners[viaContact].goToPageIcon);
        goToPageIcon.appendChild(icon);
        contactItem.appendChild(goToPageIcon);
      }

      addressContact.appendChild(contactItem);
    });

    contactInfo.appendChild(addressContact);

    CONTENT_CONTACT.appendChild(contactTitle);
    CONTENT_CONTACT.appendChild(contactInfo);
    CONTENT_CONTACT.appendChild(copyright);

    return CONTENT_CONTACT;
  };
  createContactMeContent();
})();
