// Accessibility helper to make role="button" elements keyboard accessible

document.addEventListener('keydown', function(event) {
  // Check if the target is an element with role="button"
  if (event.target && event.target.getAttribute('role') === 'button') {
    // Check if Enter or Space was pressed
    if (event.key === 'Enter' || event.key === ' ') {
      // Prevent default scroll behavior for Space
      event.preventDefault();
      // Trigger the click event
      event.target.click();
    }
  }
});
