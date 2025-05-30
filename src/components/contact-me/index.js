import { LANGUAGES, selectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";
import { copyFieldText } from "../../utils/copy-field/index.js";

const CONTACT_CONTENT_KEY = "content";

const formData = [
  {
    divClass: "form__group",
    label: "name",
    field: "name",
  },
  {
    divClass: "form__group",
    label: "email",
    field: "email",
  },
  {
    divClass: "form__group",
    label: "message",
    field: "message",
  },
];

const contactMeContent = () => {
  const CONTENT_CONTACT = document.createElement("div");
  CONTENT_CONTACT.classList.add("content__contact");

  const createContactMeContent = () => {
    CONTENT_CONTACT.innerHTML = "";
    const textTitle = document.createElement("h3");
    textTitle.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Entonces... ¿Como puedo ayudarte?" : "So... How can I help you?";

    const contactForm = document.createElement("form");
    contactForm.classList.add("contact__form");
    contactForm.action = "https://formspree.io/f/xrbkzqlw";
    contactForm.method = "POST";

    formData.forEach((group) => {
      const formGroup = document.createElement("div");
      formGroup.classList.add(group.divClass);

      const label = document.createElement("label");
      label.htmlFor = group.label;
      switch (group.label) {
        case "name":
          label.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Nombre:" : "Name:";
          break;
        case "email":
          label.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Tu email:" : "Your email:";
          break;
        case "message":
          label.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Tu mensaje:" : "Your message:";
          break;
        default:
          break;
      }

      formGroup.appendChild(label);
      if (group.field === "name" || group.field === "email") {
        const field = document.createElement("input");
        field.type = group.field === "name" ? "text" : "email";
        field.id = group.label;
        field.name = group.field;
        field.required = true;
        formGroup.appendChild(field);
      } else {
        const field = document.createElement("textarea");
        field.id = group.label;
        field.name = group.field;
        field.rows = 5;
        field.required = true;
        formGroup.appendChild(field);
      }

      contactForm.appendChild(formGroup);
    });

    const sendEmailButton = document.createElement("button");
    sendEmailButton.type = "submit";
    sendEmailButton.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Enviar mensaje" : "Send message";

    contactForm.appendChild(sendEmailButton);

    const formStatus = document.createElement("div");
    formStatus.classList.add("form__status");

    contactForm.appendChild(formStatus);

    CONTENT_CONTACT.appendChild(textTitle);
    CONTENT_CONTACT.appendChild(contactForm);

    addFormSubmissionHandler(contactForm, formStatus, sendEmailButton);
  };
  createContactMeContent();

  languageEmitter.on("languageChanged", createContactMeContent);

  return CONTENT_CONTACT;
};

function addFormSubmissionHandler(form, statusElement, submitButton) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const originalButtonText = submitButton.textContent;

    submitButton.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Enviando..." : "Sending...";
    submitButton.disabled = true;
    statusElement.textContent = "";
    statusElement.className = "form__status";

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        statusElement.textContent = selectedLanguage === LANGUAGES.SPANISH ? "✅ Mensaje enviado con éxito. ¡Gracias!" : "✅ Message sent successfully. Thank you!";
        statusElement.classList.add("success");
        form.reset();
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.errors ? errorData.errors.map((e) => e.message).join(", ") : selectedLanguage === LANGUAGES.SPANISH ? "Error al enviar el mensaje" : "Error sending message";

        statusElement.textContent = `❌ ${errorMessage}`;
        statusElement.classList.add("error");
      }
    } catch (error) {
      statusElement.textContent = selectedLanguage === LANGUAGES.SPANISH ? "❌ Error de red. Por favor, inténtalo de nuevo." : "❌ Network error. Please try again.";
      statusElement.classList.add("error");
    } finally {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;

      setTimeout(() => {
        statusElement.textContent = "";
        statusElement.className = "form__status";
      }, 5000);
    }
  });
}

export { contactMeContent, CONTACT_CONTENT_KEY };
