# CLAUDE.md — AI Assistant Guide for mediakit-website

## Project Overview

This is a static, single-page marketing website for a business transformation consultancy. It features a client-side chatbot widget built with vanilla JavaScript. There is no build process, no package manager, and no external API dependencies.

---

## Repository Structure

```
mediakit-website/
├── index.html              # Main landing page (single HTML file)
├── chatbot-widget.js       # Standalone embeddable chatbot (for third-party embedding)
├── css/
│   └── style.css           # All styles, design tokens, animations
└── js/
    ├── chatbot.js          # Chat UI logic and keyword-matching engine
    └── knowledge-base.js   # Chatbot knowledge entries and responses
```

**Key fact:** There is no `package.json`, no `node_modules`, no build step, and no transpilation. All files are served directly as-is.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Plain HTML5 |
| Styling | Vanilla CSS with CSS custom properties |
| Logic | Vanilla JavaScript (ES6+, IIFE module pattern) |
| Fonts | Google Fonts (Inter, loaded via CDN) |
| Build | None — static files served directly |
| Tests | None |
| Linting | None |
| CI/CD | None configured |
| Deployment | Static site hosting (likely GitHub Pages) |

---

## Development Workflow

### Local Development

Since there is no build step, serve the files with any static HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (no install needed)
npx http-server

# Then open http://localhost:8000 in a browser
```

### Making Changes

1. Edit files directly — no compilation or hot-reload setup exists.
2. Refresh the browser to see changes.
3. Test the chatbot by opening the chat widget and sending messages.
4. Verify responsive layout at ≤768px viewport width.

### Git Workflow

- Active development branch: `claude/add-claude-documentation-025LG`
- Main branch: `master`
- Commits are small and descriptive (see git log for style examples)
- Push with: `git push -u origin <branch-name>`

---

## File Responsibilities

### `index.html`

The entire page structure. Sections in order:
1. **Navigation** — brand logo + nav links
2. **Hero** — headline, subtitle, CTA button
3. **About** — three value proposition cards (`.grid-3`)
4. **Services** — four service cards (`.grid-2`)
5. **Contact/CTA** — final call to action
6. **Chat Widget** — toggle button `#chat-toggle` + modal `#chat-widget`

The chatbot scripts (`knowledge-base.js`, `chatbot.js`) are loaded at the bottom of `<body>` in that order. `knowledge-base.js` must come first as `chatbot.js` depends on `KB` being defined.

### `css/style.css`

All CSS lives here — no separate component files. Organized as:
- CSS custom properties (design tokens) at `:root`
- Reset/base styles
- Layout utilities (`.container`, `.grid-2`, `.grid-3`, `.section`)
- Component styles (nav, hero, cards, footer)
- Chat widget styles (`.chat-widget`, `.chat-window`, `.chat-message`, etc.)
- Animations (`@keyframes`: `chatSlideUp`, `msgFade`, `typingBounce`)
- Media queries (768px breakpoint)

### `js/knowledge-base.js`

Exports a global constant `KB` — an array of knowledge entry objects:

```js
{
  keywords: ['agile', 'scrum', 'sprint'],   // used for matching
  topic: 'Scrum',
  responses: ['Response text 1', 'Response text 2']  // one chosen at random
}
```

Topics: `AI Usage`, `Scrum`, `SAFe`, `Transformation`, `Greeting/General`.
Also exports `FALLBACK_RESPONSES` — 3 generic responses used when no match is found.

### `js/chatbot.js`

Implements the chat widget as an IIFE module assigned to `window.chatWidget`:

```js
const chatWidget = (() => {
  // private state: elements, isOpen, hasGreeted
  // public API returned: { toggle, open, close, sendSuggestion }
})();
```

Key behaviors:
- Auto-greeting fires 2 seconds after page load
- Typing indicator shows for 600–1400ms before bot responds
- `findResponse(input)` — scores knowledge base entries via keyword matching, returns best match or fallback
- Markdown-like formatting: `**bold**`, `*italic*`, `- list items`

### `chatbot-widget.js`

A self-contained, embeddable version of the entire chatbot (widget + knowledge base bundled together). It uses `window.__btChatbotLoaded` as a guard against double-initialization. This file is not loaded by `index.html` — it is intended for embedding on external sites via a `<script>` tag. It has an extended knowledge base (~25 KB) compared to the split version.

---

## Design System

### CSS Custom Properties

```css
--primary: #1a56db        /* Blue — buttons, links, accents */
--primary-dark: #1242b0   /* Hover states */
--primary-light: #e8effc  /* Backgrounds, bot message bubbles */
--text: #1f2937           /* Primary body text */
--text-light: #6b7280     /* Secondary/muted text */
--bg: #ffffff             /* Page background */
--bg-alt: #f9fafb         /* Alternating section background */
--border: #e5e7eb         /* Dividers, card borders */
--radius: 12px            /* Standard border radius */
```

### Typography

- Font: **Inter** (Google Fonts, weights 300–700)
- Use semantic HTML elements (`h1`–`h4`, `p`, `ul`) — no utility class typography system

### Layout Classes

- `.container` — max-width centered wrapper
- `.section` — vertical padding for page sections
- `.section-alt` — section with `--bg-alt` background
- `.grid-2` — two-column CSS Grid
- `.grid-3` — three-column CSS Grid
- Both grids collapse to single column at ≤768px

### CSS Naming Convention

Kebab-case, BEM-inspired (but informal):
- Block: `.chat-widget`, `.service-card`, `.nav`
- Element: `.chat-message`, `.chat-input`, `.nav-links`
- Modifier: `.user` / `.bot` on `.chat-message`, `.open` on `.chat-window`

---

## Chatbot Architecture

### Keyword Matching Algorithm (`findResponse`)

1. Normalize input: lowercase, strip punctuation
2. Split into individual words
3. For each knowledge base entry, compute a score:
   - Full phrase match in keywords → `phrase_word_count × 3` points
   - Single keyword word match → 2 points
   - Partial word match (contains) → 1 point
4. Select the entry with the highest score (minimum threshold: 2)
5. Return a random response from that entry's `responses` array
6. If score < 2, return a random `FALLBACK_RESPONSE`

### Adding New Knowledge Entries

Add objects to the `KB` array in `js/knowledge-base.js`:

```js
{
  keywords: ['keyword1', 'multi word phrase', 'keyword2'],
  topic: 'YourTopic',
  responses: [
    'First possible response text.',
    'Alternate response for variety.'
  ]
}
```

- Include 2–4 response variants to avoid repetition
- Keywords should cover synonyms and likely phrasings
- Multi-word phrases score higher than individual words

---

## Conventions to Follow

1. **No frameworks, no dependencies** — keep it vanilla HTML/CSS/JS.
2. **No build step** — do not introduce bundlers, TypeScript, or preprocessors without explicit request.
3. **Edit in place** — do not create new files unless strictly necessary. Extend existing files.
4. **CSS variables for all colors** — never hardcode hex values in new CSS rules; use `var(--token-name)`.
5. **IIFE pattern for JS modules** — maintain the existing module encapsulation style.
6. **`knowledge-base.js` loads before `chatbot.js`** — preserve this script load order in `index.html`.
7. **`chatbot-widget.js` is independent** — changes to the split `js/` files are not automatically reflected there; sync manually if needed.
8. **No external API calls** — the chatbot is fully offline/self-contained.
9. **Responsive at 768px** — test any layout changes at mobile viewport width.
10. **Descriptive commit messages** — follow the short imperative style used in existing commits.

---

## Known Architecture Notes

- `chatbot-widget.js` is a diverged copy of the chatbot and knowledge base. It has a larger knowledge base than the split files. Changes to `js/knowledge-base.js` or `js/chatbot.js` should be manually synchronized to `chatbot-widget.js` if the embeddable version needs updating.
- The CNAME file was deleted from the repo (see git history), suggesting GitHub Pages deployment was configured at one point.
- There is no `.gitignore` in the repository.
- No linting or formatting tooling is configured — maintain consistency with surrounding code style manually.
