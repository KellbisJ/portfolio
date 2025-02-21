(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const jsStudiesReferences = [
      "https://platzi.com/home/",
      "https://www.w3schools.com",
      "https://neetcode.io/",
      "https://developer.mozilla.org/es/",
      "https://www.freecodecamp.org/",
      "https://www.youtube.com/@midudev",
    ];
    const jsStudiesTextContent = ["Platzi,", "W3schools,", "NeetCode,", "MDN,", "FreeCodeCamp,", "YouTube resources..."];

    const studiesContent = {
      javascript: {
        title: "Full Stack Developer con JavaScript",
        studiesReferences: [...jsStudiesReferences],
        studiesTextContent: [...jsStudiesTextContent],
        chronology: "2019 - Actualidad [2025]",
      },
    };

    const certificateModal = document.querySelector(".modal");
    const showCertificateBtn = document.querySelector(".show-certificate-btn");

    const toggleShowCertificate = () => {
      certificateModal.classList.toggle("show");

      if (certificateModal.classList.contains("show")) {
        insertCertificateDocument();
      }
    };

    const insertCertificateDocument = () => {
      const modalContent = document.createElement("div");
      const spanClose = document.createElement("span");
      const closeIcon = document.createElement("i");
      const documentIframe = document.createElement("iframe");

      modalContent.classList.add("modal-content");
      spanClose.classList.add("close");
      closeIcon.classList.add("fa-solid", "fa-circle-xmark");
      documentIframe.src = "https://drive.google.com/file/d/1E28ok_rk0Xx4Hoc8wExadZ-97qT0SVXk/preview";
      documentIframe.allow = "autoplay";

      spanClose.appendChild(closeIcon);
      spanClose.addEventListener("click", () => {
        certificateModal.classList.remove("show");
        certificateModal.innerHTML = "";
      });

      modalContent.appendChild(spanClose);
      modalContent.appendChild(documentIframe);

      return certificateModal.appendChild(modalContent);
    };

    showCertificateBtn.addEventListener("click", toggleShowCertificate);
  });
})();
