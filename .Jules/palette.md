## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Semantic Labels over Span for Input Fields

**Learning:** This codebase incorrectly used `span` tags as labels for input fields without establishing programmatic relationships (e.g., using `for` and `id` attributes). This makes inputs inaccessible to screen readers as the fields lack proper naming. Changing to semantic `<label>` elements provides native click-to-focus behavior and makes the forms screen-reader accessible.
**Action:** Replaced `span` tags with semantic `<label>` tags linked to corresponding `<input>` elements via explicit `for` and `id` attributes. When writing custom form elements, always use `<label>` rather than `span` to ensure proper accessibility and better usability, taking care to preserve the original visual styling through updated CSS selectors.
