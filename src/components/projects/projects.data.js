import { LANGUAGES } from "../../language/index.js";

const projectTechIcons = {
  html: "devicon-html5-plain-wordmark colored",
  react: "devicon-react-original colored",
  vitejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  typescript: "devicon-typescript-plain colored",
  tailwindcss: "devicon-tailwindcss-original colored",
  expressjs: "devicon-express-original",
  javascript: "devicon-javascript-plain colored",
  css: "devicon-css3-plain-wordmark colored",
};

const projectsMaterial = [
  {
    title: "MoviesKS",
    imageCard: "https://ik.imagekit.io/137/Portfolio/mobmoviesk.webp?updatedAt=1750621094027",
    imageBackground: "https://ik.imagekit.io/137/Portfolio/MoviesKSBACKGROUND.webp?updatedAt=1744037093527",
    projectUrl: "https://movies-ks-frontend.vercel.app/",
    repositoryUrl: "https://github.com/KellbisJ/MoviesKS",
    descriptions: {
      [LANGUAGES.SPANISH]: "Este proyecto es un sitio web que permite a los usuarios consumir información sobre películas y series.",
      [LANGUAGES.ENGLISH]: "This project is a website that allows users to consume information about movies and series.",
    },
    technologies: {
      React: projectTechIcons.react,
      ViteJS: projectTechIcons.vitejs,
      TypeScript: projectTechIcons.typescript,
      TailwindCSS: projectTechIcons.tailwindcss,
      ExpressJS: projectTechIcons.expressjs,
    },

    bgColor: "#DBEAFE",
  },
  {
    title: "MMapWWeb",
    imageCard: "https://ik.imagekit.io/137/Portfolio/mobMmapWweb.webp?updatedAt=1781011518028",
    imageBackground: "https://ik.imagekit.io/137/Portfolio/deskMmapWweb.webp?updatedAt=1781011518105",
    projectUrl: "https://kellbisj.github.io/mmapwweb/",
    repositoryUrl: "https://github.com/KellbisJ/MMapWWeb",
    descriptions: {
      [LANGUAGES.SPANISH]:
        "Este proyecto es una aplicación web de mapas mentales que permite a los usuarios crear, editar y visualizar diagramas interactivos. Una característica clave es la capacidad de exportar los mapas creados en formatos útiles como PNG o PDF para compartirlos o archivarlos.",
      [LANGUAGES.ENGLISH]:
        "This project is a mind map web application that allows users to create, edit, and visualize interactive diagrams. A key feature is the ability to export created maps into useful formats like PNG or PDF for sharing or archiving.",
    },
    technologies: {
      JavaScript: projectTechIcons.javascript,
      HTML: projectTechIcons.html,
      CSS: projectTechIcons.css,
      ViteJS: projectTechIcons.vitejs,
    },
    bgColor: "#1E293B",
  },

  {
    title: "Rospercussion Website",
    imageCard: "https://ik.imagekit.io/137/Portfolio/cardwebrpercussion.webp?updatedAt=1766627503890",
    imageBackground: "https://ik.imagekit.io/137/Portfolio/webrpercussionbg.webp?updatedAt=1766627504063",
    projectUrl: "https://www.rospercussion.com/",
    repositoryUrl: "https://github.com/KellbisJ/rospercussionwebsite",
    descriptions: {
      [LANGUAGES.SPANISH]: "Página hecha para un cliente que es un artista percusionista, marca personal [Rospercussion].",
      [LANGUAGES.ENGLISH]: "Page made for a client who is a percussion artist, personal brand [Rospercussion].",
    },
    technologies: {
      React: projectTechIcons.react,
      TypeScript: projectTechIcons.typescript,
      TailwindCSS: projectTechIcons.tailwindcss,
      ViteJS: projectTechIcons.vitejs,
    },

    bgColor: "#3B82F6",
  },

  {
    title: "English Journey Blog",
    imageCard: "https://ik.imagekit.io/137/Portfolio/mobMyEnglishJourney.jpeg?updatedAt=1751209918757",
    imageBackground: "https://ik.imagekit.io/137/Portfolio/engjourneyCARD.webp?updatedAt=1744037093009",
    projectUrl: "https://my-english-journey.vercel.app",
    repositoryUrl: "https://github.com/KellbisJ/my-english-journey",
    descriptions: {
      [LANGUAGES.SPANISH]: "Un blog para plasmar y documentar las muchas cosas aprendidas en inglés.",
      [LANGUAGES.ENGLISH]: "A blog to capture and document the many things learned in English.",
    },
    technologies: { React: projectTechIcons.react, TypeScript: projectTechIcons.typescript, TailwindCSS: projectTechIcons.tailwindcss, ViteJS: projectTechIcons.vite },
    bgColor: "linear-gradient(to right, #4299e1, #9f7aea, #f56565)",
  },
];

export { projectsMaterial, projectTechIcons };
