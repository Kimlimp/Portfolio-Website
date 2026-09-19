## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.
## 2024-05-24 - Semantic Form Labels
**Learning:** The app frequently uses non-semantic `<span>` elements as form labels (e.g., in the booking component).
**Action:** Always replace these with semantic `<label>` elements linked via `id` and `for` attributes to ensure proper screen reader support and form accessibility.
