import { LANGUAGES, selectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

const techStack = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
  { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
];

const technologiesContent = () => {
  const CONTENT_TECHNOLOGIES = document.createElement("div");
  CONTENT_TECHNOLOGIES.classList.add("content__technologies");

  const heading = document.createElement("h2");
  heading.classList.add("tech-section__heading");
  heading.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Habilidades y Tecnologías" : "Skills & Technologies";
  CONTENT_TECHNOLOGIES.appendChild(heading);

  const grid = document.createElement("div");
  grid.classList.add("tech-grid");
  CONTENT_TECHNOLOGIES.appendChild(grid);

  const buildGrid = () => {
    grid.innerHTML = "";

    techStack.forEach((item, index) => {
      const badge = document.createElement("button");
      badge.className = "tech-badge";
      badge.type = "button";
      badge.tabIndex = -1;

      const iconEl = document.createElement("span");
      iconEl.className = "tech-badge__icon";

      const img = document.createElement("img");
      img.src = item.icon;
      img.alt = `${item.name} logo`;
      img.width = 20;
      img.height = 20;
      img.loading = "lazy";

      iconEl.appendChild(img);

      const label = document.createElement("span");
      label.className = "tech-badge__label";
      label.textContent = item.name;

      badge.appendChild(iconEl);
      badge.appendChild(label);
      grid.appendChild(badge);
    });

    // if (!CONTENT_TECHNOLOGIES.querySelector(".github-card")) {
    //   const githubCard = document.createElement("div");
    //   githubCard.classList.add("github-card");

    //   const githubHeading = document.createElement("h3");
    //   githubHeading.classList.add("github-card__heading");
    //   githubHeading.id = "githubCardHeading";
    //   githubHeading.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Mis Contribuciones de GitHub" : "My GitHub Contributions";

    //   const githubImg = document.createElement("img");
    //   githubImg.src = "https://ghchart.rshah.org/KellbisJ";
    //   githubImg.alt = "GitHub Contributions Chart";
    //   githubImg.loading = "lazy";
    //   githubImg.width = 700;
    //   githubImg.height = 128;

    //   githubCard.appendChild(githubHeading);
    //   githubCard.appendChild(githubImg);
    //   CONTENT_TECHNOLOGIES.appendChild(githubCard);
    // }
  };

  const updateHeading = () => {
    heading.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Habilidades y Tecnologías" : "Skills & Technologies";
    const githubHeadingEl = document.getElementById("githubCardHeading");
    if (githubHeadingEl) {
      githubHeadingEl.textContent = selectedLanguage === LANGUAGES.SPANISH ? "Mis Contribuciones de GitHub" : "My GitHub Contributions";
    }
  };

  buildGrid();

  languageEmitter.on("languageChanged", updateHeading);

  return CONTENT_TECHNOLOGIES;
};

export { technologiesContent };
