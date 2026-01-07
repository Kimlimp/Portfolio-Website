## 2024-05-23 - Custom Interactive Elements & Accessibility
**Learning:** Custom interactive elements (like spans and divs) used as buttons must explicitly have `role="button"`, `tabindex="0"`, and keyboard event listeners (Enter/Space) to be accessible. Relying solely on `click` events excludes keyboard users.
**Action:** Always check for interactive `div` or `span` elements and either convert them to `<button>` or add the necessary ARIA attributes and keyboard handlers.
