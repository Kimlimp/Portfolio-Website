## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-05-02 - Semantic Forms & CSS Selectors
**Learning:** This codebase uses non-semantic elements like `<span>` instead of `<label>` for forms. When converting these to semantic `<label>` elements for accessibility, the CSS selectors targeting them must be updated (e.g., `.book-me-cont span` to `.book-me-cont span, .book-me-cont label`) to prevent visual regressions, especially within media queries.
**Action:** When updating forms to use proper `<label for="...">` elements linked to `<input id="...">`, always verify and update associated CSS selector chains to include the new semantic elements and maintain visual consistency.
