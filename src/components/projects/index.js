import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";

const PROJECTS_CONTENT_KEY = "projects";

const projectsContent = () => {
  const techImageUrl = {
    vitejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  };

  const projectsContentIcons = {
    codeIcon: "fa-solid fa-code",
    diagonalArrowIcon: "fa-solid fa-up-right-from-square link-to-project-arrow",
    githubIcon: "devicon-github-original link-to-project-repository",
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
    express: "devicon-express-original",
    javascript: "devicon-javascript-plain colored",
    css: "devicon-css3-plain-wordmark colored",
  };

  const myProjects = [
    {
      title: "MoviesKS",
      imageSrc: "https://ik.imagekit.io/137/Portfolio/MoviesKSCARD.webp?updatedAt=1744037093138",
      projectUrl: "https://movies-ks-frontend.vercel.app/",
      repositoryUrl: "https://github.com/KellbisJ/MoviesKS",
      description: projectDescription.moviesKs.spanish,
      technologies: ["react", "vite", "typescript", "tailwindcss", "express"],
    },
    {
      title: "MyEcm (fake ecommerce)",
      imageSrc: "https://ik.imagekit.io/137/Portfolio/MyEcmCARD.webp?updatedAt=1744037093039",
      projectUrl: "https://fakeshopiecm.netlify.app",
      repositoryUrl: "https://github.com/KellbisJ/my-ecm",
      description: projectDescription.myEcm.spanish,
      technologies: ["react", "vite", "tailwindcss", "javascript"],
    },
    {
      title: "To-do list",
      imageSrc: "https://ik.imagekit.io/137/Portfolio/TodoCARD.webp?updatedAt=1744037092983",
      projectUrl: "https://kellbisj.github.io/TODO-FOR-DO/",
      repositoryUrl: "https://github.com/KellbisJ/TODO-FOR-DO",
      description: projectDescription.toDo.spanish,
      technologies: ["react", "javascript", "css"],
    },
    {
      title: "English Journey Blog",
      imageSrc: "https://ik.imagekit.io/137/Portfolio/engjourneyCARD.webp?updatedAt=1744037093009",
      projectUrl: "https://my-english-journey.vercel.app",
      repositoryUrl: "https://github.com/KellbisJ/my-english-journey",
      description: projectDescription.englishJourney.spanish,
      technologies: ["react", "typescript", "tailwindcss", "vite"],
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

    const figure = document.createElement("figure");
    figure.classList.add("content__project__img");

    const projectSk = document.createElement("div");
    projectSk.classList.add("projectSk");
    figure.appendChild(projectSk);

    imgCreatorDisplayer("project-img", project.imageSrc, figure, projectSk);

    // const img = document.createElement("img");
    // img.classList.add("project-img");
    // img.src = project.imageSrc;
    // img.alt = "Project";

    const projectLink = document.createElement("a");
    projectLink.href = project.projectUrl;
    projectLink.target = "_blank";
    projectLink.rel = "noopener noreferrer";

    const diagonalArrowIcon = document.createElement("i");
    diagonalArrowIcon.className = projectsContentIcons.diagonalArrowIcon;

    const repositoryLink = document.createElement("a");
    repositoryLink.href = project.repositoryUrl;
    repositoryLink.target = "_blank";
    repositoryLink.rel = "noopener noreferrer";

    const githubIcon = document.createElement("i");
    githubIcon.className = projectsContentIcons.githubIcon;

    const projectTitle = document.createElement("h3");
    // figcaption.classList.add("project-title");
    projectTitle.textContent = project.title;

    projectLink.appendChild(diagonalArrowIcon);
    repositoryLink.appendChild(githubIcon);
    // figure.appendChild(img);
    figure.appendChild(projectLink);
    figure.appendChild(repositoryLink);
    // figure.appendChild(figcaption);

    const projectDetails = document.createElement("div");
    projectDetails.classList.add("project-details");

    const projectDescription = document.createElement("div");
    projectDescription.classList.add("project-description");

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = project.description;

    projectDescription.appendChild(descriptionParagraph);

    const projectTechnologies = document.createElement("div");
    projectTechnologies.classList.add("project-technologies");

    project.technologies.forEach((tech) => {
      const techBadge = document.createElement("span");
      techBadge.classList.add("tech-badge");

      if (projectsMaterial[tech] && projectsMaterial[tech].startsWith("http")) {
        const techImg = document.createElement("img");
        techImg.classList.add("tech-img");
        techImg.src = projectsMaterial[tech];
        techBadge.appendChild(techImg);
      } else {
        const techIcon = document.createElement("i");
        techIcon.className = projectsMaterial[tech];
        techBadge.appendChild(techIcon);
      }

      projectTechnologies.appendChild(techBadge);
    });

    projectDetails.append(projectTitle, projectDescription, projectTechnologies);

    projectInfoContainer.append(figure, projectDetails);

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
