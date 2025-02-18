(() => {
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

  // (MAIL, PHONENUMBER) COPY AND MAIL TO LOGIC

  const emailAddress = "kellbisdevsw@gmail.com";

  const copyMailPreviewField = document.getElementById("copyMailPreviewField");
  const copyMailContactField = document.getElementById("copyMailContactField");
  const copyPhonenumberField = document.getElementById("copyPhonenumberField");

  const mailIcon = document.getElementById("mailIcon");

  const emailInputField = document.getElementById("emailInputField");
  const phonenumberInputField = document.getElementById("phonenumberField");

  const copyMailPreview = document.getElementById("copyMailPreview");
  const copyMailContact = document.getElementById("copyMailContact");
  const copyTextPhoneNumber = document.getElementById("copyTextPhoneNumber");

  const copyAddres = async (event) => {
    console.log(event.target);

    try {
      await navigator.clipboard.writeText(emailInputField.value);
      if (event.target.id === "copyMailPreviewField") {
        copyMailPreviewField.classList.add("copy-success");
        copyMailPreview.classList.remove("hidden");
      }
      if (event.target.id === "copyMailContactField") {
        copyMailContactField.classList.add("copy-success");
        copyMailContact.classList.remove("hidden");
      }
      setTimeout(() => {
        copyMailPreviewField.classList.remove("copy-success");
        copyMailPreview.classList.add("hidden");
        copyMailContactField.classList.remove("copy-success");
        copyMailContact.classList.add("hidden");
      }, 1700);
    } catch (err) {
      console.error(`err copying text: ${err}`);
      fallbackCopyAddress(event);
    }
  };

  const fallbackCopyAddress = (event) => {
    emailInputField.select();
    document.execCommand("copy");

    if (event.target.id === "copyMailPreviewField") {
      copyMailPreviewField.classList.add("copy-success");
      copyMailPreview.classList.remove("hidden");
    }
    if (event.target.id === "copyMailContactField") {
      copyMailContactField.classList.add("copy-success");
      copyMailContact.classList.remove("hidden");
    }

    setTimeout(() => {
      copyMailPreviewField.classList.remove("copy-success");
      copyMailPreview.classList.add("hidden");
      copyMailContactField.classList.remove("copy-success");
      copyMailContact.classList.add("hidden");
    }, 1700);
  };

  const openMailTo = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const copyPhonenumber = async () => {
    try {
      await navigator.clipboard.writeText(phonenumberInputField.value);
      copyPhonenumberField.classList.add("copy-success");
      copyTextPhoneNumber.classList.remove("hidden");

      setTimeout(() => {
        copyPhonenumberField.classList.remove("copy-success");
        copyTextPhoneNumber.classList.add("hidden");
      }, 1700);
    } catch (err) {
      console.error(`err copying text: ${err}`);
      fallbackCopyPhonenumber();
    }
  };

  const fallbackCopyPhonenumber = () => {
    phonenumberInputField.select();
    document.execCommand("copy");

    copyPhonenumberField.classList.add("copy-success");
    copyTextPhoneNumber.classList.remove("hidden");

    setTimeout(() => {
      copyPhonenumberField.classList.remove("copy-success");
      copyTextPhoneNumber.classList.add("hidden");
    }, 1700);
  };

  copyMailPreviewField.addEventListener("click", copyAddres);
  copyMailContactField.addEventListener("click", copyAddres);
  copyPhonenumberField.addEventListener("click", copyPhonenumber);
  mailIcon.addEventListener("click", openMailTo);

  // (MAIL, PHONENUMBER) COPY AND MAIL TO LOGIC

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
      window.scrollTo({ top: position });
      toggleMenu();
    };

    switch (navbarLinkCaptured) {
      case "Home":
        window.scrollTo(0, 0);
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
})();
