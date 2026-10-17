## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Semantic Labels for Inputs
**Learning:** The 'Book me' section used `<span>` elements as pseudo-labels for inputs, which screen readers cannot correctly associate with the input fields.
**Action:** Replaced `<span>` with semantic `<label>` elements and linked them via `for` and `id` attributes to improve accessibility while updating CSS to preserve the visual design.
