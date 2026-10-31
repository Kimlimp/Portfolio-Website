## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.
## 2026-10-31 - Semantic Labels for Forms
**Learning:** Non-semantic <span> elements were used as form labels for the booking section, which lacks explicit association for screen readers.
**Action:** Replaced <span> elements with <label> and linked them to their respective inputs using 'for' and 'id' attributes.
