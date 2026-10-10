## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-10-10 - Enhance 'Book me' form accessibility
**Learning:** The 'Book me' form used non-semantic `<span>` elements as labels for date and time inputs. This makes it difficult for screen readers to associate the label with the input, and users cannot click the label to focus the input.
**Action:** Replaced non-semantic `<span>` elements with semantic `<label>` elements in the 'Book me' form and linked them to inputs via `for` and `id` attributes. Added CSS rules for the new labels to maintain visual consistency.
