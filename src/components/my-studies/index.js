import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

const STUDIES_CONTENT_KEY = "studies";

const myStudiesContent = () => {
  // MY STUDIES CONTENT

  const STUDIES_CONTENT = [
    {
      title: selectedLanguage === LANGUAGES.SPANISH ? "Full Stack Developer con JavaScript" : "Full Stack Developer with JavaScript",
      year: "2024",
      certificateUrl: "https://ik.imagekit.io/137/certifications/Screenshot%202025-03-30%20211007.png?updatedAt=1748398553977",
      studiesReferences: {
        platzi: "https://platzi.com/home/",
      },
    },
    {
      title: LANGUAGES.SPANISH ? "Inglés Avanzado C1" : "Advanced English C1",
      year: "2025",
      certificateUrl: "https://ik.imagekit.io/137/certifications/ENG-C1.png?updatedAt=1748398554186",
      studiesReferences: {
        platzi: "https://platzi.com/escuela/ingles/",
      },
    },
    {
      title: selectedLanguage === LANGUAGES.SPANISH ? "JavaScript Para Backend" : "JavaScript For Backend",
      year: "2024",
      certificateUrl: "https://ik.imagekit.io/137/certifications/Screenshot%202025-03-30%20212130.png?updatedAt=1748398556159",
      studiesReferences: {
        platzi: "https://platzi.com/home/",
      },
    },
    {
      title: selectedLanguage === LANGUAGES.SPANISH ? "Certificado de inglés EF SET" : "EF SET English Certificate",
      year: "2025",
      certificateUrl: "https://ik.imagekit.io/137/certifications/ef-set.png?updatedAt=1748452302343",
      studiesReferences: {
        efSet: "https://cert.efset.org/fJy3EA",
      },
    },
  ];

  const CONTENT_MY_STUDIES = document.createElement("div");
  CONTENT_MY_STUDIES.classList.add("content__my__studies");

  const createStudiesContents = () => {
    const studiesGrid = document.createElement("div");
    studiesGrid.classList.add("studies__grid");
    CONTENT_MY_STUDIES.appendChild(studiesGrid);

    STUDIES_CONTENT.forEach((studiesContent) => {
      const studyCard = document.createElement("div");
      studyCard.classList.add("study__card");

      const studyInfo = document.createElement("div");
      studyInfo.classList.add("study__info");

      const studiesRefs = document.createElement("div");
      studiesRefs.classList.add("studies__ref");

      const studyInfoImg = document.createElement("div");
      studyInfoImg.classList.add("study__info__img");

      const certificateImg = document.createElement("img");
      certificateImg.src = studiesContent.certificateUrl;

      studyInfoImg.appendChild(certificateImg);

      const studyDetailsTitle = document.createElement("h3");
      studyDetailsTitle.textContent = studiesContent.title;
      studyInfo.appendChild(studyDetailsTitle);

      const studiesInformationReferences = studiesContent.studiesReferences;
      Object.values(studiesInformationReferences).forEach((studyRef, index) => {
        const refLink = document.createElement("a");
        refLink.href = studyRef;
        refLink.target = "_blank";
        refLink.rel = "noopener noreferrer";
        const studyDetailsReferences = document.createElement("p");
        refLink.appendChild(studyDetailsReferences);
        studiesRefs.appendChild(refLink);
        studyDetailsReferences.textContent = Object.keys(studiesInformationReferences)[index].toUpperCase();
      });

      const studyYear = document.createElement("p");
      studyYear.textContent = studiesContent.year;
      studiesRefs.appendChild(studyYear);

      studyCard.appendChild(studyInfo);
      studyCard.appendChild(studyInfoImg);
      studyCard.appendChild(studiesRefs);

      studiesGrid.appendChild(studyCard);
    });
    return CONTENT_MY_STUDIES;
  };

  const renderContentStudies = () => {
    CONTENT_MY_STUDIES.innerHTML = "";

    createStudiesContents();
  };

  renderContentStudies();

  languageEmitter.on("languageChanged", renderContentStudies);

  return CONTENT_MY_STUDIES;
};

export { myStudiesContent, STUDIES_CONTENT_KEY };
