() => {
  document.addEventListener("DOMContentLoaded", () => {
    const jsStudiesReferences = [
      "https://platzi.com/home/",
      "https://www.w3schools.com",
      "https://neetcode.io/",
      "https://developer.mozilla.org/es/",
      "https://www.freecodecamp.org/",
      "https://www.youtube.com/@midudev",
    ];
    const jsStudiesTextContent = ["Platzi,", "W3schools,", "NeetCode,", "MDN,", "FreeCodeCamp,", "YouTube resources..."];

    const studiesContent = {
      javascript: {
        title: "Full Stack Developer con JavaScript",
        studiesReferences: [...jsStudiesReferences],
        studiesTextContent: [...jsStudiesTextContent],
        chronology: "2019 - Actualidad [2025]",
      },
    };
  });
};
