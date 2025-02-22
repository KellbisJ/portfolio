(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // MY STUDIES CONTENT

    const studiesData = {
      jsStudies: {
        jsStudiesReferences: {
          platzi: "https://platzi.com/home/",
          w3Schools: "https://www.w3schools.com",
          neetCode: "https://neetcode.io/",
          mdn: "https://developer.mozilla.org/es/",
          freeCode: "https://www.freecodecamp.org/",
          youtubeResources: "https://www.youtube.com/@midudev",
        },
        jsStudiesTextContent: {
          platzi: "Platzi,",
          w3Schools: "W3schools,",
          neetCode: "NeetCode,",
          mdn: "MDN,",
          freeCode: "FreeCodeCamp,",
          youtubeResources: "YouTube resources...",
        },
      },
      englishStudies: {
        englishStudiesReferences: {
          realLifeApp: "https://reallifeglobal.com/app/",
          platzi: "https://platzi.com/escuela/ingles/",
          cambridgeDictionary: "https://dictionary.cambridge.org",
          lingolia: "https://english.lingolia.com/en/grammar/tenses",
          youtubeResources: "https://www.youtube.com/@LearnEnglishWithTVSeries",
        },
        englishStudiesTextContent: {
          realLifeApp: "RealLifeApp,",
          platzi: "Platzi,",
          cambridgeDictionary: "Cambridge Dictionary,",
          lingolia: "Lingolia,",
          youtubeResources: "YouTube resources...",
        },
      },
      highSchoolStudies: {
        highSchoolStudiesReferences: "Bachiller. Educación Media General. Republica Bolivariana de Venezuela, ciudad de origen.",
      },
    };

    const studiesContent = {
      javascript: {
        title: "Full Stack Developer con JavaScript",
        studiesInformation: [{ ...studiesData.jsStudies }],
        chronology: "2019 - Actualidad [2025]",
        certificateUrl: "https://drive.google.com/file/d/1E28ok_rk0Xx4Hoc8wExadZ-97qT0SVXk/preview",
      },
      english: {
        title: "Inglés Intermedio B2",
        studiesInformation: [{ ...studiesData.englishStudies }],
        chronology: "2023 - Actualidad [2025]",
        certificateUrl: "https://drive.google.com/file/d/1G-pkLSrAmyPV0_kLDWoSjBH4ZVMwP89k/preview",
      },
      highSchool: {
        title: "Escuela Secundaria",
        studiesInformation: [{ ...studiesData.highSchoolStudies }],
        chronology: "2019 - 2024",
      },
    };

    console.log(studiesContent.highSchool.studiesInformation);

    const CONTENT_MY_STUDIES = document.querySelector(".content__my__studies");
    const myStudiesTitleHeader = document.createElement("div");
    const iconTitleHeader = document.createElement("i");
    const myStudiesTitle = document.createElement("h2");
    const contentMyStudiesInfo = document.createElement("div");

    myStudiesTitleHeader.classList.add("my-studies-title");
    iconTitleHeader.classList.add("fa-solid", "fa-book");
    myStudiesTitle.textContent = "Educación";
    contentMyStudiesInfo.classList.add("content__my__studies__info");

    myStudiesTitleHeader.appendChild(iconTitleHeader);
    myStudiesTitleHeader.appendChild(myStudiesTitle);

    CONTENT_MY_STUDIES.appendChild(myStudiesTitleHeader);

    const createStudiesContents = (content) => {
      const studyItemContent = document.createElement("div");
      studyItemContent.classList.add("study-item");

      const studyItemContentPoint = document.createElement("div");
      studyItemContentPoint.classList.add("study-point");

      const studyDetails = document.createElement("div");
      studyDetails.classList.add("study-details");

      const studyDetailsTitle = document.createElement("h3");
      studyDetailsTitle.textContent = content.title;
      studyDetails.appendChild(studyDetailsTitle);

      const studyDetailsLinks = document.createElement("div");
      studyDetailsLinks.classList.add("study-details-links");

      if (content === studiesContent.javascript || content === studiesContent.english) {
        const studiesInformationReferences = content.studiesInformation[0].jsStudiesReferences || content.studiesInformation[0].englishStudiesReferences;
        const englishStudiesTextContent = content.studiesInformation[0].jsStudiesTextContent || content.studiesInformation[0].englishStudiesTextContent;

        Object.keys(studiesInformationReferences).forEach((key) => {
          const studyDetailsReferenceLinks = document.createElement("a");
          studyDetailsReferenceLinks.href = studiesInformationReferences[key];
          studyDetailsReferenceLinks.target = "_blank";
          studyDetailsReferenceLinks.rel = "noopener noreferrer";
          studyDetailsReferenceLinks.textContent = englishStudiesTextContent[key];

          studyDetailsLinks.appendChild(studyDetailsReferenceLinks);
          studyDetails.appendChild(studyDetailsLinks);
        });
        const studyDetailsCronologyShowModalBtn = document.createElement("button");
        studyDetailsCronologyShowModalBtn.classList.add("btn", "show-certificate-btn");
        studyDetailsCronologyShowModalBtn.textContent = "Ver certificado/s";
        studyDetails.appendChild(studyDetailsCronologyShowModalBtn);
      } else if (content === studiesContent.highSchool) {
        const studiesInformationReferences = content.studiesInformation[0].highSchoolStudiesReferences;

        const studyDetailsReferences = document.createElement("p");
        studyDetailsReferences.textContent = studiesInformationReferences;
        const studyDetailsCronologyShowModalBtn = document.createElement("button");
        studyDetailsCronologyShowModalBtn.classList.add("btn", "physicalCertificate");
        studyDetailsCronologyShowModalBtn.textContent = "Certificado en fisico";

        studyDetails.appendChild(studyDetailsReferences);
        studyDetails.appendChild(studyDetailsCronologyShowModalBtn);
      }

      const studyDetailsCronology = document.createElement("p");
      studyDetailsCronology.textContent = content.chronology;
      const studyDetailsModal = document.createElement("div");
      studyDetailsModal.classList.add("modal");

      studyDetails.appendChild(studyDetailsCronology);
      studyDetails.appendChild(studyDetailsModal);

      studyItemContent.appendChild(studyItemContentPoint);
      studyItemContent.appendChild(studyDetails);

      contentMyStudiesInfo.appendChild(studyItemContent);

      return studyItemContent;
    };
    const myStudiesContents = [studiesContent.javascript, studiesContent.english, studiesContent.highSchool];

    myStudiesContents.forEach((studyContent) => {
      const studyMetaData = createStudiesContents(studyContent);
      CONTENT_MY_STUDIES.appendChild(studyMetaData);
    });
    // MY STUDIES CONTENT

    // SHOW CERTIFICATE LOGIC
    // const CERTIFICATE_MODAL = document.querySelector(".modal");
    const showCertificateBtn = document.querySelectorAll(".show-certificate-btn");

    const toggleShowCertificate = (event, studyDetails) => {
      console.log(event.target);
      let target = event.target;

      const CERTIFICATE_MODAL = studyDetails.querySelector(".modal"); // search for the .modal element within that specific studyDetails element

      CERTIFICATE_MODAL.classList.toggle("show"); // toggle between the visibility display

      if (CERTIFICATE_MODAL.classList.contains("show")) {
        if (target.classList.contains("btn") && target.classList.contains("show-certificate-btn")) {
          const h3Element = studyDetails.querySelector("h3");
          if (h3Element) {
            console.log(h3Element.textContent);
            let link;
            switch (h3Element.textContent) {
              case studiesContent.javascript.title:
                link = studiesContent.javascript.certificateUrl;
                insertCertificateDocument(link, CERTIFICATE_MODAL);
                break;
              case studiesContent.english.title:
                link = studiesContent.english.certificateUrl;
                insertCertificateDocument(link, CERTIFICATE_MODAL);
                break;
              default:
                console.warn(`No certificate found for study: ${h3Element.textContent}`);
                break;
            }
          } else {
            console.warn("No h3 element found in study details.");
          }
        }
      } else {
        CERTIFICATE_MODAL.innerHTML = "";
      }
    };

    const insertCertificateDocument = (link, CERTIFICATE_MODAL) => {
      const modalContent = document.createElement("div");
      const spanClose = document.createElement("span");
      const closeIcon = document.createElement("i");
      const documentIframe = document.createElement("iframe");

      modalContent.classList.add("modal-content");
      spanClose.classList.add("close");
      closeIcon.classList.add("fa-regular", "fa-circle-xmark");

      documentIframe.src = link;
      documentIframe.allow = "autoplay";

      spanClose.appendChild(closeIcon);

      CERTIFICATE_MODAL.addEventListener("click", (event) => {
        if (event.target === CERTIFICATE_MODAL) {
          CERTIFICATE_MODAL.classList.remove("show");
          CERTIFICATE_MODAL.innerHTML = "";
        }
      });
      spanClose.addEventListener("click", () => {
        CERTIFICATE_MODAL.classList.remove("show");
        CERTIFICATE_MODAL.innerHTML = "";
      });

      modalContent.appendChild(spanClose);
      modalContent.appendChild(documentIframe);

      return CERTIFICATE_MODAL.appendChild(modalContent);
    };

    showCertificateBtn.forEach((btn) => {
      const studyDetails = btn.closest(".study-details");
      btn.addEventListener("click", (event) => toggleShowCertificate(event, studyDetails));
    }); // certificate modal logic ended, my head hurts causa.
  });
  // SHOW CERTIFICATE LOGIC
})();
