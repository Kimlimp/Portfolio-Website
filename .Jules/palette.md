## 2024-05-23 - Missing Accessibility Script & Non-Semantic Buttons

**Learning:** This legacy codebase relies heavily on `div` and `span` elements for interactivity (buttons) without native keyboard support or ARIA attributes. A referenced `js/accessibility.js` script was missing, leaving keyboard users unable to interact with key features like the dark mode toggle, video controls, and modals.
**Action:** Created `js/accessibility.js` to retrofit keyboard support (`Enter`/`Space`) for `role="button"` elements. In future updates, prioritize refactoring these to native `<button>` elements while preserving styles, rather than relying on JS patches. Always verify the existence of referenced utility scripts.

## 2024-05-24 - Semantic Forms for Better Hit Areas
**Learning:** This site originally used `span` elements styled to look like labels in front of input fields, requiring users to explicitly tap the small input boxes themselves. Using semantic `label for="..."` significantly increases the tap target area, specially critical on mobile viewports.
**Action:** Replaced spans with semantic labels in the booking form. When retrofitting accessibility to older sites, look for pseudo-labels that can easily be upgraded to real labels to improve interaction targets.
