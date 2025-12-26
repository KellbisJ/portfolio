class ProjectsData {
  constructor() {}

  projectTitleMapping() {
    return {
      "Rospercussion Website": "rpercussion",
      MoviesKS: "moviesKs",
      "MyEcm (fake ecommerce)": "myEcm",
      "To-do list": "toDo",
      "English Journey Blog": "englishJourney",
    };
  }
  projectTechIcons() {
    return {
      react: "devicon-react-original colored",
      vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      typescript: "devicon-typescript-plain colored",
      tailwindcss: "devicon-tailwindcss-original colored",
      expressjs: "devicon-express-original",
      javascript: "devicon-javascript-plain colored",
      css: "devicon-css3-plain-wordmark colored",
    };
  }
  projectAdditionalIcons() {
    return {
      fileCodeIcon: ["fa-solid", "fa-file-code"],
      diagonalArrowIcon: ["fa-solid", "fa-arrow-up-right-from-square"],
    };
  }
  projectDescription() {
    return {
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
      rpercussion: {
        spanish: "Página hecha para un cliente que es un artista percusionista, marca personal [Rospercussion].",
        english: "Page made for a client who is a percussion artist, personal brand [Rospercussion].",
      },
    };
  }

  myProjectsData() {
    return [
      {
        title: "Rospercussion Website",
        imageSrc: ["https://ik.imagekit.io/137/Portfolio/webrpercussionbg.webp?updatedAt=1766627504063", "https://ik.imagekit.io/137/Portfolio/cardwebrpercussion.webp?updatedAt=1766627503890"],
        projectUrl: "https://www.rospercussion.com/",
        repositoryUrl: "https://github.com/KellbisJ/rospercussionwebsite",
        description: this.projectDescription().rpercussion.spanish,
        technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
        bgColor: "#3B82F6",
      },
      {
        title: "MoviesKS",
        imageSrc: ["https://ik.imagekit.io/137/Portfolio/MoviesKSBACKGROUND.webp?updatedAt=1744037093527", "https://ik.imagekit.io/137/Portfolio/mobmoviesk.webp?updatedAt=1750621094027"],
        projectUrl: "https://movies-ks-frontend.vercel.app/",
        repositoryUrl: "https://github.com/KellbisJ/MoviesKS",
        description: this.projectDescription().moviesKs.spanish,
        technologies: ["React", "Vite", "TypeScript", "TailwindCSS", "ExpressJS"],
        bgColor: "#DBEAFE",
      },
      {
        title: "MyEcm (fake ecommerce)",
        imageSrc: ["https://ik.imagekit.io/137/Portfolio/MyEcmCARD.webp?updatedAt=1744037093039", "https://ik.imagekit.io/137/Portfolio/mobFakeECM.jpeg?updatedAt=1751209918875"],
        projectUrl: "https://fakeshopiecm.netlify.app",
        repositoryUrl: "https://github.com/KellbisJ/my-ecm",
        description: this.projectDescription().myEcm.spanish,
        technologies: ["React", "Vite", "TailwindCSS", "JavaScript"],
        bgColor: "#1E293B",
      },
      {
        title: "To-do list",
        imageSrc: ["https://ik.imagekit.io/137/Portfolio/TodoCARD.webp?updatedAt=1744037092983", "https://ik.imagekit.io/137/Portfolio/mobTODOFORDO.jpeg?updatedAt=1751209918648"],
        projectUrl: "https://kellbisj.github.io/TODO-FOR-DO/",
        repositoryUrl: "https://github.com/KellbisJ/TODO-FOR-DO",
        description: this.projectDescription().toDo.spanish,
        technologies: ["React", "JavaScript", "CSS"],
        bgColor: "#131f24",
      },
      {
        title: "English Journey Blog",
        imageSrc: ["https://ik.imagekit.io/137/Portfolio/engjourneyCARD.webp?updatedAt=1744037093009", "https://ik.imagekit.io/137/Portfolio/mobMyEnglishJourney.jpeg?updatedAt=1751209918757"],
        projectUrl: "https://my-english-journey.vercel.app",
        repositoryUrl: "https://github.com/KellbisJ/my-english-journey",
        description: this.projectDescription().englishJourney.spanish,
        technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
        bgColor: "linear-gradient(to right, #4299e1, #9f7aea, #f56565)",
      },
    ];
  }
}

const projectsData = new ProjectsData();

export { projectsData };
