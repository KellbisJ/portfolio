let loadingAnimationTimeout;
let showLoadingTimeout;
let resetLoadingBarTimeout;

function barLoadingAnimation() {
  const layout = document.querySelector(".layout");

  const loadingIndicator = document.createElement("div");
  loadingIndicator.id = "loading-indicator";
  loadingIndicator.classList.add("show");

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");

  const progressBarFill = document.createElement("div");
  progressBarFill.classList.add("progress-bar-fill");

  progressBar.appendChild(progressBarFill);
  loadingIndicator.appendChild(progressBar);
  layout.appendChild(loadingIndicator);

  if (loadingAnimationTimeout) {
    clearTimeout(loadingAnimationTimeout);
  }
  if (showLoadingTimeout) {
    clearTimeout(showLoadingTimeout);
  }
  if (resetLoadingBarTimeout) {
    clearTimeout(resetLoadingBarTimeout);
  }

  loadingAnimationTimeout = setTimeout(() => {
    progressBarFill.style.width = "100%";
  }, 100);

  showLoadingTimeout = setTimeout(() => {
    loadingIndicator.classList.remove("show");
  }, 550);

  resetLoadingBarTimeout = setTimeout(() => {
    loadingIndicator.innerHTML = "";
  }, 600);
}

export { barLoadingAnimation };
