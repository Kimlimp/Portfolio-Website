## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-06-27 - Non-Semantic Form Labels
**Learning:** The 'Book me' contact form used `<span>` elements instead of semantic `<label>` elements, breaking screen reader association with input fields. The CSS was tightly coupled to the `span` tag selector.
**Action:** Replaced `<span>` with `<label>` and added `for` and `id` attributes to link them. Updated CSS selectors to include `label` to preserve existing visual layout.
