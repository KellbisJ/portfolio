import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

const TECH_CONTENT_KEY = "technologies";

const technologiesContent = () => {
  const technologiesMaterial = [
    {
      name: selectedLanguage === LANGUAGES.SPANISH ? "Lenguajes de programación" : "Programming Languages",
      icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: "TypeScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", name: "Python" },
      ],
    },
    {
      name: "Frontend",
      icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
      ],
    },
    {
      name: "Backend",
      icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", name: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: "Express.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", name: "Django" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", name: "PostgreSQL" },
      ],
    },
    {
      name: selectedLanguage === LANGUAGES.SPANISH ? "Herramientas" : "Tools",
      icons: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: "Git" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: "GitHub" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", name: "Vite.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg", name: "Docker" },
      ],
    },
  ];

  // globeTechIcon: "fa-solid fa-globe",

  // const technologiesText = {
  //   spanish: "Tecnologías",
  //   english: "Technologies",
  // };

  const CONTENT_TECHNOLOGIES = document.createElement("div");
  CONTENT_TECHNOLOGIES.classList.add("content__technologies");

  const createTechnologiesContent = () => {
    // const contentTechnologiesTitle = document.createElement("div");
    // contentTechnologiesTitle.className = "content__technologies__title";

    // const titleIcon = document.createElement("i");
    // titleIcon.className = technologiesMaterial.globeTechIcon;
    // contentTechnologiesTitle.appendChild(titleIcon);

    // const title = document.createElement("h2");
    // title.classList.add("tech-title");
    // contentTechnologiesTitle.appendChild(title);

    technologiesMaterial.forEach((tech) => {
      const techCategoryContainer = document.createElement("section");
      techCategoryContainer.className = "technology__category";

      const techCategoryTitle = document.createElement("h3");
      techCategoryTitle.className = "tech__category__title";
      techCategoryTitle.textContent = tech.name;
      techCategoryContainer.appendChild(techCategoryTitle);

      const contentTechnologiesGrid = document.createElement("div");
      contentTechnologiesGrid.className = "content__technologies__img__grid";

      tech.icons.forEach((iconData) => {
        const technologyImgContainer = document.createElement("div");
        technologyImgContainer.className = "technologies__img__container";

        const iconImg = document.createElement("img");
        iconImg.className = "technologies__img";
        iconImg.src = iconData.src;
        iconImg.alt = iconData.name;

        const technologyName = document.createElement("p");
        technologyName.textContent = iconData.name;

        technologyImgContainer.appendChild(iconImg);
        technologyImgContainer.appendChild(technologyName);

        contentTechnologiesGrid.appendChild(technologyImgContainer);
      });
      techCategoryContainer.appendChild(contentTechnologiesGrid);
      CONTENT_TECHNOLOGIES.appendChild(techCategoryContainer);
    });

    // CONTENT_TECHNOLOGIES.appendChild(contentTechnologiesTitle);

    // updateContentBasedOnSelectedLanguage();
  };

  // const updateContentBasedOnSelectedLanguage = () => {
  //   const techTitle = document.querySelector(".tech-title");
  //   if (selectedLanguage === LANGUAGES.SPANISH) {
  //     techTitle.textContent = technologiesText.spanish;
  //   } else if (selectedLanguage === LANGUAGES.ENGLISH) {
  //     techTitle.textContent = technologiesText.english;
  //   }
  // };

  // languageEmitter.on("languageChanged", updateContentBasedOnSelectedLanguage);

  createTechnologiesContent();

  return CONTENT_TECHNOLOGIES;
};

export { technologiesContent, TECH_CONTENT_KEY };
