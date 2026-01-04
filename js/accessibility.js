// Accessibility helper to allow Enter key to trigger click on non-button elements with role="button"
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
    const target = event.target;
    // Check if the element has role="button" and is not a native button or input
    if (target.getAttribute("role") === "button" &&
        target.tagName !== "BUTTON" &&
        target.tagName !== "INPUT") {
      // Prevent default behavior for Space key (scrolling)
      if (event.key === " ") {
        event.preventDefault();
      }
      target.click();
    }
  }
});
