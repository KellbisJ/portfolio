class ScrollReveal {
  constructor(options = {}) {
    this.threshold = options.threshold || 0.15;
    this.rootMargin = options.rootMargin || "0px";
    this.staggerChildren = options.staggerChildren !== undefined ? options.staggerChildren : true;
    this.observer = null;
    this.revealed = new WeakSet();
  }

  observe(element) {
    if (!this.observer) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.revealed.has(entry.target)) {
              this.revealed.add(entry.target);
              this.revealElement(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: this.rootMargin,
          threshold: this.threshold,
        },
      );
    }

    this.observer.observe(element);
  }

  observeAll(selector) {
    document.querySelectorAll(selector).forEach((el) => this.observe(el));
  }

  revealElement(element) {
    const section = element.closest(".parallax-section");
    if (section) {
      section.style.contentVisibility = "visible";
      section.style.containIntrinsicSize = "1px";
    }

    element.style.contentVisibility = "visible";

    element.classList.remove("reveal-hidden");
    element.classList.add("reveal-visible");

    if (this.staggerChildren) {
      const children = element.querySelectorAll(
        ".tech-badge, .project-card, .study-card, .tech__container .tech-badge, .project__image__container, .project__details, .project__title, .project__description, .project__technologies, .project__navigator",
      );
      children.forEach((child) => {
        child.style.transitionDelay = `${index * 0.1}s`;
      });
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

export { ScrollReveal };
