(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // (MAIL, PHONENUMBER) COPY AND MAIL TO LOGIC

    const emailAddress = "kellbisdevsw@gmail.com";

    const copyMailPreviewField = document.getElementById("copyMailPreviewField");
    const copyMailContactField = document.getElementById("copyMailContactField");
    const copyPhonenumberField = document.getElementById("copyPhonenumberField");

    const mailIcon = document.getElementById("mailIcon");

    const emailInputField = document.getElementById("emailInputField");
    const phonenumberInputField = document.getElementById("phonenumberField");

    const copyMailPreview = document.getElementById("copyMailPreview");
    const copyMailContact = document.getElementById("copyMailContact");
    const copyTextPhoneNumber = document.getElementById("copyTextPhoneNumber");

    const copyAddres = async (event) => {
      // console.log(event.target);

      try {
        emailInputField.select();
        emailInputField.setSelectionRange(0, 99999);

        await navigator.clipboard.writeText(emailInputField.value);

        if (event.target.id === "copyMailPreviewField") {
          copyMailPreviewField.classList.add("copy-success");
          copyMailPreview.classList.remove("hidden");
        }
        if (event.target.id === "copyMailContactField") {
          copyMailContactField.classList.add("copy-success");
          copyMailContact.classList.remove("hidden");
        }
        setTimeout(() => {
          copyMailPreviewField.classList.remove("copy-success");
          copyMailPreview.classList.add("hidden");
          copyMailContactField.classList.remove("copy-success");
          copyMailContact.classList.add("hidden");
        }, 1700);

        // console.log(`textcpied: ${emailInputField.value}`);
      } catch (err) {
        console.error(`err copying text: ${err}`);
        fallbackCopyAddress(event);
      }
    };

    const fallbackCopyAddress = (event) => {
      emailInputField.select();
      document.execCommand("copy");

      if (event.target.id === "copyMailPreviewField") {
        copyMailPreviewField.classList.add("copy-success");
        copyMailPreview.classList.remove("hidden");
      }
      if (event.target.id === "copyMailContactField") {
        copyMailContactField.classList.add("copy-success");
        copyMailContact.classList.remove("hidden");
      }

      setTimeout(() => {
        copyMailPreviewField.classList.remove("copy-success");
        copyMailPreview.classList.add("hidden");
        copyMailContactField.classList.remove("copy-success");
        copyMailContact.classList.add("hidden");
      }, 1700);
    };

    const openMailTo = () => {
      window.location.href = `mailto:${emailAddress}`;
    };

    const copyPhonenumber = async () => {
      try {
        phonenumberInputField.select();
        phonenumberInputField.setSelectionRange(0, 99999);

        await navigator.clipboard.writeText(phonenumberInputField.value);

        copyPhonenumberField.classList.add("copy-success");
        copyTextPhoneNumber.classList.remove("hidden");

        setTimeout(() => {
          copyPhonenumberField.classList.remove("copy-success");
          copyTextPhoneNumber.classList.add("hidden");
        }, 1700);
      } catch (err) {
        console.error(`err copying text: ${err}`);
        fallbackCopyPhonenumber();
      }
    };

    const fallbackCopyPhonenumber = () => {
      phonenumberInputField.select();
      document.execCommand("copy");

      copyPhonenumberField.classList.add("copy-success");
      copyTextPhoneNumber.classList.remove("hidden");

      setTimeout(() => {
        copyPhonenumberField.classList.remove("copy-success");
        copyTextPhoneNumber.classList.add("hidden");
      }, 1700);
    };

    copyMailPreviewField.addEventListener("click", copyAddres);
    copyMailContactField.addEventListener("click", copyAddres);
    copyPhonenumberField.addEventListener("click", copyPhonenumber);
    mailIcon.addEventListener("click", openMailTo);

    // (MAIL, PHONENUMBER) COPY AND MAIL TO LOGIC
  });
})();
