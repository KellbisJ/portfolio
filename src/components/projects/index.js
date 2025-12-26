import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";
import { projectsData } from "./projects.data.js";

const PROJECTS_CONTENT_KEY = "projects";

const projectsContent = () => {
  const projectAdditionalIconsDataExtract = projectsData.projectAdditionalIcons();

  const projectDescriptionDataExtract = projectsData.projectDescription();

  const projectTechIconsDataExtract = projectsData.projectTechIcons();

  const myProjects = projectsData.myProjectsData();

  const projectTitleMapping = projectsData.projectTitleMapping();

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
      linkIcon.classList.add(...projectAdditionalIconsDataExtract.diagonalArrowIcon, "textCardColor", "textCardAdditionalParameters");

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
      codeIcon.classList.add(...projectAdditionalIconsDataExtract.fileCodeIcon, "textCardAdditionalParameters");

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

    let currentImageContainer = null;
    let lastLayoutMode = null;

    function handleResponsiveProjectCards() {
      const width = window.innerWidth;

      const isWide = width >= 768;

      if (lastLayoutMode === (isWide ? "wide" : "small")) return;

      lastLayoutMode = isWide ? "wide" : "small";

      if (currentImageContainer) {
        currentImageContainer.innerHTML = "";
      }

      projectVisualizer.innerHTML = "";
      projectInfoWrapper.innerHTML = "";

      projectInfoContainer.innerHTML = "";
      projectInfoContainer.append(projectTitle, projectInfoWrapper);
      projectInfoWrapper.appendChild(projectVisualizer);

      if (isWide) {
        // Desktop layout

        currentImageContainer = cellphoneScreen;

        imgCreatorDisplayer("project-img", project.imageSrc[1], cellphoneScreen, projectSk);

        projectVisualizer.appendChild(cellphoneVisualizer);
        projectInfoWrapper.appendChild(projectDetails);

        projectInfoContainer.style.backgroundImage = `url(${project.imageSrc[0]})`;
        projectInfoContainer.style.backgroundColor = "";
      } else {
        // Mobile layout

        currentImageContainer = normalCardVisualizer;

        imgCreatorDisplayer("project-img", project.imageSrc[0], normalCardVisualizer, projectSk);

        projectVisualizer.appendChild(normalCardVisualizer);
        projectInfoContainer.appendChild(projectDetails);

        projectInfoContainer.style.backgroundImage = "";

        if (project.bgColor.includes("gradient")) {
          projectInfoContainer.style.backgroundImage = project.bgColor;
        } else {
          projectInfoContainer.style.backgroundColor = project.bgColor;
        }
      }
    }

    handleResponsiveProjectCards();

    // Debounced resize handler

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResponsiveProjectCards, 150);
    });

    project.technologies.forEach((tech) => {
      const techBadge = document.createElement("span");
      techBadge.classList.add("tech-badge");
      const techName = document.createElement("p");
      techName.classList.add("tech__name", "textCardColor", "textCardAdditionalParameters");
      techName.textContent = tech;
      techBadge.appendChild(techName);

      if (projectTechIconsDataExtract[tech.toLowerCase()] && projectTechIconsDataExtract[tech.toLowerCase()].startsWith("http")) {
        const techImg = document.createElement("img");
        techImg.classList.add("tech-img");
        techImg.src = projectTechIconsDataExtract[tech.toLowerCase()];
        techBadge.appendChild(techImg);
      } else {
        const techIcon = document.createElement("i");
        techIcon.className = projectTechIconsDataExtract[tech.toLowerCase()];
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
        project.description = projectDescriptionDataExtract[descriptionKey].spanish;
      } else if (selectedLanguage === LANGUAGES.ENGLISH) {
        project.description = projectDescriptionDataExtract[descriptionKey].english;
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
