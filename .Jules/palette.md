## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-23 - Replacing Non-Semantic Form Labels
**Learning:** Some forms in this codebase used `<span>` elements to visually label inputs. This provides no semantic meaning for screen readers and breaks the ability to click the text to focus the input.
**Action:** Replaced `<span>` elements functioning as labels with semantic `<label>` elements linked to their respective inputs using matching `for` and `id` attributes. When making these changes, it's important to update corresponding CSS selector chains (e.g., adding `.container label` where `.container span` was used) to ensure visual styles remain intact.
