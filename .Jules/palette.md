## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-28 - Non-Semantic Form Labels

**Learning:** The "Book me" section in `index.html` used non-semantic `<span>` elements instead of proper `<label>` elements linked to inputs with `for`/`id` attributes. This prevents screen readers from understanding the context of the inputs (e.g. knowing a text input is for "Date").
**Action:** Replaced the `<span>` tags with semantic `<label>` tags and linked them to their respective inputs (`book-date-input` and `book-time-input`). In future updates, ensure all form inputs have proper accessible labeling to improve the experience for screen reader users, while updating CSS to preserve the original visual styling.
