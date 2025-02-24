const copyFieldText = async (inputField, copyButton, successMessage) => {
  console.log("holaa");

  try {
    inputField.select();
    inputField.setSelectionRange(0, 99999);

    await navigator.clipboard.writeText(inputField.value);

    copyButton.classList.add("copy-success");
    successMessage.classList.remove("hidden");

    setTimeout(() => {
      copyButton.classList.remove("copy-success");
      successMessage.classList.add("hidden");
    }, 1700);
  } catch (err) {
    console.error(`err copying text: ${err}`);
    fallbackCopyFieldText(inputField, copyButton, successMessage);
  }
};

const fallbackCopyFieldText = (inputField, copyButton, successMessage) => {
  inputField.select();
  document.execCommand("copy");

  copyButton.classList.add("copy-success");
  successMessage.classList.remove("hidden");

  setTimeout(() => {
    copyButton.classList.remove("copy-success");
    successMessage.classList.add("hidden");
  }, 1700);
};

export { copyFieldText };
