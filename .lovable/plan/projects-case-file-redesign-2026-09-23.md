# Projects Case-File Redesign

## Build
- Replace the three equal cards with a two-column project file system: selectable folder tabs on the left and one active case preview on the right.
- Add the supplied project copy, prominent category stamps, scan-friendly metric badges, artifact tags, and project-specific action labels.
- Create distinct visual artifact previews for Durex and TelcoX without inventing external links or unavailable documents.
- Add a HYPHEN campaign gallery using the uploaded campaign screenshot and both uploaded videos, plus a styled retail blueprint visual.
- Add Visual Deck / Video Campaign controls, native play controls, and a folder-style lightbox for image inspection.
- Preserve the existing paper texture, shared navigation, page title, and responsive behavior.

## Technical details
- Keep all interaction local to the Projects page with React state and accessible tabs/dialog controls.
- Store uploaded media through the project asset service and reference their generated asset pointers.
- Add only project-specific semantic styles to the existing design system.
- Validate the page at desktop and mobile widths, test project switching and lightbox behavior, and confirm the latest build is clean.
