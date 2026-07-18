import { createPreviewMe } from "../preview-me/index.js";
import { translateMenu } from "../translate-menu/index.js";
import { technologiesContent } from "../technologies/index.js";
import { projectsContent } from "../projects/index.js";
import { myStudiesContent } from "../my-studies/index.js";
import { CanvasBackground, TopographicBackground } from "../../ui/canvasBackground.js";
import { initParallaxScroller } from "../../ui/parallaxScroller.js";
import { ScrollReveal } from "../../ui/scrollReveal.js";

const body = document.body;

const pageLayout = () =>
  new Promise((resolve, reject) => {
    const LAYOUT = document.createElement("main");
    LAYOUT.classList.add("layout", "layout-hidden");

    // DECOR
    const decor = document.createElement("div");
    decor.classList.add("decor");

    const dotsDecor = document.createElement("div");
    dotsDecor.classList.add("dots__decor");

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement("div");
      dot.classList.add("box__dot__sm", "dot__circle");
      dotsDecor.appendChild(dot);
    }

    decor.appendChild(dotsDecor);
    LAYOUT.appendChild(decor);

    body.appendChild(LAYOUT);

    const layoutExistsInBody = Array.from(document.body.children).some((child) => child.classList.contains("layout"));

    if (layoutExistsInBody && LAYOUT?.querySelector(".decor")) {
      resolve();
    } else {
      reject("Error when creating DOM essential elements");
    }
  });

let canvasElement = null;

function createCanvasElement() {
  const canvasBg = new CanvasBackground();
  canvasElement = canvasBg.canvas;
  const bg = new TopographicBackground(canvasBg);
  if (window.innerWidth <= 768) {
    bg.setAnimationEnabled(false);
  } else {
    bg.animate();
  }
}

createCanvasElement();
pageLayout()
  .then(() => {
    const LAYOUT = document.querySelector(".layout");
    if (!LAYOUT) return;

    if (canvasElement) {
      body.insertBefore(canvasElement, body.firstChild);
    }

    // Create sticky nav bar
    const stickyNav = document.createElement("nav");
    stickyNav.classList.add("sticky-nav");

    const navLinks = document.createElement("div");
    navLinks.classList.add("sticky-nav__links");

    const sections = [
      { id: "section-technologies", labelKey: "technologies", icon: "fa-microchip" },
      { id: "section-projects", labelKey: "projects", icon: "fa-code" },
      { id: "section-certifications", labelKey: "certifications", icon: "fa-book" },
    ];

    const navLinkElements = {};

    sections.forEach((section) => {
      const link = document.createElement("a");
      link.href = `#${section.id}`;
      link.dataset.section = section.id;
      link.classList.add("nav-link");

      const icon = document.createElement("i");
      icon.className = `fa-solid ${section.icon}`;
      link.appendChild(icon);

      const text = document.createElement("span");
      text.textContent = section.labelKey;
      text.classList.add("nav-link__text");
      link.appendChild(text);

      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.getElementById(section.id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });

      navLinks.appendChild(link);
      navLinkElements[section.id] = link;
    });

    // Translate button in nav
    const translateBtn = document.createElement("button");
    translateBtn.classList.add("prevMeBtn", "translateBtn", "sticky-nav__translate");
    translateBtn.ariaLabel = "Change Language";

    const translateIcon = document.createElement("i");
    translateIcon.classList.add("fa-solid", "fa-language");

    const langText = document.createElement("span");
    langText.classList.add("lang-label");
    langText.textContent = "ES";

    translateBtn.append(translateIcon, langText);
    navLinks.appendChild(translateBtn);

    stickyNav.appendChild(navLinks);
    LAYOUT.appendChild(stickyNav);

    // Create all sections
    const techSection = document.createElement("section");
    techSection.id = "section-technologies";
    techSection.classList.add("parallax-section", "content__technologies");

    const techContent = technologiesContent();
    techContent.classList.remove("content__technologies");
    techContent.style.width = "100%";

    const techWrapper = document.createElement("div");
    techWrapper.classList.add("parallax-content"); // Removed reveal-hidden
    techWrapper.dataset.speed = "0.1";
    techWrapper.appendChild(techContent);
    techSection.appendChild(techWrapper);

    const projectsSection = document.createElement("section");
    projectsSection.id = "section-projects";
    projectsSection.classList.add("parallax-section", "content__projects");

    const projectsContentEl = projectsContent();
    projectsContentEl.classList.remove("content__projects");
    projectsContentEl.style.width = "100%";

    const projectsWrapper = document.createElement("div");
    projectsWrapper.classList.add("parallax-content"); // Removed reveal-hidden
    projectsWrapper.dataset.speed = "0.2";
    projectsWrapper.appendChild(projectsContentEl);
    projectsSection.appendChild(projectsWrapper);

    const studiesSection = document.createElement("section");
    studiesSection.id = "section-certifications";
    studiesSection.classList.add("parallax-section", "content__my__studies");

    const studiesContentEl = myStudiesContent();
    studiesContentEl.classList.remove("content__my__studies");
    studiesContentEl.style.width = "100%";

    const studiesWrapper = document.createElement("div");
    studiesWrapper.classList.add("parallax-content"); // Removed reveal-hidden
    studiesWrapper.dataset.speed = "0.15";
    studiesWrapper.appendChild(studiesContentEl);
    studiesSection.appendChild(studiesWrapper);

    // Append sections to layout
    LAYOUT.appendChild(techSection);
    LAYOUT.appendChild(projectsSection);
    LAYOUT.appendChild(studiesSection);

    // Create preview me (hero header)
    const CONTENT_ME = createPreviewMe();
    if (CONTENT_ME) {
      LAYOUT.insertBefore(CONTENT_ME, techSection);
      CONTENT_ME.classList.add("hero-header");

      // Setup translate menu
      const updateTranslateMenu = translateMenu(translateBtn, langText);
      if (updateTranslateMenu) {
        updateTranslateMenu();
      }
    }

    // Fade in layout
    requestAnimationFrame(() => {
      const layout = document.querySelector(".layout");
      if (layout) {
        layout.classList.remove("layout-hidden");
      }
    });

    // Initialize parallax (disabled on mobile)
    if (window.innerWidth > 768) {
      initParallaxScroller(navLinkElements);
    }

    // Initialize scroll reveal for INNER elements only
    const scrollReveal = new ScrollReveal({ threshold: 0.1 });
    document.querySelectorAll(".tech-badge, .project-card, .study-card").forEach((el) => scrollReveal.observe(el));
  })
  .catch((err) => console.error(err));
