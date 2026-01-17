## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Retrofitting Labels to Styled Spans

**Learning:** When retrofitting accessibility to a legacy codebase where styles target specific tags (e.g., `span`), changing the tag to a semantic one (e.g., `label`) can break the visual design.
**Action:** Wrap the existing styled element (e.g., `span`) inside the semantic element (e.g., `label`) to preserve the visual styles while gaining the accessibility benefits (screen reader support, click-to-focus) without rewriting CSS.
