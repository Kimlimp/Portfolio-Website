// Accessibility helper to make non-semantic buttons keyboard accessible
document.addEventListener('DOMContentLoaded', () => {
  const interactiveElements = document.querySelectorAll('[role="button"]');

  interactiveElements.forEach((element) => {
    element.addEventListener('keydown', (e) => {
      // Trigger click on Enter or Space key
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // Prevent default scroll for Space
        element.click();
      }
    });
  });
});
