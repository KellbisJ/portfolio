(() => {
  document.addEventListener("DOMContentLoaded", () => {
    // NAVBAR HTML RENDER
    const navbarMaterial = {
      briefcaseIcon: "fa-solid fa-briefcase",
      barsIcon: "fas fa-bars",

      mobileContent: {
        navBarLinksContent: {
          pageNavigation: ["#home", "#tecnologias", "#proyectos", "#educación", "#acerca-de-mi", "#contacto"],
          linkContent: ["Home", "Tecnologias", "Proyectos", "Educación", "Acerca de mi", "Contacto"],
        },
      },
      wideContent: {
        navBarLinksContent: {
          pageNavigation: ["#home", "#tecnologias", "#proyectos", "#educación", "#acerca-de-mi", "#contacto"],
          linkContent: ["Home", "Tecnologias", "Proyectos", "Educación", "Acerca de mi", "Contacto"],
        },
      },
    };

    const nav = document.querySelector(".navbar");
    const navbarElementsContainer = document.createElement("div");

    navbarElementsContainer.classList.add("navbar__elements");

    function createNavbarContents(content) {
      if (content === navbarMaterial.mobileContent) {
        const navbarContentMobile = document.createElement("div");
        const navbarBrand = document.createElement("div");
        const navbarMenuContent = document.createElement("div");

        const button = document.createElement("button");
        button.id = "menu";

        const iBriefCase = document.createElement("i");
        iBriefCase.className = navbarMaterial.briefcaseIcon;

        const iFaBars = document.createElement("i");
        iFaBars.className = navbarMaterial.barsIcon;
        iFaBars.id = "menu-icon";

        navbarContentMobile.classList.add("navbar__content__mobile");
        navbarBrand.classList.add("navbar__brand");

        button.appendChild(iFaBars);
        navbarBrand.appendChild(iBriefCase);

        const linkElementContent = content.navBarLinksContent;
        navbarMenuContent.classList.add("navbar__menu__content");

        linkElementContent.pageNavigation.forEach((path, index) => {
          const navbarLink = document.createElement("a");
          navbarLink.classList.add("navbar__link");
          navbarLink.href = path;
          navbarLink.textContent = linkElementContent.linkContent[index];

          navbarMenuContent.appendChild(navbarLink);
        });

        navbarContentMobile.appendChild(navbarBrand);
        navbarContentMobile.appendChild(button);
        navbarContentMobile.appendChild(navbarMenuContent);

        return navbarContentMobile;
      }
      if (content === navbarMaterial.wideContent) {
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

        return navbarContentWide;
      }
    }

    const contents = [navbarMaterial.mobileContent, navbarMaterial.wideContent];

    contents.forEach((content) => {
      const navbarElements = createNavbarContents(content);
      navbarElementsContainer.appendChild(navbarElements);
    });

    nav.appendChild(navbarElementsContainer);

    // NAVBAR HTML RENDER

    // NAVBAR LOGIC
    const menuButton = document.querySelector("#menu");
    const navbarMenuContent = document.querySelector(".navbar__menu__content");
    const menuIcon = document.querySelector("#menu-icon");

    let menuNavbarShowed = false;

    const menuIcons = {
      barsIcon: "fa fa-bars",
      closeIcon: "fa-solid fa-x",
    };

    const toggleMenu = () => {
      navbarMenuContent.classList.toggle("show");

      navbarMenuContent.classList.contains("show") ? ((menuIcon.classList = menuIcons.closeIcon), (menuNavbarShowed = true)) : ((menuIcon.classList = menuIcons.barsIcon), (menuNavbarShowed = false));
    };

    const handleBodyClick = (event) => {
      if (menuNavbarShowed && !navbarMenuContent.contains(event.target) && !menuButton.contains(event.target)) {
        navbarMenuContent.classList.remove("show");
        menuNavbarShowed = false;
        menuIcon.classList = menuIcons.barsIcon;
      }
    };

    menuButton.addEventListener("click", toggleMenu);
    document.body.addEventListener("click", handleBodyClick);

    navbarMenuContent.addEventListener("click", (event) => {
      event.stopPropagation();
    }); // NAVBAR LOGIC

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

      const scrollToElement = (element) => {
        const elementToNavigatePosition = element.getBoundingClientRect();
        const position = elementToNavigatePosition.top + scrollTop - 40;
        window.scrollTo({ top: position, behavior: "smooth" });
        toggleMenu();
      };

      switch (navbarLinkCaptured) {
        case "Home":
          window.scrollTo({ top: 0, behavior: "smooth" });
          toggleMenu();
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
  });
})();
