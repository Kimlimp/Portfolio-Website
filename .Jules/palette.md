## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2025-02-17 - Missing Form Labels & Semantic Association

**Learning:** The application uses disconnected `<span>` elements as visual labels for form inputs, relying on proximity rather than programmatic association. This breaks accessibility for screen readers and prevents click-to-focus behavior for mouse users.
**Action:** Replaced `<span>` labels with semantic `<label>` elements linked via `for` and `id` attributes. This immediately improves accessibility and usability (larger click target) without requiring significant design changes. Future forms should always use explicit `<label>` elements.
