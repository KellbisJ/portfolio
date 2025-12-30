class PreviewMeData {
  constructor() {}

  meImgUrl() {
    return "https://ik.imagekit.io/137/Portfolio/mainCWEBP.webp?updatedAt=1744037093889";
  }

  socialMediaLinks() {
    return {
      gitHubProfile: "https://github.com/KellbisJ",
      linkedinProfile: "www.linkedin.com/in/kellbisj",
    };
  }

  icons() {
    return {
      gitHubIcon: "devicon-github-original",
      linkedinIcon: "devicon-linkedin-plain",
      copyIcon: ["fa-regular", "fa-copy"],
      mailIcon: ["fa-solid", "fa-envelope"],
    };
  }
  categoryBtnIconsOrdered() {
    return ["fa-solid fa-microchip", "fa-solid fa-code", "fa-solid fa-book", "fa-solid fa-briefcase"];
  }

  contentMeTranslations() {
    return {
      contentMe_ES: {
        greetingText_ES: `Kellbis Salazar`,
        contentMeText_ES: `Desarrollador web full-stack con +3 años de experiencia`,
        copiedTextElement_ES: `¡Copiado!`,
      },
      contentMe_EN: {
        greetingText_EN: `Kellbis Salazar`,
        contentMeText_EN: `Full-stack web developer with +3 years of experience.`,
        copiedTextElement_EN: `Copied!`,
      },
      myContentCategories_ES: ["Tecnologías", "Proyectos", "Certificaciones", "¡Contrátame!"],
      myContentCategories_EN: ["Technologies", "Projects", "Certifications", "Hire me!"],
    };
  }

  contentMeSocialMediaBox() {
    return [
      {
        url: this.socialMediaLinks().gitHubProfile,
        icon: this.icons().gitHubIcon,
      },
      {
        url: this.socialMediaLinks().linkedinProfile,
        icon: this.icons().linkedinIcon,
      },
    ];
  }
}

const previewMeData = new PreviewMeData();

export { previewMeData };
