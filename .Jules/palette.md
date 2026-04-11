## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-04-11 - [Use Semantic Labels in Forms]
**Learning:** This app's form styling relies heavily on non-semantic `<span>` tags rather than proper `<label>` elements for inputs. This prevents screen readers from correctly associating the text with the respective inputs.
**Action:** Replaced `<span>` elements adjacent to inputs with `<label>` tags and properly linked them using the `for` and `id` attributes. Updated CSS to maintain consistent styling for both tags. Ensure future forms prioritize `<label>` elements linked to inputs with explicit `for` attributes.
