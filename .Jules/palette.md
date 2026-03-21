## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Missing Semantic Labels & Language Attribute

**Learning:** Sighted users use visual context to infer relationships between text and form controls. However, screen readers need programmatic associations. Using generic `span` tags near inputs without proper `label` elements (`for` and `id` linking) renders forms inaccessible for non-visual users. Additionally, relying on default HTML boilerplate language (`lang="en"`) for non-English content causes screen readers to mispronounce the entire page.
**Action:** Refactored generic `span` wrappers to semantic `<label>` elements linked to their respective `<input>` fields via `id` attributes. Updated the root `html` element's `lang` attribute to `nl` to accurately reflect the site's content language. Always use semantic labels for forms and ensure the language attribute is correctly set.
