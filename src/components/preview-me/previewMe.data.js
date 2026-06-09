const previewMeData = {
  meImgUrl: "https://ik.imagekit.io/137/Portfolio/mainCWEBP.webp?updatedAt=1744037093889",

  socialMediaLinks: {
    gitHubProfile: "https://github.com/KellbisJ",
  },
  icons: {
    gitHubIcon: "devicon-github-original",
    copyIcon: ["fa-regular", "fa-copy"],
    mailIcon: ["fa-solid", "fa-envelope"],
  },
  categoryBtnIconsOrdered: ["fa-solid fa-microchip", "fa-solid fa-code", "fa-solid fa-book", "fa-solid fa-briefcase"],

  contentMeTranslations: {
    contentMe_ES: {
      greetingText_ES: `Kellbis Salazar`,
      contentMeText_ES: `Aprendiz de programación, desarrollador web.`,
      copiedTextElement_ES: `¡Copiado!`,
    },
    contentMe_EN: {
      greetingText_EN: `Kellbis Salazar`,
      contentMeText_EN: `Programming apprentice, web developer.`,
      copiedTextElement_EN: `Copied!`,
    },
    myContentCategories_ES: ["Tecnologías", "Proyectos", "Certificaciones"],
    myContentCategories_EN: ["Technologies", "Projects", "Certifications"],
  },
};

const previewContentMeSocialMediaBox = [
  {
    url: previewMeData.socialMediaLinks.gitHubProfile,
    icon: previewMeData.icons.gitHubIcon,
  },
];

export { previewMeData, previewContentMeSocialMediaBox };
