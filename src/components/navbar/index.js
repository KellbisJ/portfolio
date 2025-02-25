import { LANGUAGES, selectedLanguage, setSelectedLanguage } from "../../language/index.js";

(() => {
  // NAVBAR HTML RENDER

  const pageNavigation = Object.freeze(["#home", "#tecnologias", "#proyectos", "#educación", "#acerca-de-mi", "#contacto"]);
  const linkContent = Object.freeze(["Home", "Tecnologias", "Proyectos", "Educación", "Acerca de mi", "Contacto"]);

  const navbarIcons = {
    barsIcon: ["fas", "fa-bars"],
    languageIcon: ["fa-solid", "fa-language"],
    closeIcon: ["fa-solid", "fa-x"],
  };

  const mobileContent = {
    navBarLinksContent: {
      pageNavigation: [...pageNavigation],
      linkContent: [...linkContent],
    },
  };

  const wideContent = {
    navBarLinksContent: {
      pageNavigation: [...pageNavigation],
      linkContent: [...linkContent],
    },
  };

  const nav = document.querySelector(".navbar");
  const navbarElementsContainer = document.createElement("div");

  navbarElementsContainer.classList.add("navbar__elements");

  // NAVBAR TOGGLE LOGIC

  let menuNavbarShowed = false;

  const toggleMenu = (navbarMenuContent, iFaBarsToggle) => {
    navbarMenuContent.classList.toggle("show");

    navbarMenuContent.classList.contains("show")
      ? (iFaBarsToggle.classList.remove(...navbarIcons.barsIcon), iFaBarsToggle.classList.add(...navbarIcons.closeIcon), (menuNavbarShowed = true))
      : (iFaBarsToggle.classList.remove(...navbarIcons.closeIcon), iFaBarsToggle.classList.add(...navbarIcons.barsIcon), (menuNavbarShowed = false));
  };

  const handleBodyClick = (event, navbarMenuContent, iFaBarsToggle) => {
    if (menuNavbarShowed && !navbarMenuContent.contains(event.target) && !iFaBarsToggle.contains(event.target)) {
      navbarMenuContent.classList.remove("show");
      console.log(navbarMenuContent);

      menuNavbarShowed = false;
      const isFaBarsToggle = iFaBarsToggle.classList.contains(...navbarIcons.closeIcon);
      if (isFaBarsToggle) {
        iFaBarsToggle.classList.remove(...navbarIcons.closeIcon);
        iFaBarsToggle.classList.add(...navbarIcons.barsIcon);
      }
    }
  };

  // NAVBAR TOGGLE LOGIC

  function createNavbarContents(content) {
    const translateButton = document.createElement("button");
    translateButton.addEventListener("click", () => {
      translateOptionsMenu.classList.toggle("show");
    });

    const translateOptionsMenu = document.createElement("div");
    translateOptionsMenu.classList.add("translate-menu-options");

    Object.keys(LANGUAGES).forEach((language) => {
      const langBtn = document.createElement("button");
      langBtn.classList.add("btn", "nav__button");
      langBtn.textContent = LANGUAGES[language];

      langBtn.addEventListener("click", () => {
        setSelectedLanguage(LANGUAGES[language]);
        console.log(selectedLanguage);
      });

      translateOptionsMenu.appendChild(langBtn);
    });

    if (content === mobileContent) {
      const navbarContentMobile = document.createElement("div");
      navbarContentMobile.classList.add("navbar__content__mobile");

      const navbarMenuContent = document.createElement("div");
      navbarMenuContent.classList.add("navbar__menu__content");

      const menuButton = document.createElement("button");
      menuButton.id = "menu";

      translateButton.classList.add("btn-nav-initial", "navbar-mobile-left-icon");

      const translateIcon = document.createElement("i");
      translateIcon.classList.add(...navbarIcons.languageIcon);

      const menuBarsIcon = document.createElement("i");
      menuBarsIcon.classList.add(...navbarIcons.barsIcon);
      menuBarsIcon.id = "menu-icon";

      menuButton.appendChild(menuBarsIcon);
      translateButton.appendChild(translateIcon);

      const linkElementContent = content.navBarLinksContent;

      linkElementContent.pageNavigation.forEach((path, index) => {
        const navbarLink = document.createElement("a");
        navbarLink.classList.add("navbar__link");
        navbarLink.href = path;
        navbarLink.textContent = linkElementContent.linkContent[index];

        navbarMenuContent.appendChild(navbarLink);
      });

      navbarContentMobile.appendChild(translateButton);
      navbarContentMobile.appendChild(menuButton);
      navbarContentMobile.appendChild(navbarMenuContent);
      navbarContentMobile.appendChild(translateOptionsMenu);

      // NAVBAR TOGGLE LOGIC
      menuButton.addEventListener("click", () => {
        toggleMenu(navbarMenuContent, menuBarsIcon);
        translateOptionsMenu.classList.remove("show");
      });

      document.body.addEventListener("click", (event) => {
        handleBodyClick(event, navbarMenuContent, menuBarsIcon);
      });

      navbarMenuContent.addEventListener("click", (event) => {
        event.stopPropagation();
      });
      // NAVBAR TOGGLE LOGIC

      return navbarContentMobile;
    }
    if (content === wideContent) {
      const navbarContentWide = document.createElement("div");

      navbarContentWide.classList.add("navbar__content__wide");

      const linkElementContent = content.navBarLinksContent;

      linkElementContent.pageNavigation.forEach((path, index) => {
        const navbarLink = document.createElement("a");
        navbarLink.classList.add("navbar__link");
        navbarLink.href = path;
        navbarLink.textContent = path;
        navbarLink.textContent = linkElementContent.linkContent[index];

        navbarContentWide.appendChild(navbarLink);
      });

      translateButton.classList.add("btn-nav-wide", "navbar__link");
      const translateIcon = document.createElement("i");
      translateIcon.classList.add(...navbarIcons.languageIcon);

      // translateOptionsMenu.style = "right: 0";

      translateButton.appendChild(translateIcon);
      navbarContentWide.appendChild(translateButton);
      navbarContentWide.appendChild(translateOptionsMenu);

      return navbarContentWide;
    }
  }

  const contents = [mobileContent, wideContent];

  contents.forEach((content) => {
    const navbarElements = createNavbarContents(content);
    navbarElementsContainer.appendChild(navbarElements);
  });

  nav.appendChild(navbarElementsContainer);

  // NAVBAR HTML RENDER

  //NAVIGATION LOGIC
  const technologiesContent = document.querySelector(".content__technologies");
  const projectsContent = document.querySelector(".content__projects");
  const myStudiesContent = document.querySelector(".content__my__studies");
  const aboutMeContent = document.querySelector(".content__about__me");
  const contactMeContent = document.querySelector(".content__contact");

  const navbarLinkNavigation = document.querySelectorAll(".navbar__link");

  const handleNavigation = (event) => {
    // console.log(event.target);
    // console.log(event.target.innerHTML);

    const navbarLinkCaptured = event.target.innerHTML;
    const scrollTop = document.documentElement.scrollTop;
    const navbarMenuContent = document.querySelector(".navbar__menu__content");
    const menuBarsIcon = document.querySelector("#menu-icon");

    const scrollToElement = (element) => {
      const elementToNavigatePosition = element.getBoundingClientRect();
      const position = elementToNavigatePosition.top + scrollTop - 60;
      window.scrollTo({ top: position, behavior: "smooth" });
      toggleMenu(navbarMenuContent, menuBarsIcon);
    };

    switch (navbarLinkCaptured) {
      case "Home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        toggleMenu(navbarMenuContent, menuBarsIcon);
        break;
      case "Tecnologias":
        scrollToElement(technologiesContent);
        break;
      case "Proyectos":
        scrollToElement(projectsContent);
        break;
      case "Educación":
        scrollToElement(myStudiesContent);
        break;
      case "Acerca de mi":
        scrollToElement(aboutMeContent);
        break;
      case "Contacto":
        scrollToElement(contactMeContent);
        break;
      default:
        break;
    }
  };

  navbarLinkNavigation.forEach((link) => {
    link.addEventListener("click", handleNavigation);
  });

  //NAVIGATION LOGIC
})();
