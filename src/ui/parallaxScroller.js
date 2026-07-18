let ticking = false;

export function initParallaxScroller(navLinkElements) {
  if (!navLinkElements) return;

  const sections = document.querySelectorAll(".parallax-section");
  const contents = document.querySelectorAll(".parallax-content");

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function update() {
    const viewportHeight = window.innerHeight;
    const scrollPos = window.scrollY + viewportHeight * 0.4; // 40% from top triggers active nav
    let activeSection = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = sectionTop + rect.height;

      // 1. Update Active Nav Link
      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        activeSection = section.id;
      }

      const content = section.querySelector(".parallax-content");
      if (!content) return;

      // 2. OPACITY MATH: Soft fade in/out based on scroll progress
      // Progress goes from 0 (enters bottom) to 1 (leaves top)
      const totalTravel = viewportHeight + rect.height;
      const progress = (viewportHeight - rect.top) / totalTravel;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Sine wave creates a perfect 0 -> 1 -> 0 soft curve for opacity
      const opacity = Math.sin(clampedProgress * Math.PI);

      // 3. PARALLAX MATH: Bounded Sine Wave Transform
      const speed = parseFloat(content.dataset.speed) || 0.2;
      // Map progress (0 to 1) to an eased range of -1 to 1
      const movementFactor = Math.sin(clampedProgress * Math.PI - Math.PI / 2);
      // Cap the maximum movement so it NEVER overlaps adjacent sections
      const maxMovement = viewportHeight * speed * 0.5;

      // Apply the eased movement (negative for natural depth)
      const translateY = movementFactor * maxMovement * -1;

      // 4. Apply styles
      content.style.transform = `translate3d(0, ${translateY}px, 0)`;
      content.style.opacity = opacity.toFixed(3);
    });

    // Update Nav Classes
    Object.entries(navLinkElements).forEach(([id, link]) => {
      link.classList.toggle("active", id === activeSection);
    });

    ticking = false;
  }

  window.removeEventListener("scroll", onScroll);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  // Initial call
  update();
}
