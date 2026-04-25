## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-23 - Semantic form labels for "Book me" section

**Learning:** This codebase incorrectly used `<span>` tags to visually represent labels for date and time inputs, breaking screen reader association and reducing overall form accessibility. This pattern might exist elsewhere and must be corrected.
**Action:** Replaced the non-semantic `<span>` elements with semantic `<label>` elements linked explicitly to their corresponding `<input>` tags using `for` and `id` attributes. Modified the underlying CSS selectors (like `.book-me-cont label`) to preserve the previous visual design while ensuring true semantic form grouping and screen reader compatibility.
