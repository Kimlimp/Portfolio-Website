## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-23 - Form Accessibility: Semantic Labels and Input Types

**Learning:** This project previously used non-semantic `span` elements instead of `<label>` tags for form inputs in the "Book Me" section, and incorrect input types (e.g., `text` instead of `email`) in the contact form. This hinders screen readers and reduces overall form usability (like clicking the label to focus the input).
**Action:** Replaced `span` tags with native semantic `<label>` tags linked via `for` and `id` attributes. Updated the contact form's email input to `type="email"`. Always ensure form elements use appropriate semantic HTML tags and input types to improve both accessibility and user experience. Remember to update associated CSS selectors when replacing tags to maintain visual consistency.
