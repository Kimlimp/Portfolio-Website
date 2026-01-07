document.addEventListener("DOMContentLoaded", () => {
  const interactiveSelectors = [
    ".modal-trigger",
    ".light-dark-toggle",
    ".video-selector span",
    ".playpause-btn",
    ".ffw-btn",
    ".modal-close-btn",
  ];

  const elements = document.querySelectorAll(interactiveSelectors.join(", "));

  elements.forEach((el) => {
    // Add accessibility attributes
    if (!el.hasAttribute("role")) {
      el.setAttribute("role", "button");
    }
    if (!el.hasAttribute("tabindex")) {
      el.setAttribute("tabindex", "0");
    }

    // Add keyboard support
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
  });
});
