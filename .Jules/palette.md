## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-10-24 - Semantic Form Labels Missing in Book Me Form
**Learning:** Found instances where `<span>` elements were being used as labels for `<input>` elements in the booking form. This is an accessibility anti-pattern as screen readers and assistive technologies rely on semantic `<label>` elements explicitly linked to their corresponding inputs (using `for` and `id` attributes) to announce form controls properly.
**Action:** Replaced `<span>` with `<label>` tags and added `for` attributes linking to matching `id` attributes on the input fields. Maintained visual consistency by updating the CSS selectors to apply the existing span styles to the new labels as well. Always use semantic `<label>` elements for forms in future updates.
