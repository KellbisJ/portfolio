import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";

const PROJECTS_CONTENT_KEY = "projects";

const projectsContent = () => {
  const techImageUrl = {
    vitejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  };

  const projectsContentIcons = {
    fileCodeIcon: ["fa-solid", "fa-file-code"],
    diagonalArrowIcon: ["fa-solid", "fa-arrow-up-right-from-square"],
  };

  const projectDescription = {
    moviesKs: {
      spanish: "Este proyecto es un sitio web que permite a los usuarios consumir información sobre películas y series.",
      english: "This project is a website that allows users to consume information about movies and series.",
    },
    myEcm: {
      spanish: "Un prototipo de ecommerce básico.",
      english: "A basic ecommerce prototype.",
    },
    toDo: {
      spanish: "Un simple to-do list.",
      english: "A simple to-do list.",
    },
    englishJourney: {
      spanish: "Un blog para plasmar y documentar las muchas cosas aprendidas en inglés.",
      english: "A blog to capture and document the many things learned in English.",
    },
  };

  const projectsMaterial = {
    react: "devicon-react-original colored",
    vite: techImageUrl.vitejs,
    typescript: "devicon-typescript-plain colored",
    tailwindcss: "devicon-tailwindcss-original colored",
    expressjs: "devicon-express-original",
    javascript: "devicon-javascript-plain colored",
    css: "devicon-css3-plain-wordmark colored",
  };

  const myProjects = [
    {
      title: "MoviesKS",
      imageSrc: ["https://ik.imagekit.io/137/Portfolio/MoviesKSBACKGROUND.webp?updatedAt=1744037093527", "https://ik.imagekit.io/137/Portfolio/mobmoviesk.webp?updatedAt=1750621094027"],
      projectUrl: "https://movies-ks-frontend.vercel.app/",
      repositoryUrl: "https://github.com/KellbisJ/MoviesKS",
      description: projectDescription.moviesKs.spanish,
      technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "ExpressJS"],
      bgColor: "#DBEAFE",
    },
    {
      title: "MyEcm (fake ecommerce)",
      imageSrc: ["https://ik.imagekit.io/137/Portfolio/MyEcmCARD.webp?updatedAt=1744037093039", "https://ik.imagekit.io/137/Portfolio/MyEcmCARD.webp?updatedAt=1744037093039"],
      projectUrl: "https://fakeshopiecm.netlify.app",
      repositoryUrl: "https://github.com/KellbisJ/my-ecm",
      description: projectDescription.myEcm.spanish,
      technologies: ["React", "Vite", "TailwindCSS", "JavaScript"],
      bgColor: "#1E293B",
    },
    {
      title: "To-do list",
      imageSrc: ["https://ik.imagekit.io/137/Portfolio/TodoCARD.webp?updatedAt=1744037092983", "https://ik.imagekit.io/137/Portfolio/TodoCARD.webp?updatedAt=1744037092983"],
      projectUrl: "https://kellbisj.github.io/TODO-FOR-DO/",
      repositoryUrl: "https://github.com/KellbisJ/TODO-FOR-DO",
      description: projectDescription.toDo.spanish,
      technologies: ["React", "JavaScript", "CSS"],
      bgColor: "#131f24",
    },
    {
      title: "English Journey Blog",
      imageSrc: ["https://ik.imagekit.io/137/Portfolio/engjourneyCARD.webp?updatedAt=1744037093009", "https://ik.imagekit.io/137/Portfolio/engjourneyCARD.webp?updatedAt=1744037093009"],
      projectUrl: "https://my-english-journey.vercel.app",
      repositoryUrl: "https://github.com/KellbisJ/my-english-journey",
      description: projectDescription.englishJourney.spanish,
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      bgColor: "linear-gradient(to right, #4299e1, #9f7aea, #f56565)",
    },
  ];

  const projectTitleMapping = {
    MoviesKS: "moviesKs",
    "MyEcm (fake ecommerce)": "myEcm",
    "To-do list": "toDo",
    "English Journey Blog": "englishJourney",
  };

  const CONTENT_PROJECTS = document.createElement("div");
  CONTENT_PROJECTS.classList.add("content__projects");

  const contentProjectInfoContainer = document.createElement("div");
  contentProjectInfoContainer.classList.add("content__project__info__container");

  CONTENT_PROJECTS.appendChild(contentProjectInfoContainer);

  const createProjectElement = (project) => {
    const projectInfoContainer = document.createElement("article");
    projectInfoContainer.classList.add("content__project__info");

    const projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;
    projectTitle.classList.add("project__title", "textCardColor");

    const projectInfoWrapper = document.createElement("div");
    projectInfoWrapper.classList.add("project__info__wrapper");

    const projectVisualizer = document.createElement("div");
    projectVisualizer.classList.add("project__visualizer");

    const normalCardVisualizer = document.createElement("div");
    normalCardVisualizer.classList.add("normal__card__visualizer");

    const cellphoneVisualizer = document.createElement("div");
    cellphoneVisualizer.classList.add("cellphone__visualizer");

    const cellphoneScreen = document.createElement("div");
    cellphoneScreen.classList.add("cellphone__screen");

    cellphoneVisualizer.append(cellphoneScreen); // cellphone model

    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project__details");

    const projectDescription = document.createElement("div");
    projectDescription.classList.add("project__description");

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = project.description;
    descriptionParagraph.classList.add("description__paragraph", "textCardColor", "textCardAdditionalParameters");

    const projectTechnologies = document.createElement("div");
    projectTechnologies.classList.add("project__technologies");

    const TechnologiesTitle = document.createElement("h4");
    TechnologiesTitle.classList.add("textCardColor");
    TechnologiesTitle.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Tecnologías utilizadas:" : "Technologies used:";

    const techContainer = document.createElement("div");
    techContainer.classList.add("tech__container");

    const projectNavigator = document.createElement("div");
    projectNavigator.classList.add("project__navigator");

    projectTechnologies.append(TechnologiesTitle, techContainer);

    projectDetails.append(projectDescription, projectTechnologies);

    if (project.projectUrl) {
      const navigatorBtn = document.createElement("button");
      navigatorBtn.classList.add("navigator__btn");

      const projectPageLink = document.createElement("a");
      projectPageLink.classList.add("project__page__link", "textCardColor", "textCardAdditionalParameters");

      const linkIcon = document.createElement("i");
      linkIcon.classList.add(...projectsContentIcons.diagonalArrowIcon, "textCardColor", "textCardAdditionalParameters");

      projectPageLink.href = project.projectUrl;
      projectPageLink.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Echa un vistazo a este proyecto" : "Take a look to this project";
      projectPageLink.title = "Navigate to the project page";
      projectPageLink.rel = "noopener noreferrer";
      projectPageLink.target = "_blank";
      projectPageLink.setAttribute("aria-label", "NavigateToProjectPage");

      projectPageLink.appendChild(linkIcon);
      navigatorBtn.appendChild(projectPageLink);
      projectNavigator.appendChild(navigatorBtn);
    }
    if (project.repositoryUrl) {
      const navigatorBtn = document.createElement("button");
      navigatorBtn.classList.add("navigator__btn");

      const projectSourceCode = document.createElement("a");
      projectSourceCode.classList.add("project__source__code", "textCardColor", "textCardAdditionalParameters");

      const codeIcon = document.createElement("i");
      codeIcon.classList.add(...projectsContentIcons.fileCodeIcon, "textCardAdditionalParameters");

      projectSourceCode.href = project.repositoryUrl;
      projectSourceCode.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Código fuente" : "Source code";
      projectSourceCode.title = "Navigate to the project source code";
      projectSourceCode.rel = "noopener noreferrer";
      projectSourceCode.target = "_blank";
      projectSourceCode.setAttribute("aria-label", "NavigateToProjectSourceCode");

      projectSourceCode.appendChild(codeIcon);
      navigatorBtn.appendChild(projectSourceCode);
      projectNavigator.appendChild(navigatorBtn);
    }

    projectDetails.appendChild(projectNavigator);
    projectDescription.appendChild(descriptionParagraph);

    projectInfoWrapper.appendChild(projectVisualizer);

    projectInfoContainer.append(projectTitle, projectInfoWrapper);

    // IMAGE LOADING
    const projectSk = document.createElement("div");
    projectSk.classList.add("projectSk");

    if (window.innerWidth >= 768) {
      imgCreatorDisplayer("project-img", project.imageSrc[1], cellphoneScreen, projectSk);

      projectInfoWrapper.appendChild(projectDetails);

      projectVisualizer.appendChild(cellphoneVisualizer);

      projectInfoContainer.style.backgroundImage = `url(${project.imageSrc[0]})`;
    } else if (window.innerWidth <= 767) {
      imgCreatorDisplayer("project-img", project.imageSrc[0], normalCardVisualizer, projectSk);
      projectVisualizer.appendChild(normalCardVisualizer);

      projectInfoContainer.appendChild(projectDetails);
      if (project.bgColor.includes("gradient")) {
        projectInfoContainer.style.backgroundImage = project.bgColor;
      } else {
        projectInfoContainer.style.backgroundColor = project.bgColor;
      }
    }

    project.technologies.forEach((tech) => {
      const techBadge = document.createElement("span");
      techBadge.classList.add("tech-badge");
      const techName = document.createElement("p");
      techName.classList.add("tech__name", "textCardColor", "textCardAdditionalParameters");
      techName.textContent = tech;
      techBadge.appendChild(techName);

      if (projectsMaterial[tech.toLowerCase()] && projectsMaterial[tech.toLowerCase()].startsWith("http")) {
        const techImg = document.createElement("img");
        techImg.classList.add("tech-img");
        techImg.src = projectsMaterial[tech.toLowerCase()];
        techBadge.appendChild(techImg);
      } else {
        const techIcon = document.createElement("i");
        techIcon.className = projectsMaterial[tech.toLowerCase()];
        techBadge.appendChild(techIcon);
      }

      techContainer.appendChild(techBadge);
    });

    return projectInfoContainer;
  };

  const updateProjectDescriptions = () => {
    myProjects.forEach((project) => {
      const descriptionKey = projectTitleMapping[project.title];
      if (selectedLanguage === LANGUAGES.SPANISH) {
        project.description = projectDescription[descriptionKey].spanish;
      } else if (selectedLanguage === LANGUAGES.ENGLISH) {
        project.description = projectDescription[descriptionKey].english;
      }
    });
    renderProjects();
  };

  const renderProjects = () => {
    contentProjectInfoContainer.innerHTML = "";

    myProjects.forEach((project) => {
      const projectElement = createProjectElement(project);
      contentProjectInfoContainer.appendChild(projectElement);
    });
  };

  languageEmitter.on("languageChanged", updateProjectDescriptions);

  updateProjectDescriptions();

  return CONTENT_PROJECTS;
};

export { projectsContent, PROJECTS_CONTENT_KEY };
