## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Form Labels & Non-Semantic Spans

**Learning:** This codebase uses `<span>` elements instead of semantic `<label>` elements for form inputs (like in the "Book me" section), reducing the clickable area to focus inputs and impairing screen reader accessibility.
**Action:** Replaced `<span>` tags with proper `<label>` elements linked to inputs via `for` and `id` attributes. When updating forms across the project, prioritize semantic elements and remember to update the associated CSS selector chains to include the new `label` elements to maintain visual consistency.
