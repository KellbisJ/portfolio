(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const projectsMaterial = {
      codeIcon: "fa-solid fa-code",
      diagonalArrowIcon: "fa-solid fa-up-right-from-square link-to-project-arrow",
      githubIcon: "devicon-github-original link-to-project-repository",

      technologies: {
        react: "devicon-react-original colored",
        vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        typescript: "devicon-typescript-plain colored",
        tailwindcss: "devicon-tailwindcss-original colored",
        express: "devicon-express-original",
        javascript: "devicon-javascript-plain colored",
        css: "devicon-css3-plain-wordmark colored",
      },

      moviesKs: {
        title: "MoviesKS",
        imageSrc: "https://drive.google.com/thumbnail?id=1TlLMcsTrJThYEr1hIR9z5ZsjT-kYqoBx&sz=s600",
        projectUrl: "https://movies-ks-frontend.vercel.app/",
        repositoryUrl: "https://github.com/KellbisJ/MoviesKS",
        description: "Este proyecto es un sitio web que permite a los usuarios consumir información sobre películas y series.",
        technologies: ["react", "vite", "typescript", "tailwindcss", "express"],
      },
      myEcm: {
        title: "MyEcm (fake ecommerce)",
        imageSrc: "https://drive.google.com/thumbnail?id=11_1VVkIf5Jf9WZtUT8HcTjwc0w3VZs-_&sz=s600",
        projectUrl: "https://fakeshopiecm.netlify.app",
        repositoryUrl: "https://github.com/KellbisJ/my-ecm",
        description: "Un prototipo de ecommerce básico.",
        technologies: ["react", "vite", "tailwindcss", "javascript"],
      },
      toDo: {
        title: "To-do list",
        imageSrc: "https://drive.google.com/thumbnail?id=1ZgeADNEGW9C44VIH903tisv4Tb79QcIB&sz=s600",
        projectUrl: "https://kellbisj.github.io/TODO-FOR-DO/",
        repositoryUrl: "https://github.com/KellbisJ/TODO-FOR-DO",
        description: "Un simple todo list.",
        technologies: ["react", "javascript", "css"],
      },
      englishJourney: {
        title: "English Journey Blog",
        imageSrc: "https://drive.google.com/thumbnail?id=1EDlOKTvSd-wMQIx5BO3yhknAHxvlUMfE&sz=s600",
        projectUrl: "https://my-english-journey-kellbisj-kellbis-projects.vercel.app",
        repositoryUrl: "https://github.com/KellbisJ/my-english-journey",
        description: "Un blog para plasmar y documentar las muchas cosas aprendidas en inglés.",
        technologies: ["react", "typescript", "tailwindcss", "vite"],
      },
    };

    const CONTENT_PROJECTS = document.querySelector(".content__projects");

    const projectTitle = document.createElement("div");
    projectTitle.classList.add("projects-title");

    const title = document.createElement("h2");
    title.textContent = "Proyectos";

    const codeIcon = document.createElement("i");
    codeIcon.className = "fa-solid fa-code";

    projectTitle.appendChild(codeIcon);
    projectTitle.appendChild(title);

    const contentProjectInfoContainer = document.createElement("div");
    contentProjectInfoContainer.classList.add("content__project__info__container");

    CONTENT_PROJECTS.appendChild(projectTitle);
    CONTENT_PROJECTS.appendChild(contentProjectInfoContainer);

    function createProjectElement(project) {
      const projectInfoContainer = document.createElement("div");
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
      diagonalArrowIcon.className = projectsMaterial.diagonalArrowIcon;

      const repositoryLink = document.createElement("a");
      repositoryLink.href = project.repositoryUrl;
      repositoryLink.target = "_blank";
      repositoryLink.rel = "noopener noreferrer";

      const githubIcon = document.createElement("i");
      githubIcon.className = projectsMaterial.githubIcon;

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

        if (projectsMaterial.technologies[tech].startsWith("http")) {
          const techImg = document.createElement("img");
          techImg.classList.add("tech-img");
          techImg.src = projectsMaterial.technologies[tech];
          techBadge.appendChild(techImg);
        } else {
          const techIcon = document.createElement("i");
          techIcon.className = projectsMaterial.technologies[tech];
          techBadge.appendChild(techIcon);
        }

        projectTechnologies.appendChild(techBadge);
      });

      projectDetails.appendChild(projectDescription);
      projectDetails.appendChild(projectTechnologies);

      projectInfoContainer.appendChild(figure);
      projectInfoContainer.appendChild(projectDetails);

      return projectInfoContainer;
    }

    const projects = [projectsMaterial.moviesKs, projectsMaterial.myEcm, projectsMaterial.toDo, projectsMaterial.englishJourney];

    projects.forEach((project) => {
      const projectElement = createProjectElement(project);
      contentProjectInfoContainer.appendChild(projectElement);
    });
  });
})();
