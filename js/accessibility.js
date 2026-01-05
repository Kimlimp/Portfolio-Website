document.addEventListener('DOMContentLoaded', () => {
  // Find all elements with role="button" that are also tab-focusable
  const interactiveElements = document.querySelectorAll('[role="button"][tabindex="0"]');

  interactiveElements.forEach(element => {
    element.addEventListener('keydown', (e) => {
      // Trigger click on Enter or Space
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Prevent scrolling for Space
        element.click();
      }
    });
  });
});
