import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

(() => {
  // MY STUDIES CONTENT

  const studiesContent_ES = [
    {
      title: "Full Stack Developer con JavaScript",
      chronology: "2019 - Actualidad [2025]",
      certificateUrl: "https://drive.google.com/file/d/1E28ok_rk0Xx4Hoc8wExadZ-97qT0SVXk/preview",
      studiesReferences: {
        platzi: "https://platzi.com/home/",
        w3Schools: "https://www.w3schools.com",
        neetCode: "https://neetcode.io/",
        mdn: "https://developer.mozilla.org/es/",
        freeCode: "https://www.freecodecamp.org/",
        youtubeResources: "https://www.youtube.com/@midudev",
      },
      studiesTextContent: {
        platzi: "Platzi,",
        w3Schools: "W3schools,",
        neetCode: "NeetCode,",
        mdn: "MDN,",
        freeCode: "FreeCodeCamp,",
        youtubeResources: "YouTube resources...",
      },
    },
    {
      title: "Inglés Intermedio B1",
      chronology: "2023 - Actualidad [2025]",
      certificateUrl: "https://drive.google.com/file/d/1JSkOY1jn-W4wbfwBjmN53zdR_t4DnW7P/preview",
      studiesReferences: {
        realLifeApp: "https://reallifeglobal.com/app/",
        platzi: "https://platzi.com/escuela/ingles/",
        cambridgeDictionary: "https://dictionary.cambridge.org",
        lingolia: "https://english.lingolia.com/en/grammar/tenses",
        youtubeResources: "https://www.youtube.com/@LearnEnglishWithTVSeries",
      },
      studiesTextContent: {
        realLifeApp: "RealLifeApp,",
        platzi: "Platzi,",
        cambridgeDictionary: "Cambridge Dictionary,",
        lingolia: "Lingolia,",
        youtubeResources: "YouTube resources...",
      },
    },
    {
      title: "Escuela Secundaria",
      chronology: "2019 - 2024",
      studiesReferences: {
        highSchoolStudiesReferences: "Bachiller. Educación Media General. Republica Bolivariana de Venezuela, ciudad de origen.",
      },
    },
  ];
  const studiesContent_EN = [
    {
      title: "Full Stack Developer with JavaScript",
      chronology: "2019 - Present [2025]",
      certificateUrl: "https://drive.google.com/file/d/1E28ok_rk0Xx4Hoc8wExadZ-97qT0SVXk/preview",
      studiesReferences: {
        platzi: "https://platzi.com/home/",
        w3Schools: "https://www.w3schools.com",
        neetCode: "https://neetcode.io/",
        mdn: "https://developer.mozilla.org/en-US/",
        freeCode: "https://www.freecodecamp.org/",
        youtubeResources: "https://www.youtube.com/@midudev",
      },
      studiesTextContent: {
        platzi: "Platzi,",
        w3Schools: "W3schools,",
        neetCode: "NeetCode,",
        mdn: "MDN,",
        freeCode: "FreeCodeCamp,",
        youtubeResources: "YouTube resources...",
      },
    },
    {
      title: "Intermediate English B1",
      chronology: "2023 - Present [2025]",
      certificateUrl: "https://drive.google.com/file/d/1JSkOY1jn-W4wbfwBjmN53zdR_t4DnW7P/preview",
      studiesReferences: {
        realLifeApp: "https://reallifeglobal.com/app/",
        platzi: "https://platzi.com/escuela/ingles/",
        cambridgeDictionary: "https://dictionary.cambridge.org",
        lingolia: "https://english.lingolia.com/en/grammar/tenses",
        youtubeResources: "https://www.youtube.com/@LearnEnglishWithTVSeries",
      },
      studiesTextContent: {
        realLifeApp: "RealLifeApp,",
        platzi: "Platzi,",
        cambridgeDictionary: "Cambridge Dictionary,",
        lingolia: "Lingolia,",
        youtubeResources: "YouTube resources...",
      },
    },
    {
      title: "High School",
      chronology: "2019 - 2024",
      studiesReferences: {
        highSchoolStudiesReferences: "Bachelor. General Education. Bolivarian Republic of Venezuela, city of origin.",
      },
    },
  ];

  // console.log(studiesContent.highSchool.studiesInformation);

  const CONTENT_MY_STUDIES = document.querySelector(".content__my__studies");
  const myStudiesTitleHeader = document.createElement("div");
  const iconTitleHeader = document.createElement("i");
  const myStudiesTitle = document.createElement("h2");
  const contentMyStudiesInfo = document.createElement("div");

  myStudiesTitleHeader.classList.add("my-studies-title");
  iconTitleHeader.classList.add("fa-solid", "fa-book");
  contentMyStudiesInfo.classList.add("content__my__studies__info");

  myStudiesTitleHeader.appendChild(iconTitleHeader);
  myStudiesTitleHeader.appendChild(myStudiesTitle);

  CONTENT_MY_STUDIES.appendChild(myStudiesTitleHeader);

  const renderContentStudies = () => {
    CONTENT_MY_STUDIES.innerHTML = "";

    CONTENT_MY_STUDIES.appendChild(myStudiesTitleHeader);

    let studiesContent;
    if (selectedLanguage === LANGUAGES.SPANISH) {
      studiesContent = studiesContent_ES;
      myStudiesTitle.textContent = "Educación";
    } else if (selectedLanguage === LANGUAGES.ENGLISH) {
      studiesContent = studiesContent_EN;
      myStudiesTitle.textContent = "Education";
    }

    studiesContent.forEach((studyContent) => {
      const studyMetaData = createStudiesContents(studyContent);
      CONTENT_MY_STUDIES.appendChild(studyMetaData);
    });
    // showCertificateDocument();
  };

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

    if (content.title === "Escuela Secundaria" || content.title === "High School") {
      const studiesInformationReferences = content.studiesReferences.highSchoolStudiesReferences;

      const studyDetailsReferences = document.createElement("p");
      studyDetailsReferences.textContent = studiesInformationReferences;
      studyDetails.appendChild(studyDetailsReferences);

      const studyDetailsCronologyShowModalBtn = document.createElement("button");
      studyDetailsCronologyShowModalBtn.classList.add("btn", "physicalCertificate");
      studyDetailsCronologyShowModalBtn.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Certificado en físico" : "Physical certificate";
      studyDetails.appendChild(studyDetailsCronologyShowModalBtn);
    } else {
      const studiesInformationReferences = content.studiesReferences;
      const englishStudiesTextContent = content.studiesTextContent;

      Object.keys(studiesInformationReferences).forEach((key) => {
        const studyDetailsReferenceLinks = document.createElement("a");
        studyDetailsReferenceLinks.href = studiesInformationReferences[key];
        studyDetailsReferenceLinks.target = "_blank";
        studyDetailsReferenceLinks.rel = "noopener noreferrer";
        studyDetailsReferenceLinks.textContent = englishStudiesTextContent[key];

        studyDetailsLinks.appendChild(studyDetailsReferenceLinks);
      });

      studyDetails.appendChild(studyDetailsLinks);

      const studyDetailsCronologyShowModalBtn = document.createElement("button");
      studyDetailsCronologyShowModalBtn.classList.add("btn", "show-certificate-btn");
      studyDetailsCronologyShowModalBtn.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Ver certificado" : "View certificate";
      studyDetails.appendChild(studyDetailsCronologyShowModalBtn);
    }

    const studyDetailsCronology = document.createElement("p");
    studyDetailsCronology.textContent = content.chronology;
    studyDetails.appendChild(studyDetailsCronology);

    const studyDetailsModal = document.createElement("div");
    studyDetailsModal.classList.add("modal");
    studyDetails.appendChild(studyDetailsModal);

    studyItemContent.appendChild(studyItemContentPoint);
    studyItemContent.appendChild(studyDetails);

    return studyItemContent;
  };

  renderContentStudies();

  languageEmitter.on("languageChanged", renderContentStudies);

  // MY STUDIES CONTENT

  // SHOW CERTIFICATE LOGIC

  const toggleShowCertificate = (event, studyDetails) => {
    // console.log(event.target);
    let target = event.target;

    const CERTIFICATE_MODAL = studyDetails.querySelector(".modal"); // search for the .modal element within that specific studyDetails element

    CERTIFICATE_MODAL.classList.toggle("show"); // toggle between the visibility display

    if (CERTIFICATE_MODAL.classList.contains("show")) {
      if (target.classList.contains("btn") && target.classList.contains("show-certificate-btn")) {
        const h3Element = studyDetails.querySelector("h3");
        if (h3Element) {
          // console.log(h3Element.textContent);
          let link;
          switch (h3Element.textContent) {
            case studiesContent_ES[0].title:
            case studiesContent_EN[0].title:
              link = studiesContent_ES[0].certificateUrl || studiesContent_EN[0].certificateUrl;
              insertCertificateDocument(link, CERTIFICATE_MODAL);
              break;
            case studiesContent_ES[1].title:
            case studiesContent_EN[1].title:
              link = studiesContent_ES[1].certificateUrl || studiesContent_EN[1].certificateUrl;
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

  const showCertificateDocument = () => {
    const showCertificateBtn = document.querySelectorAll(".show-certificate-btn");
    showCertificateBtn.forEach((btn) => {
      const studyDetails = btn.closest(".study-details");
      btn.addEventListener("click", (event) => toggleShowCertificate(event, studyDetails));
    }); // certificate modal logic ended, my head hurts causa.
  };

  showCertificateDocument();
  languageEmitter.on("languageChanged", showCertificateDocument);
  // SHOW CERTIFICATE LOGIC
})();
