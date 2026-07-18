import { LANGUAGES, selectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";
import { imgCreatorDisplayer } from "../../utils/img-creator-displayer/index.js";
import { projectsMaterial, projectTechIcons } from "./projects.data.js";

const projectsContent = () => {
  const CONTENT_PROJECTS = document.createElement("div");
  CONTENT_PROJECTS.classList.add("content__projects");

  const sectionHeading = document.createElement("h2");
  sectionHeading.classList.add("tech-section__heading");
  sectionHeading.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Proyectos" : "Projects";
  CONTENT_PROJECTS.appendChild(sectionHeading);

  const contentProjectInfoContainer = document.createElement("div");
  contentProjectInfoContainer.classList.add("content__project__info__container");
  CONTENT_PROJECTS.appendChild(contentProjectInfoContainer);

  const createProjectElement = () => {
    contentProjectInfoContainer.innerHTML = "";

    projectsMaterial.forEach((project) => {
      const projectInfoContainer = document.createElement("article");
      projectInfoContainer.classList.add("content__project__info");
      projectInfoContainer.style.setProperty("--article-bg-color", project.bgColor.includes("gradient") ? "transparent" : project.bgColor);
      projectInfoContainer.style.setProperty("--project-background-img", `url(${project.imageBackground})`);
      projectInfoContainer.style.setProperty("--project-card-img", `url(${project.imageCard})`);

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = project.title;
      projectTitle.classList.add("project__title", "textCardColor");

      const projectInfoWrapper = document.createElement("div");
      projectInfoWrapper.classList.add("project__info__wrapper");

      const projectVisualizer = document.createElement("div");
      projectVisualizer.classList.add("project__visualizer");

      // This container acts as the phone frame and mobile card
      const projectImageContainer = document.createElement("div");
      projectImageContainer.classList.add("project__image__container");

      const projectSk = document.createElement("div");
      projectSk.classList.add("projectSk");

      imgCreatorDisplayer("project-img", project.imageBackground, projectImageContainer, projectSk);

      projectVisualizer.appendChild(projectImageContainer);

      const projectDetails = document.createElement("div");
      projectDetails.classList.add("project__details");

      const projectDescription = document.createElement("div");
      projectDescription.classList.add("project__description");

      const descriptionParagraph = document.createElement("p");
      descriptionParagraph.textContent = project.descriptions[selectedLanguage];
      descriptionParagraph.classList.add("description__paragraph", "textCardColor", "textCardAdditionalParameters");
      projectDescription.appendChild(descriptionParagraph);

      const projectTechnologies = document.createElement("div");
      projectTechnologies.classList.add("project__technologies");

      const technologiesTitle = document.createElement("h4");
      technologiesTitle.classList.add("textCardColor");
      technologiesTitle.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Tecnologías utilizadas:" : "Technologies used:";

      const techContainer = document.createElement("div");
      techContainer.classList.add("tech__container");

      Object.keys(project.technologies).forEach((tech) => {
        const techBadge = document.createElement("span");
        techBadge.classList.add("tech-badge");

        const techName = document.createElement("p");
        techName.classList.add("tech__name", "textCardColor", "textCardAdditionalParameters");
        techName.textContent = tech;
        techBadge.appendChild(techName);

        const techKey = tech.toLowerCase();
        const iconPath = projectTechIcons[techKey];

        if (iconPath && iconPath.startsWith("http")) {
          const techImg = document.createElement("img");
          techImg.classList.add("tech-img");
          techImg.src = iconPath;
          techImg.alt = tech;
          techImg.loading = "lazy";
          techBadge.appendChild(techImg);
        } else if (iconPath) {
          const techIcon = document.createElement("i");
          techIcon.className = iconPath;
          techBadge.appendChild(techIcon);
        }

        techContainer.appendChild(techBadge);
      });

      projectTechnologies.append(technologiesTitle, techContainer);
      projectDetails.append(projectDescription, projectTechnologies);

      const projectNavigator = document.createElement("div");
      projectNavigator.classList.add("project__navigator");

      const addNavBtn = (url, classes, text, iconClass, ariaLabel) => {
        const btn = document.createElement("button");
        btn.classList.add("navigator__btn");

        const link = document.createElement("a");
        link.classList.add(...classes, "textCardColor", "textCardAdditionalParameters");
        link.href = url;
        link.textContent = text;
        link.title = url.includes("source") ? "Navigate to the project source code" : "Navigate to the project page";
        link.rel = "noopener noreferrer";
        link.target = "_blank";
        link.setAttribute("aria-label", ariaLabel);

        const icon = document.createElement("i");
        icon.classList.add(...iconClass, "textCardColor", "textCardAdditionalParameters");
        link.appendChild(icon);

        btn.appendChild(link);
        projectNavigator.appendChild(btn);
      };

      if (project.projectUrl) {
        addNavBtn(
          project.projectUrl,
          ["project__page__link"],
          selectedLanguage === LANGUAGES.SPANISH ? "Echa un vistazo a este proyecto" : "Take a look to this project",
          ["fa-solid", "fa-arrow-up-right-from-square"],
          "NavigateToProjectPage",
        );
      }
      if (project.repositoryUrl) {
        addNavBtn(
          project.repositoryUrl,
          ["project__source__code"],
          selectedLanguage === LANGUAGES.SPANISH ? "Código fuente" : "Source code",
          ["fa-solid", "fa-file-code"],
          "NavigateToProjectSourceCode",
        );
      }

      projectDetails.appendChild(projectNavigator);
      projectInfoContainer.append(projectTitle, projectInfoWrapper);
      projectInfoWrapper.append(projectVisualizer, projectDetails);
      contentProjectInfoContainer.appendChild(projectInfoContainer);
    });
  };

  createProjectElement();

  const updateHeading = () => {
    sectionHeading.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Proyectos" : "Projects";
    createProjectElement();
  };

  languageEmitter.on("languageChanged", updateHeading);

  return CONTENT_PROJECTS;
};

export { projectsContent };
