## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-08-22 - Semantic Labels for Booking Form
**Learning:** The booking component used non-semantic `<span>` elements for input labels, leading to poor accessibility for screen readers and preventing programmatic linking of labels to inputs via `for`/`id` attributes.
**Action:** Replaced `<span>` elements with native `<label>` tags linked to corresponding inputs via `for` and `id` attributes. Ensure that new `<label>` elements are also covered by existing CSS selectors previously targeting `<span>` elements to maintain visual consistency.
