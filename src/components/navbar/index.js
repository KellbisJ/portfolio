import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";
import { languageEmitter } from "../../language/eventEmitter.js";

(() => {
  // NAVBAR HTML RENDER

  // const barsIcon = ["fas", "fa-bars"];
  const languageIcon = ["fa-solid", "fa-language"];
  // const closeIcon = ["fa-solid", "fa-x"];

  const navbarIcons = {
    // barsIcon,
    languageIcon,
    // closeIcon,
  };

  // const navBarLinksContent_ES = {
  //   pageNavigation: ["#inicio", "#tecnologias", "#proyectos", "#educación", "#acerca-de-mi", "#contacto"],
  //   linkContent: ["Inicio", "Tecnologias", "Proyectos", "Educación", "Acerca de mi", "Contacto"],
  // };

  // const navBarLinksContent_EN = {
  //   pageNavigation: ["#home", "#technologies", "#projects", "#education", "#about-me", "#contact"],
  //   linkContent: ["Home", "Technologies", "Projects", "Education", "About Me", "Contact"],
  // };

  // const navbarContent_ES = {
  //   ...navBarLinksContent_ES,
  // };

  // const navbarContent_EN = {
  //   ...navBarLinksContent_EN,
  // };

  const nav = document.querySelector(".navbar");
  // const navbarElementsContainer = document.createElement("div");

  // navbarElementsContainer.classList.add("navbar__elements");

  // NAVBAR TOGGLE LOGIC

  // let menuNavbarShowed = false;

  // const toggleMenu = (navbarMenuContent, iFaBarsToggle) => {
  //   navbarMenuContent.classList.toggle("show");

  //   navbarMenuContent.classList.contains("show")
  //     ? (iFaBarsToggle.classList.remove(...navbarIcons.barsIcon), iFaBarsToggle.classList.add(...navbarIcons.closeIcon), (menuNavbarShowed = true))
  //     : (iFaBarsToggle.classList.remove(...navbarIcons.closeIcon), iFaBarsToggle.classList.add(...navbarIcons.barsIcon), (menuNavbarShowed = false));
  // };

  // const handleBodyClick = (event, navbarMenuContent, iFaBarsToggle) => {
  //   if (menuNavbarShowed && !navbarMenuContent.contains(event.target) && !iFaBarsToggle.contains(event.target)) {
  //     navbarMenuContent.classList.remove("show");
  //     // console.log(navbarMenuContent);

  //     menuNavbarShowed = false;
  //     const isFaBarsToggle = iFaBarsToggle.classList.contains(...navbarIcons.closeIcon);
  //     if (isFaBarsToggle) {
  //       iFaBarsToggle.classList.remove(...navbarIcons.closeIcon);
  //       iFaBarsToggle.classList.add(...navbarIcons.barsIcon);
  //     }
  //   }
  // };

  // NAVBAR TOGGLE LOGIC

  const createNavbarContents = (content) => {
    // const navbarContent = document.createElement("div");
    // navbarContent.classList.add("navbarContent")

    const navbarBoxes = Array.from({ length: 4 }, (_, i) => {
      const div = document.createElement("div");
      if (i === 0) {
        div.classList.add("box__left__lg");
      } else {
        div.classList.add("box__dot__sm");
      }
      return div;
    });

    navbarBoxes.forEach((div) => nav.appendChild(div));

    // nav.appendChild(navbarElementsContainer);

    // const translateButton__mobile = document.createElement("button");
    // const translateButton__wide = document.createElement("button");
    // translateButton__mobile.classList.add("btn-nav-initial", "navbar-mobile-left-icon");
    // translateButton__wide.classList.add("btn-nav-wide", "navbar__link");

    // const translateOptionsMenu__mobile = document.createElement("div");
    // translateOptionsMenu__mobile.classList.add("translate-menu-options");

    // const translateOptionsMenu__wide = document.createElement("div");
    // translateOptionsMenu__wide.classList.add("translate-menu-options");

    // translateButton__mobile.addEventListener("click", () => {
    //   translateOptionsMenu__mobile.classList.toggle("show");
    // });

    // translateButton__wide.addEventListener("click", () => {
    //   translateOptionsMenu__wide.classList.toggle("show");
    // });

    // LANGUAGES LOGIC

    // Object.keys(LANGUAGES).forEach((language) => {
    //   const langBtn__mobile = document.createElement("button");
    //   langBtn__mobile.classList.add("btn", "nav__button");
    //   langBtn__mobile.textContent = LANGUAGES[language];

    //   langBtn__mobile.addEventListener("click", () => {
    //     if (selectedLanguage !== LANGUAGES[language]) {
    //       setSelectedLanguage(LANGUAGES[language]);
    //     }
    //     translateOptionsMenu__mobile.classList.remove("show");
    //   });

    //   const langBtn__wide = document.createElement("button");
    //   langBtn__wide.classList.add("btn", "nav__button");
    //   langBtn__wide.textContent = LANGUAGES[language];

    //   langBtn__wide.addEventListener("click", () => {
    //     if (selectedLanguage !== LANGUAGES[language]) {
    //       setSelectedLanguage(LANGUAGES[language]);
    //     }
    //     translateOptionsMenu__wide.classList.remove("show");
    //   });

    //   translateOptionsMenu__mobile.appendChild(langBtn__mobile);
    //   translateOptionsMenu__wide.appendChild(langBtn__wide);
    // });

    // LANGUAGES LOGIC

    // const navbarMenuContent = document.createElement("div");
    // navbarMenuContent.classList.add("navbar__menu__content");

    // const menuButton = document.createElement("button");
    // menuButton.id = "menu";

    const translateIcon__mobile = document.createElement("i");
    translateIcon__mobile.classList.add(...navbarIcons.languageIcon);

    const translateIcon__wide = document.createElement("i");
    translateIcon__wide.classList.add(...navbarIcons.languageIcon);

    // const menuBarsIcon = document.createElement("i");
    // menuBarsIcon.classList.add(...navbarIcons.barsIcon);
    // menuBarsIcon.id = "menu-icon";

    // menuButton.appendChild(menuBarsIcon);

    // translateButton__mobile.appendChild(translateIcon__mobile);
    // translateButton__wide.appendChild(translateIcon__wide);

    // const { pageNavigation, linkContent } = content;

    // content.pageNavigation.forEach((path, index) => {
    //   const navbarLinkMobile = document.createElement("a");
    //   const navbarLinkWide = document.createElement("a");
    //   navbarLinkMobile.classList.add("navbar__link");
    //   navbarLinkWide.classList.add("navbar__link");

    //   navbarLinkMobile.href = path;
    //   navbarLinkMobile.textContent = content.linkContent[index];

    //   navbarLinkWide.href = path;
    //   navbarLinkWide.textContent = content.linkContent[index];

    //   navbarMenuContent.appendChild(navbarLinkMobile);
    //   navbarContentWide.appendChild(navbarLinkWide);
    // });

    // navbarContentMobile.appendChild(translateButton__mobile);
    // navbarContentMobile.appendChild(menuButton);
    // navbarContentMobile.appendChild(navbarMenuContent);
    // navbarContentMobile.appendChild(translateOptionsMenu__mobile);

    // navbarContentWide.appendChild(translateButton__wide);
    // navbarContentWide.appendChild(translateOptionsMenu__wide);

    // NAVBAR TOGGLE LOGIC
    // menuButton.addEventListener("click", () => {
    //   toggleMenu(navbarMenuContent, menuBarsIcon);
    //   translateOptionsMenu__mobile.classList.remove("show");
    // });

    // document.body.addEventListener("click", (event) => {
    //   handleBodyClick(event, navbarMenuContent, menuBarsIcon);
    // });

    // navbarMenuContent.addEventListener("click", (event) => {
    //   event.stopPropagation();
    // });
    // NAVBAR TOGGLE LOGIC

    return nav;
  };

  createNavbarContents();

  // const renderNavbarElements = () => {
  //   navbarElementsContainer.innerHTML = "";
  //   if (selectedLanguage === LANGUAGES.SPANISH) {
  //     const navbarElements = createNavbarContents(navbarContent_ES);
  //     nav.appendChild(navbarElements);
  //   } else if (selectedLanguage === LANGUAGES.ENGLISH) {
  //     const navbarElements = createNavbarContents(navbarContent_EN);
  //     nav.appendChild(navbarElements);
  //   }
  // };

  // renderNavbarElements();

  // languageEmitter.on("languageChanged", renderNavbarElements);

  // NAVBAR HTML RENDER

  //NAVIGATION LOGIC
  // const technologiesContent = document.querySelector(".content__technologies");
  // const projectsContent = document.querySelector(".content__projects");
  // const myStudiesContent = document.querySelector(".content__my__studies");
  // const aboutMeContent = document.querySelector(".content__about__me");
  // const contactMeContent = document.querySelector(".content__contact");

  // const handleNavigation = (event) => {
  //   // console.log(event.target);
  //   // console.log(event.target.innerHTML);

  //   const navbarLinkCaptured = event.target.innerHTML;
  //   // console.log(navbarLinkCaptured);

  //   const scrollTop = document.documentElement.scrollTop;
  //   const navbarMenuContent = document.querySelector(".navbar__menu__content");
  //   const menuBarsIcon = document.querySelector("#menu-icon");

  //   const scrollToElement = (element) => {
  //     const elementToNavigatePosition = element.getBoundingClientRect();
  //     const position = elementToNavigatePosition.top + scrollTop - 60;
  //     window.scrollTo({ top: position, behavior: "smooth" });
  //     toggleMenu(navbarMenuContent, menuBarsIcon);
  //   };

  //   switch (navbarLinkCaptured) {
  //     case "Inicio":
  //     case "Home":
  //       window.scrollTo({ top: 0, behavior: "smooth" });
  //       toggleMenu(navbarMenuContent, menuBarsIcon);
  //       break;
  //     case "Tecnologias":
  //     case "Technologies":
  //       scrollToElement(technologiesContent);
  //       break;
  //     case "Proyectos":
  //     case "Projects":
  //       scrollToElement(projectsContent);
  //       break;
  //     case "Educación":
  //     case "Education":
  //       scrollToElement(myStudiesContent);
  //       break;
  //     case "Acerca de mi":
  //     case "About Me":
  //       scrollToElement(aboutMeContent);
  //       break;
  //     case "Contacto":
  //     case "Contact":
  //       scrollToElement(contactMeContent);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const createNavbarLinksNavigation = () => {
  //   const navbarLinkNavigation = document.querySelectorAll(".navbar__link");
  //   navbarLinkNavigation.forEach((link) => {
  //     link.addEventListener("click", handleNavigation);
  //   });
  // };

  // createNavbarLinksNavigation();

  // languageEmitter.on("languageChanged", createNavbarLinksNavigation);

  //NAVIGATION LOGIC
})();
