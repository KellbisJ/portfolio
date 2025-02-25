import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

(() => {
  const technologiesMaterial = {
    globeTechIcon: "fa-solid fa-globe",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS3" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: "TypeScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", name: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: "Git" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", name: "Vite.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", name: "Express.js" },
    ],
  };

  const technologiesText = {
    spanish: "Tecnologías",
    english: "Technologies",
  };

  const CONTENT_TECHNOLOGIES = document.querySelector(".content__technologies");

  const createTechnologiesContent = () => {
    const contentTechnologiesTitle = document.createElement("div");
    contentTechnologiesTitle.className = "content__technologies__title";

    const titleIcon = document.createElement("i");
    titleIcon.className = technologiesMaterial.globeTechIcon;
    contentTechnologiesTitle.appendChild(titleIcon);

    const title = document.createElement("h2");
    title.classList.add("tech-title");
    contentTechnologiesTitle.appendChild(title);

    const contentTechnologiesGrid = document.createElement("div");
    contentTechnologiesGrid.className = "content__technologies__img__grid";

    technologiesMaterial.icons.forEach((iconData) => {
      const technologyImgContainer = document.createElement("div");
      technologyImgContainer.className = "technologies__img__container";

      const technologyImg = document.createElement("img");
      technologyImg.className = "technologies__img";
      technologyImg.src = iconData.src;
      technologyImgContainer.appendChild(technologyImg);

      const technologyName = document.createElement("p");
      technologyName.textContent = iconData.name;
      technologyImgContainer.appendChild(technologyName);

      contentTechnologiesGrid.appendChild(technologyImgContainer);
    });

    CONTENT_TECHNOLOGIES.appendChild(contentTechnologiesTitle);
    CONTENT_TECHNOLOGIES.appendChild(contentTechnologiesGrid);

    updateContentBasedOnSelectedLanguage();
  };

  const updateContentBasedOnSelectedLanguage = () => {
    const techTitle = document.querySelector(".tech-title");
    if (selectedLanguage === LANGUAGES.SPANISH) {
      techTitle.textContent = technologiesText.spanish;
    } else if (selectedLanguage === LANGUAGES.ENGLISH) {
      techTitle.textContent = technologiesText.english;
    }
  };

  languageEmitter.on("languageChanged", updateContentBasedOnSelectedLanguage);

  createTechnologiesContent();
})();
