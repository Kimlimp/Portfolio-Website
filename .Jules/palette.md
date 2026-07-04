## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-23 - Non-semantic Form Labels
**Learning:** The 'Book me' section used `span` elements instead of `<label>` elements for form inputs, which causes screen readers to miss the connection between the descriptive text and the actual input field. This severely impacts accessibility for visually impaired users trying to understand what the date and time fields are for.
**Action:** Replaced `<span>` elements with semantic `<label>` elements, linking them to their respective inputs using `for` and `id` attributes (e.g., `<label for="book-date-input">` and `<input id="book-date-input">`). Updated corresponding CSS selectors to maintain visual consistency.
