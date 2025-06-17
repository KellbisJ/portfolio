function imgCreator(clasz, src, container, skeleton) {
  const img = new Image();
  img.classList.add(clasz, "hidden");
  img.alt = clasz;

  skeleton.classList.add("skeleton-animation");

  let timeout;

  const removeSkeleton = () => {
    if (!skeleton.isConnected) return;

    skeleton.classList.add("hidden");

    const removeElement = () => skeleton.remove();

    skeleton.addEventListener("transitionend", removeElement, { once: true });

    setTimeout(removeElement, 1000);
  };

  container.append(skeleton, img);

  img.onload = () => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      removeSkeleton();
      requestAnimationFrame(() => img.classList.remove("hidden"));
    }, 1000);
  };

  img.onerror = () => {
    skeleton.remove();
    console.error("Image failed to load");
  };

  img.src = src;

  return img;
}

export { imgCreator };
