## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Implicit Labels for Legacy Inputs
**Learning:** Found inputs wrapped in `div`s with adjacent text spans (e.g., "Date: [input]"). Replacing the wrapper `div` with a `label` element effectively creates an implicit association, improving accessibility and hit targets without breaking existing Flexbox layouts or requiring ID/for refactoring.
**Action:** When encountering unlabelled inputs in this legacy codebase, prefer wrapping the container in `<label>` over adding `id`s if the layout allows (flex items handle blockification of labels well).
