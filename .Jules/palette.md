## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-02-28 - Non-Semantic Form Labels

**Learning:** The "Book Me" form inputs relied on sibling `<span>` tags to act as visual labels ("Date:" and "Time:"). This created a frustrating experience for screen reader users (as the inputs were entirely unlabeled) and for mouse/touch users (as clicking the text did not focus the input).
**Action:** Replaced the visual `<span>` tags with semantic `<label>` elements linked to their respective inputs via `for` and `id` attributes. Updated CSS selectors to explicitly target both `.book-me-cont span` and `.book-me-cont label` to preserve legacy spacing logic during the refactor.
