## 2024-05-24 - Semantic Labeling for Custom Form Components
**Learning:** Using non-semantic `<span>` elements for form labels impairs screen reader navigation. Properly linking `<label>` elements via `for` and `id` attributes ensures input context is clearly conveyed.
**Action:** Always prioritize native `<label>` elements linked to their inputs when updating forms, and update corresponding CSS selector chains to include the new labels to maintain visual integrity.
