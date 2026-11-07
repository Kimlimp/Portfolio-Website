## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Missing Semantic Form Labels

**Learning:** The booking form component used `span` elements instead of `label` elements, which negatively impacted accessibility for screen reader users and reduced the click target area.
**Action:** Replaced `span` with semantic `<label>` elements linked to inputs via `for` and `id` attributes to improve accessibility and usability, and updated corresponding CSS selectors to maintain visual design.
