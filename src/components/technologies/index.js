import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";

const TECH_CONTENT_KEY = "technologies";

// Move static data outside the component function
const technologiesMaterial = [
  {
    id: "programming",
    name: {
      [LANGUAGES.SPANISH]: "Lenguajes de programación",
      [LANGUAGES.ENGLISH]: "Programming Languages",
    },
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: "TypeScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend", // Static title doesn't need translation
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS3" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    name: "Backend", // Static title
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", name: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: "Express.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", name: "Django" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
    ],
  },
  {
    id: "tools",
    name: {
      [LANGUAGES.SPANISH]: "Herramientas",
      [LANGUAGES.ENGLISH]: "Tools",
    },
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: "Git" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: "GitHub" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", name: "Vite.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg", name: "Docker" },
    ],
  },
];

const technologiesContent = () => {
  const CONTENT_TECHNOLOGIES = document.createElement("div");
  CONTENT_TECHNOLOGIES.classList.add("content__technologies");

  const dynamicTitleElements = {};

  const createTechnologiesContent = () => {
    technologiesMaterial.forEach((tech) => {
      const techCategoryContainer = document.createElement("section");
      techCategoryContainer.className = "technology__category";
      techCategoryContainer.id = tech.id;

      const techCategoryTitle = document.createElement("h3");
      techCategoryTitle.className = "tech__category__title";

      if (typeof tech.name === "object") {
        techCategoryTitle.textContent = tech.name[selectedLanguage];
        // Store reference for dynamic titles only
        dynamicTitleElements[tech.id] = techCategoryTitle;
      } else {
        techCategoryTitle.textContent = tech.name;
      }

      techCategoryContainer.appendChild(techCategoryTitle);

      const contentTechnologiesGrid = document.createElement("div");
      contentTechnologiesGrid.className = "content__technologies__img__grid";

      tech.icons.forEach((iconData) => {
        const technologyImgContainer = document.createElement("div");
        technologyImgContainer.className = "technologies__img__container";

        const techIconSkeleton = document.createElement("div");
        techIconSkeleton.classList.add("techImgSk");
        // technologyImgContainer.appendChild(techIconSkeleton);

        imgCreatorDisplayer("technologies__img", iconData.src, technologyImgContainer, techIconSkeleton);
        // const iconImg = document.createElement("img");
        // iconImg.className = ;
        // iconImg.src =
        // iconImg.alt = iconData.name;

        const technologyName = document.createElement("p");
        technologyName.textContent = iconData.name;

        // technologyImgContainer.appendChild(techImage);
        technologyImgContainer.appendChild(technologyName);

        contentTechnologiesGrid.appendChild(technologyImgContainer);
      });

      techCategoryContainer.appendChild(contentTechnologiesGrid);
      CONTENT_TECHNOLOGIES.appendChild(techCategoryContainer);
    });
  };

  const updateTitles = () => {
    technologiesMaterial.forEach((tech) => {
      if (typeof tech.name === "object" && dynamicTitleElements[tech.id]) {
        dynamicTitleElements[tech.id].textContent = tech.name[selectedLanguage];
      }
    });
  };

  createTechnologiesContent();

  languageEmitter.on("languageChanged", updateTitles);

  return CONTENT_TECHNOLOGIES;
};

export { technologiesContent, TECH_CONTENT_KEY };
