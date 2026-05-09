## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-09 - Replaced non-semantic form labels
**Learning:** Using `<span>` tags instead of `<label>` tags for form inputs causes screen readers to ignore the association between the text and the input field. Replacing `<span>` tags with proper `<label>` tags linked via `for` and `id` attributes dramatically enhances accessibility and screen reader support without changing visual layout.
**Action:** When creating forms, always use semantic `<label>` elements linked to their respective `<input>` elements. When updating legacy forms, look for instances of `<span>` or `<div>` acting as labels and convert them to proper `<label>` tags, ensuring to preserve necessary styling.
