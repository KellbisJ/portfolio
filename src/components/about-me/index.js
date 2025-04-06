import { selectedLanguage, setSelectedLanguage, LANGUAGES } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

(() => {
  // if (LANGUAGES) {
  //   console.log("Languages:", LANGUAGES);
  // } else {
  //   console.error("Languages object is not available.");
  // }

  const general = {
    imgAboutMe: "https://drive.google.com/thumbnail?id=187QRSWF_euK9mOE7GFRJk1TAtY2jwAT7&sz=s300",
    userTieIcon: ["fa-solid", "fa-user-tie"],
  };

  const aboutMeHeaderTitle = {
    headerTitle_ES: "Acerca de mí",
    headerTitle_EN: "About Me",
  };

  const aboutMeContent_ES = [
    {
      text: `Soy un desarrollador web con más de tres años de experiencia en el diseño y desarrollo de aplicaciones web. A lo largo de mi carrera, he trabajado tanto en el frontend como en el backend, lo que me permite abordar proyectos de manera integral y ofrecer soluciones efectivas.`,
    },
    {
      text: `Antes de dedicarme por completo a la programación, pasé tiempo explorando el mundo de los videojuegos. Esta experiencia me ayudó a comprender mejor la interacción y la experiencia del usuario, habilidades que ahora aplico en el desarrollo de interfaces web intuitivas. Esta transición me ha permitido aprovechar mi creatividad y atención al detalle en el desarrollo web.`,
    },
    {
      text: `Siempre estoy abierto a nuevas oportunidades y desafíos en el campo del desarrollo web. Si estás buscando un desarrollador web comprometido y con experiencia, no dudes en contactarme.`,
    },
  ];
  const aboutMeContent_EN = [
    {
      text: `I am a web developer with over three years of experience in designing and developing web applications. Throughout my career, I have worked on both the frontend and backend, allowing me to approach projects holistically and provide effective solutions.`,
    },
    {
      text: `Before fully dedicating myself to programming, I spent time exploring the world of video games. This experience helped me better understand user interaction and experience, skills that I now apply in developing intuitive web interfaces. This transition has allowed me to leverage my creativity and attention to detail in web development.`,
    },
    {
      text: `I am always open to new opportunities and challenges in the field of web development. If you are looking for a committed and experienced web developer, feel free to contact me.`,
    },
  ];

  const CONTENT_ABOUT_ME = document.querySelector(".content__about__me");

  const renderContentAboutMeSection = () => {
    const title_AM = document.querySelector(".title_AM");
    const contentText = document.querySelector(".content__text");
    contentText.innerHTML = "";

    if (selectedLanguage === LANGUAGES.SPANISH) {
      title_AM.textContent = aboutMeHeaderTitle.headerTitle_ES;

      aboutMeContent_ES.forEach((objectText) => {
        const text = objectText.text;
        const textSpan = document.createElement("p");
        textSpan.textContent = text;
        contentText.appendChild(textSpan);
      });
    } else if (selectedLanguage === LANGUAGES.ENGLISH) {
      title_AM.textContent = aboutMeHeaderTitle.headerTitle_EN;

      aboutMeContent_EN.forEach((objectText) => {
        const text = objectText.text;
        const textSpan = document.createElement("p");
        textSpan.textContent = text;
        contentText.appendChild(textSpan);
      });
    }
  };

  const createAboutMeSection = () => {
    const aboutMeHeaderTitle = document.createElement("div");
    aboutMeHeaderTitle.classList.add("about-me-title");

    const userTieIcon = document.createElement("i");
    userTieIcon.classList.add(`${general.userTieIcon[0]}`, `${general.userTieIcon[1]}`);
    aboutMeHeaderTitle.appendChild(userTieIcon);
    const aboutMeTitle = document.createElement("h2");
    aboutMeTitle.classList.add("title_AM");

    const contentAboutMeInfo = document.createElement("div");
    contentAboutMeInfo.classList.add("content__about__me__info");

    const contentImgAboutMe = document.createElement("div");
    contentImgAboutMe.classList.add("content__img__about__me");

    const meImg = document.createElement("img");
    meImg.classList.add("meImg");
    meImg.src = general.imgAboutMe;
    meImg.alt = "me";

    contentImgAboutMe.appendChild(meImg);
    contentAboutMeInfo.appendChild(contentImgAboutMe);

    const contentText = document.createElement("div");
    contentText.classList.add("content__text");

    aboutMeHeaderTitle.appendChild(aboutMeTitle);
    contentAboutMeInfo.appendChild(contentText);

    CONTENT_ABOUT_ME.appendChild(aboutMeHeaderTitle);
    CONTENT_ABOUT_ME.appendChild(contentAboutMeInfo);

    renderContentAboutMeSection();

    return CONTENT_ABOUT_ME;
  };

  languageEmitter.on("languageChanged", renderContentAboutMeSection);

  createAboutMeSection();
})();
