import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

(() => {
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
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    typescript: "devicon-typescript-plain colored",
    tailwindcss: "devicon-tailwindcss-original colored",
    express: "devicon-express-original",
    javascript: "devicon-javascript-plain colored",
    css: "devicon-css3-plain-wordmark colored",
  };

  const myProjects = [
    {
      title: "MoviesKS",
      imageSrc: "https://drive.google.com/thumbnail?id=1TlLMcsTrJThYEr1hIR9z5ZsjT-kYqoBx&sz=s600",
      projectUrl: "https://movies-ks-frontend.vercel.app/",
      repositoryUrl: "https://github.com/KellbisJ/MoviesKS",
      description: projectDescription.moviesKs.spanish,
      technologies: ["react", "vite", "typescript", "tailwindcss", "express"],
    },
    {
      title: "MyEcm (fake ecommerce)",
      imageSrc: "https://drive.google.com/thumbnail?id=11_1VVkIf5Jf9WZtUT8HcTjwc0w3VZs-_&sz=s600",
      projectUrl: "https://fakeshopiecm.netlify.app",
      repositoryUrl: "https://github.com/KellbisJ/my-ecm",
      description: projectDescription.myEcm.spanish,
      technologies: ["react", "vite", "tailwindcss", "javascript"],
    },
    {
      title: "To-do list",
      imageSrc: "https://drive.google.com/thumbnail?id=1ZgeADNEGW9C44VIH903tisv4Tb79QcIB&sz=s600",
      projectUrl: "https://kellbisj.github.io/TODO-FOR-DO/",
      repositoryUrl: "https://github.com/KellbisJ/TODO-FOR-DO",
      description: projectDescription.toDo.spanish,
      technologies: ["react", "javascript", "css"],
    },
    {
      title: "English Journey Blog",
      imageSrc: "https://drive.google.com/thumbnail?id=1FYbcvI3Lq7HisgqPKORA6eTMqBb-930w&sz=s600",
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

  const CONTENT_PROJECTS = document.querySelector(".content__projects");

  const projectTitle = document.createElement("div");
  projectTitle.classList.add("projects-title");

  const title = document.createElement("h2");

  const codeIcon = document.createElement("i");
  codeIcon.className = "fa-solid fa-code";

  projectTitle.appendChild(codeIcon);
  projectTitle.appendChild(title);

  const contentProjectInfoContainer = document.createElement("div");
  contentProjectInfoContainer.classList.add("content__project__info__container");

  CONTENT_PROJECTS.appendChild(projectTitle);
  CONTENT_PROJECTS.appendChild(contentProjectInfoContainer);

  const createProjectElement = (project) => {
    const projectInfoContainer = document.createElement("article");
    projectInfoContainer.classList.add("content__project__info");

    const figure = document.createElement("figure");
    figure.classList.add("content__project__img");

    const img = document.createElement("img");
    img.classList.add("project-img");
    img.src = project.imageSrc;
    img.alt = "Project";

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

    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("project-title");
    figcaption.textContent = project.title;

    projectLink.appendChild(diagonalArrowIcon);
    repositoryLink.appendChild(githubIcon);
    figure.appendChild(img);
    figure.appendChild(projectLink);
    figure.appendChild(repositoryLink);
    figure.appendChild(figcaption);

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

    projectDetails.appendChild(projectDescription);
    projectDetails.appendChild(projectTechnologies);

    projectInfoContainer.appendChild(figure);
    projectInfoContainer.appendChild(projectDetails);

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
    if (selectedLanguage === LANGUAGES.SPANISH) {
      title.textContent = "Proyectos";
    } else if (selectedLanguage === LANGUAGES.ENGLISH) {
      title.textContent = "Projects";
    }

    myProjects.forEach((project) => {
      const projectElement = createProjectElement(project);
      contentProjectInfoContainer.appendChild(projectElement);
    });
  };

  languageEmitter.on("languageChanged", updateProjectDescriptions);

  updateProjectDescriptions();
  renderProjects();
})();
