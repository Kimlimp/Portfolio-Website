## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-11-15 - Refactoring non-semantic spans to semantic labels

**Learning:** Forms in this project frequently use generic `<span>` elements as input descriptors rather than semantic `<label>` elements, causing inputs to lack accessible programmatic names for screen reader users and missing click-to-focus functionality.
**Action:** When updating forms across the project, prioritize replacing non-semantic elements (like `<span>`) used as labels with proper `<label>` elements linked via `for` and `id` attributes. Remember to update the associated CSS selector chains to include the new `label` elements to maintain visual consistency.
