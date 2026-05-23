## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.
## 2026-05-23 - Missing aria-current for custom interactive list
**Learning:** It's important to combine visual state classes (like `.active`) with semantic state attributes (`aria-current="true"`) for custom interactive lists/tabs so screen readers know which item is currently selected.
**Action:** Always ensure that when managing "active" states with JavaScript for custom UI elements (like a video selector list), ARIA state attributes are synchronized alongside visual CSS classes.
