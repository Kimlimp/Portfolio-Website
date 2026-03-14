## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-23 - Replaced Span with Label Tags for Form Inputs

**Learning:** This codebase relies on `<span>` elements as labels for forms, which prevents screen readers from understanding the context of the input fields and breaks accessibility. Additionally, clicking on the `<span>` does not focus the input fields. The html page language attribute `lang` was mistakenly set to `en` instead of `nl`, conflicting with the site's content.
**Action:** Replaced `<span>` tags with semantic `<label>` tags and associated them with corresponding `<input>` tags using `for` and `id` attributes. This ensures screen readers can parse the form and clicking the label focuses the input. Furthermore, I set the `lang` attribute to `nl` to match the Dutch website content. In future updates, check form sections and ensure all inputs have proper labels instead of visually identical `<span>` wrappers.
