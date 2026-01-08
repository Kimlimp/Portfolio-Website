// Accessibility script to handle keyboard events for elements with role="button"

document.addEventListener('keydown', (e) => {
  // Check if the target has role="button"
  if (e.target.matches('[role="button"]')) {
    // Check for Enter or Space key
    if (e.key === 'Enter' || e.key === ' ') {
      // Prevent default scrolling for Space
      if (e.key === ' ') {
        e.preventDefault();
      }
      // Trigger the click event
      e.target.click();
    }
  }
});
