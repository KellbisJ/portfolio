import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";



const STUDIES_CONTENT = [
  {
    title: {
      [LANGUAGES.SPANISH]: "Full Stack Developer con JavaScript",
      [LANGUAGES.ENGLISH]: "Full Stack Developer with JavaScript",
    },
    year: "2024",
    certificateUrl: "https://ik.imagekit.io/137/certifications/Screenshot%202025-03-30%20211007.png?updatedAt=1748398553977",
    studiesReferences: {
      platzi: "https://platzi.com/p/SalazarKellbis/ruta/100-javascript-full-stack/diploma/detalle/",
    },
  },
  {
    title: {
      [LANGUAGES.SPANISH]: "Inglés Avanzado C1",
      [LANGUAGES.ENGLISH]: "Advanced English C1",
    },
    year: "2025",
    certificateUrl: "https://ik.imagekit.io/137/certifications/ENG-C1.png?updatedAt=1748398554186",
    studiesReferences: {
      platzi: "https://platzi.com/p/SalazarKellbis/ruta/8311-advanced-core/diploma/detalle/",
    },
  },
  {
    title: {
      [LANGUAGES.SPANISH]: "JavaScript Para Backend",
      [LANGUAGES.ENGLISH]: "JavaScript For Backend",
    },
    year: "2024",
    certificateUrl: "https://ik.imagekit.io/137/certifications/Screenshot%202025-03-30%20212130.png?updatedAt=1748398556159",
    studiesReferences: {
      platzi: "https://platzi.com/p/SalazarKellbis/ruta/23278-backend-js/diploma/detalle/",
    },
  },
  {
    title: {
      [LANGUAGES.SPANISH]: "Certificado de inglés EF SET",
      [LANGUAGES.ENGLISH]: "EF SET English Certificate",
    },
    year: "2025",
    certificateUrl: "https://ik.imagekit.io/137/certifications/ef-set.png?updatedAt=1748452302343",
    studiesReferences: {
      efSet: "https://cert.efset.org/fJy3EA",
    },
  },
];

const headingStyle = {
  [LANGUAGES.SPANISH]: "Títulos y CERTIFICACIONES",
  [LANGUAGES.ENGLISH]: "Education & Certifications"
};

const myStudiesContent = () => {
  const CONTAINER = document.createElement("div");
  CONTAINER.classList.add("content__my__studies");

  const heading = document.createElement("h2");
  heading.classList.add("tech-section__heading", "studies__section__title");

  const studiesGrid = document.createElement("div");
  studiesGrid.classList.add("studies__grid");

  const renderContentStudies = () => {
    heading.textContent = headingStyle[selectedLanguage];
    studiesGrid.innerHTML = "";

    STUDIES_CONTENT.forEach((item, index) => {
      const delay = Math.min(index * 120, 900);

      const card = document.createElement("article");
      card.className = "study__card";
      card.style.setProperty("--delay", `${delay}ms`);

      const imgWrap = document.createElement("div");
      imgWrap.className = "study__card__img";

      const certImg = document.createElement("img");
      certImg.src = item.certificateUrl;
      certImg.alt = typeof item.title === "object" ? item.title[selectedLanguage] : item.title;
      certImg.loading = "lazy";
      certImg.decoding = "async";

      imgWrap.appendChild(certImg);

      const info = document.createElement("div");
      info.className = "study__card__info";

      const titleLabel = document.createElement("h3");
      titleLabel.textContent = typeof item.title === "object" ? item.title[selectedLanguage] : item.title;
      info.appendChild(titleLabel);

      const yearEl = document.createElement("span");
      yearEl.className = "study__card__year";
      yearEl.textContent = item.year;
      info.appendChild(yearEl);

      const refsWrap = document.createElement("div");
      refsWrap.className = "study__card__refs";

      if (item.studiesReferences) {
        Object.entries(item.studiesReferences).forEach(([key, url]) => {
          const refLink = document.createElement("a");
          refLink.href = url;
          refLink.target = "_blank";
          refLink.rel = "noopener noreferrer";
          refLink.className = "study__card__ref";

          const refLabel = document.createElement("span");
          refLabel.textContent = key.toUpperCase();
          refLink.appendChild(refLabel);

          refsWrap.appendChild(refLink);
        });
      }

      if (refsWrap.childNodes.length > 0) {
        info.appendChild(refsWrap);
      }

      card.appendChild(imgWrap);
      card.appendChild(info);
      studiesGrid.appendChild(card);
    });
  };

  CONTAINER.appendChild(heading);
  CONTAINER.appendChild(studiesGrid);

  renderContentStudies();

  languageEmitter.on("languageChanged", renderContentStudies);

  return CONTAINER;
};

export { myStudiesContent };
