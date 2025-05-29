const contentCache = new Map();

function filterContent(container, contentGenerator, contentKey) {
  if (!contentCache.has(contentKey)) {
    const content = contentGenerator();
    content.classList.add("content-item", "content-hidden");
    contentCache.set(contentKey, content);
  }

  const newContent = contentCache.get(contentKey);

  if (!container.contains(newContent)) {
    container.appendChild(newContent);
  }

  let currentContent = null;
  for (const child of container.children) {
    if (child.classList.contains("content-item") && !child.classList.contains("content-hidden")) {
      currentContent = child;
      break;
    }
  }

  if (currentContent === newContent) {
    return container;
  }

  if (currentContent) {
    currentContent.classList.add("content-hidden");
  }

  let contentTransitionTimeout;

  if (contentTransitionTimeout) clearTimeout(contentTransitionTimeout);

  contentTransitionTimeout = setTimeout(() => {
    newContent.classList.remove("content-hidden");
  }, 200);

  return container;
}

export { filterContent, contentCache };
