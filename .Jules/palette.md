## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-02-21 - Semantic Labels for Booking Form
**Learning:** Small semantic changes like `label` vs `span` can have a huge impact on accessibility without affecting visual design. The booking form inputs lacked programmatic association, which is now fixed by using `label` elements with `for` attributes.
**Action:** Always check for `span` elements used as labels and replace them with `label` elements where appropriate.
