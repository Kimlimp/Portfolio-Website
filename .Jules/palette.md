## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-08-29 - Non-semantic labels in forms

**Learning:** This codebase incorrectly uses non-semantic `<span>` tags for input labels in the 'Book me' section, relying purely on visual proximity instead of semantic association.
**Action:** Replaced `<span>` tags with proper `<label>` elements, adding `for` and `id` attributes to programmatically link labels and inputs for screen reader support. Updated CSS to maintain visual styles. In future updates, audit forms across the project to prioritize semantic `<label>` elements.
