## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Unlabeled Form Inputs in "Book Me" Section
**Learning:** Found inputs using adjacent `span` elements as labels. This prevents screen readers from associating labels with inputs and misses the opportunity for larger click targets.
**Action:** Replaced `span` with `<label>` and added `id`/`for` attributes. This is a low-risk, high-impact accessibility win that preserves visual style (since `label` inherits most styles) while significantly improving usability for all users (focus on click). verified with Playwright that focus behavior works correctly.
