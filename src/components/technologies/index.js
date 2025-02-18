(() => {
  const technologiesMaterial = {
    globeTechIcon: "fa-solid fa-globe",
    reactIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    htmlIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    cssIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    tailwindcssIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    javascriptIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    typescriptIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    nodejsIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    gitIconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  };

  const CONTENT_TECHNOLOGIES = document.querySelector(".content__technologies");

  const technologiesHTML = `
    <div class="content__technologies__title">
            <i class="${technologiesMaterial.globeTechIcon}"></i>
            <h2>Tecnologias</h2>
          </div>

          <div class="content__technologies__img__grid">
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.reactIconSrc}" />
              <p>React.js</p>
            </div>
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.htmlIconSrc}" />
              <p>HTML5</p>
            </div>
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.cssIconSrc}" />
              <p>CSS3</p>
            </div>
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.tailwindcssIconSrc}" />
              <p>Tailwind CSS</p>
            </div>
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.javascriptIconSrc}" />
              <p>JavaScript</p>
            </div>
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.typescriptIconSrc}" />
              <p>TypeScript</p>
            </div>
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.nodejsIconSrc}" />
              <p>NodeJs</p>
            </div>
            <div class="technologies__img__container">
              <img class="technologies__img" src="${technologiesMaterial.gitIconSrc}" />
              <p>Git</p>
            </div>
          </div>
  `;
  CONTENT_TECHNOLOGIES.innerHTML += technologiesHTML;
})();
