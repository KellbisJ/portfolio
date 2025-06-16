function imgCreator(clasz, src, container, skeleton) {
  const img = new Image();
  img.classList.add(clasz, "hidden");
  img.alt = clasz;

  const wrapper = document.createElement("div");
  wrapper.classList.add("img__wrapper");
  container.replaceChild(wrapper, skeleton);
  wrapper.appendChild(skeleton);
  wrapper.appendChild(img);

  let fallback;

  const cleanUpSkeleton = () => {
    clearTimeout(fallback);
    skeleton.classList.add("hidden");
    skeleton.addEventListener(
      "transitionend",
      () => {
        if (skeleton.isConnected) skeleton.remove();
      },
      { once: true }
    );
  };

  const showImage = () => {
    img.classList.remove("hidden");
  };

  skeleton.addEventListener("transitionend", cleanUpSkeleton, { once: true });
  fallback = setTimeout(cleanUpSkeleton, 1000);

  img.onload = () => {
    if (skeleton.isConnected) {
      skeleton.classList.add("hidden");
    } else {
      cleanUpSkeleton();
    }

    requestAnimationFrame(() => {
      setTimeout(showImage, 10);
    });
  };

  img.onerror = () => {
    clearTimeout(fallback);
    skeleton.remove();
    console.error("Image failed to load");
  };

  img.src = src;
  return img;
}

export { imgCreator };
