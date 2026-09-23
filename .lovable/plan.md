# Multi-page portfolio routing

## What will change
- Keep `/` as the two-stage entrance: the full-screen folder appears first, then slides away to reveal the pixel-art desktop.
- Replace every desktop hash link with a real page link:
  - `/experience`
  - `/projects`
  - `/memos`
  - `/about`
  - `/contact`
- Remove the long scrolling content from the desktop page.
- Add the same fixed dossier header to all five section pages, with direct navigation and a **[ RETURN TO DESK ↑ ]** link back to the pixel desktop.

## Visual consistency
- Apply one shared crinkled paper treatment to the document body, folder entrance, desktop, section pages, and fallback screens.
- Remove alternate solid section backgrounds and the dark contact footer.
- Preserve the supplied pixel-art graphics, floating motion, folder treatment, typography, cards, and button styling.

## Dedicated pages
- **Experience:** TransUnion, Kindworks AI, and mCaffeine narrative role cards.
- **Projects:** Durex, HYPHEN, and TelcoX case-study cards.
- **Substack Memos:** introductory copy, three linked memo cards, and inter-office subscribe form.
- **Personnel File:** conversational letter and pixel portrait.
- **Contact:** email, LinkedIn, Substack, and prominent resume PDF download actions.

## Navigation and page behavior
- Use client-side page links so navigation feels immediate and browser history works normally.
- Preserve a URL state on `/` after the folder is opened, allowing **Return to Desk** to show the desktop directly instead of replaying the folder.
- Keep the folder entrance as the default for a fresh visit to `/`.
- Give every page unique title, description, and sharing metadata.

## Verification
- Check the folder-to-desktop transition.
- Open every icon and confirm it reaches the correct dedicated page.
- Confirm header navigation and **Return to Desk** work on desktop and mobile.
- Confirm the paper texture remains visible on every page and the resume downloads correctly.
