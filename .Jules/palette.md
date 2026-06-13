## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-06-13 - Semantic Labels Over Spans for Better Form UX

**Learning:** In forms across the site (like the 'Book me' section), non-semantic `<span>` elements were being used to label inputs instead of proper `<label>` elements. This results in poorer screen reader context and prevents users from clicking the label text to focus the input field, which degrades UX, especially for small touch targets.
**Action:** Replaced `<span>` with `<label>` and linked them to their respective inputs using `for` and `id` attributes. In the future, always prioritize semantic HTML for forms and remember to update the corresponding CSS selector chains to maintain visual parity.
