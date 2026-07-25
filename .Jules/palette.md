## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-07-25 - Non-Semantic Form Labels

**Learning:** Form structures in this application (specifically the "Book me" section) use non-semantic `<span>` tags adjacent to inputs instead of semantic `<label>` elements linked via `for` and `id` attributes. This breaks screen reader associations and clickable areas for form inputs. The contact form also currently relies purely on `aria-label` and `placeholder` rather than proper semantic `<label>` elements, creating a recurring accessibility debt pattern.
**Action:** Replaced `<span>` tags with semantic `<label>` elements and linked them to `id`s on `<input>` fields. Also added the `.book-me-cont label` selector to the CSS media queries to maintain visual parity with the old `span` styles. Future form developments must use proper semantic `<label>` elements by default.
