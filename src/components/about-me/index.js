import { selectedLanguage, setSelectedLanguage, LANGUAGES } from "../../language/index.js";

(() => {
  document.addEventListener("DOMContentLoaded", () => {
    if (LANGUAGES) {
      console.log("Languages:", LANGUAGES);
    } else {
      console.error("Languages object is not available.");
    }

    const general = {
      imgAboutMe: "https://drive.google.com/thumbnail?id=1nSsUx0u4Y1mQAEy_PzTqRupyBFKqAw6Y&sz=s300",
      userTieIcon: ["fa-solid", "fa-user-tie"],
    };
    const aboutMeContentES = {
      headerTitleES: "Acerca de mi",

      contentTextES: {
        text1AboutMe: `Soy un desarrollador web con más de tres años de experiencia en el diseño y desarrollo de aplicaciones web. A lo largo de mi carrera, he trabajado tanto en el frontend como en el
                backend, lo que me permite abordar proyectos de manera integral y ofrecer soluciones efectivas.`,
        text2AboutMe: `Antes de dedicarme por completo a la programación, pasé tiempo explorando el mundo de los videojuegos. Esta experiencia me ayudó a comprender mejor la interacción y la experiencia del
                usuario, habilidades que ahora aplico en el desarrollo de interfaces web intuitivas. Esta transición me ha permitido aprovechar mi creatividad y atención al detalle en el desarrollo
                web.`,
        text3AboutMe: `Siempre estoy abierto a nuevas oportunidades y desafíos en el campo del desarrollo web. Si estás buscando un desarrollador web comprometido y con experiencia, no dudes en contactarme.`,
      },
      roadmapCronologyES: {
        text1Cronology: "[2019 - 2020] - Inicios en la programación",
        text2Cronology: "[2020 - 2023] - Me especialicé en Frontend",
        text3Cronology: "[2023] - Empecé a aprender inglés.",
        text4Cronology: "[2024 - 2025] - Desarrollé proyectos Full-Stack",
      },
    };

    const CONTENT_ABOUT_ME = document.querySelector(".content__about__me");

    const createAboutMeSection = () => {
      const aboutMeHeaderTitle = document.createElement("div");
      aboutMeHeaderTitle.classList.add("about-me-title");

      const userTieIcon = document.createElement("i");
      userTieIcon.classList.add(`${general.userTieIcon[0]}`, `${general.userTieIcon[1]}`);
      aboutMeHeaderTitle.appendChild(userTieIcon);
      const aboutMeTitle = document.createElement("h2");

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

      const contentRoadMap = document.createElement("div");
      contentRoadMap.classList.add("content__roadmap");

      if (selectedLanguage === LANGUAGES.SPANISH) {
        aboutMeTitle.textContent = aboutMeContentES.headerTitleES;
        aboutMeHeaderTitle.appendChild(aboutMeTitle);

        Object.keys(aboutMeContentES.contentTextES).forEach((textES) => {
          const textValue = aboutMeContentES.contentTextES[textES];
          const textSpanES = document.createElement("p");
          textSpanES.textContent = textValue;

          contentText.appendChild(textSpanES);
        });
        contentAboutMeInfo.appendChild(contentText);
        Object.keys(aboutMeContentES.roadmapCronologyES).forEach((textES) => {
          const textValue = aboutMeContentES.roadmapCronologyES[textES];
          const roadMapItem = document.createElement("div");
          roadMapItem.classList.add("roadmap-item");
          roadMapItem.textContent = textValue;

          contentRoadMap.appendChild(roadMapItem);
        });
        contentAboutMeInfo.appendChild(contentRoadMap);
      }

      CONTENT_ABOUT_ME.appendChild(aboutMeHeaderTitle);
      CONTENT_ABOUT_ME.appendChild(contentAboutMeInfo);

      return CONTENT_ABOUT_ME;
    };

    createAboutMeSection();
  });
})();
