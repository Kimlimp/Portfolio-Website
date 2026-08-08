## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-10-24 - Semantic Labels for Forms
**Learning:** Generic `<span>` elements were used as visual labels for inputs without providing any semantic association for screen readers, breaking form accessibility.
**Action:** When updating or building forms, always replace non-semantic label elements with proper `<label>` elements linked to inputs via `for` and `id` attributes. Remember to update associated CSS selector chains to include the new `label` elements to maintain visual consistency.
