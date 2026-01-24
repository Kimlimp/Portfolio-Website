## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Form Label Association

**Learning:** The booking form used `div` elements to wrap inputs and text, breaking the semantic association between label and input. Replacing these `div` wrappers with `<label>` elements (which become flex items in the existing layout) successfully restores accessibility and improves hit areas without requiring CSS changes.
**Action:** When auditing forms in this repo, prioritize checking for and replacing non-semantic wrappers with `label` tags where inputs are nested, as the existing CSS flexbox structures tend to support this refactor gracefully.
