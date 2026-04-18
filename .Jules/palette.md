## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-04-18 - Non-Semantic Form Labeling

**Learning:** Discovered a pattern of using non-semantic `<span>` elements acting as visual labels for inputs (e.g., in the 'Book me' section), which breaks the association for screen readers making the form less accessible.
**Action:** Replaced `<span>` labels with native `<label>` elements linked to inputs via `for` and `id` attributes. Updated existing CSS selector chains to ensure the visual styling remains consistent. Prioritize checking form structure for native semantic elements in future UI reviews.