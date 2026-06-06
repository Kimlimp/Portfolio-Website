## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.
## 2024-05-23 - Form Semantics & ARIA State Management

**Learning:** Forms utilizing non-semantic `<span>` elements as faux labels (`Date:`, `Time:`) lack accessibility support and restrict the clickable target area. Furthermore, interactive JS components (like the video selector) exclusively relying on visual classes (e.g., `.active`) prevent screen readers from announcing state changes.
**Action:** Replace `<span>` labels with semantic `<label>` elements linked via `for` and `id` attributes to input fields, ensuring associated CSS handles both selectors for visual parity. For dynamic UI elements, strictly enforce synchronizing visual state classes with appropriate ARIA states (e.g., `aria-current="true"`) to maintain accessibility.
