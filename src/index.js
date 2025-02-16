(() => {
  // navbar logic
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
  }); // navbar logic

  // copy email logic

  const emailAddress = "kellbisdevsw@gmail.com";

  const copyElement = document.getElementById("copyElement");
  const mailIcon = document.getElementById("mailIcon");
  const emailInput = document.getElementById("emailInput");
  const copyText = document.getElementById("copyText");

  const copyAddres = async () => {
    try {
      await navigator.clipboard.writeText(emailInput.value);
      copyElement.classList.add("copy-success");
      copyText.classList.remove("hidden");
      setTimeout(() => {
        copyElement.classList.remove("copy-success");
        copyText.classList.add("hidden");
      }, 1700);
    } catch (err) {
      console.error(`err copying text: ${err}`);
      fallbackCopyAddress();
    }
  };

  const fallbackCopyAddress = () => {
    emailInput.select();
    document.execCommand("copy");
    copyElement.classList.add("copy-success");
    copyText.classList.remove("hidden");
    setTimeout(() => {
      copyElement.classList.remove("copy-success");
      copyText.classList.add("hidden");
    }, 1700);
  };

  const openMailTo = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  copyElement.addEventListener("click", copyAddres);
  mailIcon.addEventListener("click", openMailTo); // copy email logic

  //NAVIGATION LOGIC
  const technologiesContent = document.querySelector(".content__technologies");
  const projectsContent = document.querySelector(".content__projects");
  const myStudiesContent = document.querySelector(".content__my__studies");
  const aboutMeContent = document.querySelector(".content__about__me");
  const navbarLinkNavigation = document.querySelectorAll(".navbar__link");

  const handleNavigation = (event) => {
    // console.log(event.target);
    // console.log(event.target.innerHTML);

    const navbarLinkCaptured = event.target.innerHTML;
    const scrollTop = document.documentElement.scrollTop;

    const scrollToElement = (element) => {
      const elementToNavigatePosition = element.getBoundingClientRect();
      const position = elementToNavigatePosition.top + scrollTop;
      window.scrollTo({ top: position });
    };

    switch (navbarLinkCaptured) {
      case "Home":
        window.scrollTo(0, 0);
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
      default:
        break;
    }
  };

  navbarLinkNavigation.forEach((link) => {
    link.addEventListener("click", handleNavigation);
  });

  //NAVIGATION LOGIC
})();
