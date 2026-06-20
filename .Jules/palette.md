## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2026-06-20 - Semantic Form Labels & ARIA Synchronization

**Learning:** Forms in this legacy codebase often utilize generic `<span>` elements as visual labels without programmatic association, and custom UI components like video selectors manage active states visually without ARIA properties. This severely degrades the experience for screen reader users.
**Action:** When updating forms, always replace visual `<span>` tags with semantic `<label>` elements linked to inputs via `for` and `id` attributes, ensuring CSS is updated to maintain visual consistency. For interactive lists or tabs, always synchronize the visual `.active` class toggle in JavaScript with the `aria-current="true"` state attribute to keep assistive technologies informed.
