function filterContent(container, content) {
  container.innerHTML = "";

  container.appendChild(content);

  return container;
}

export { filterContent };
