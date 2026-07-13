# CLAUDE.md

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Project Overview
 
**Enclosure Answers** is a customer-facing lookup/support tool for electrical
enclosure products (e.g. IP-rated cable glands, dust-tight enclosures, flanged
busbar trunking). Users search or browse by category, land on an answer page,
and can escalate to a human expert, FAQ, or contact form if unresolved.
 
Scaffolded from a wireframe (`Enclosure_Answers_Wireframes.html`, a static
Claude-Design export) — no prior codebase. Use it for layout, copy tone, and
screen inventory only; it's a minified static export, not usable as source.
 
## Tech Stack
 
- **Astro** — routing, static/SSR pages
- **React** — interactive islands only (`@astrojs/react`)
- **TypeScript** — strict mode
- Commands: confirm against `package.json` once initialized (likely `npm run dev/build/preview`)
Prefer plain `.astro` for static/content-heavy pages (About, FAQ, Contact).
Use React only where real interactivity is needed (search-as-you-type,
filtering, confirm/submit flows) — every `.tsx` island ships JS to the
client, so keep them small and scoped.
 
## Screens & Routes (from wireframe)
 
| Wireframe frame | Route | Purpose |
|---|---|---|
| `home-1440` / `home-390` | `/` | Landing page, primary search bar, desktop (1440) + mobile (390) |
| `search-1440` | `/search` | Search results |
| `category-1440` | `/category/[slug]` | Browse by enclosure category |
| `answer-1440` | `/answer/[slug]` | Resolved answer detail page |
| `faq-1440` | `/faq` | FAQ |
| `experts-1440` | `/experts` | Talk to a human expert |
| `contact-1440` | `/contact` | Contact form |
| `confirm-1440` | — (modal/post-submit state) | Confirmation after submission |
| `about-1440` | `/about` | About the product/service |
| `style-tile` | — (design reference, not a route) | Design tokens reference |
 
## Design Tokens (from wireframe)
 
- **Typeface:** Archivo
- **Background:** `#E8EBE7` · **Accent:** `#2F6D04` · **Border:** `#C6CCC4` · **Muted text:** `#8A928A`
- Card-based layout, `48–72px` padding at desktop scale, common grid `1fr` + fixed sidebar (`380–420px`)
- Breakpoints: **1440** (desktop), **390** (mobile)
Set up as Tailwind theme values / CSS custom properties early rather than hardcoding hex values in components.
 
## Project Structure
 
```
src/
  pages/            # Astro file-based routing — maps to route table above
  components/       # Shared .astro components (static)
  islands/          # React components needing client interactivity
  layouts/          # Base page layout(s), header/footer
  content/          # Astro content collections (answers, categories, FAQ)
  styles/           # Design tokens, global CSS
public/
```
 
## Conventions
 
- TypeScript strict mode; avoid `any`.
- Co-locate component styles unless using shared design tokens.
- Keep React islands presentational; fetch/query logic in Astro frontmatter or `lib/`.
- Copy tone: direct, plain-language, question-first (e.g. "Ask about
  enclosures…") — avoid jargon in user-facing copy despite the technical subject matter.
## Content Source: Q&A / Answer Content
 
**Decision:** Astro Content Collection (markdown/JSON under `src/content/`, Zod schema) — not hardcoded, not a CMS yet.
 
**Rationale:** Content ownership (dev vs. non-technical team) is undecided; this keeps pages decoupled from the content source so either path stays open later, including swapping to a CMS via Astro's Content Layer API without touching consuming code.
 
Current content is placeholder — keep the *shape* of entries realistic so the schema doesn't need rework later.
 
```
src/content/
  answers/
    config.ts       # Zod schema: question, slug, answer, category, tags, relatedAnswers
    cable-gland-ip66.md
    dust-tight-enclosures.md
  categories/
    config.ts
    ...
```
 
If cross-linking (related products/categories/answers) will be heavy at scale, design that relational structure into the schema now — costlier to retrofit than the CMS-vs-markdown choice.
 
## Search Implementation
 
**Decision:** Client-side search via **Pagefind**, indexing the static build output.
 
**Rationale:** Follows from the content decision — Content Collections resolve to static HTML at build time, so Pagefind indexes it automatically with no backend and no dependency on where content came from.
 
Covers `search-1440`. A Fuse.js-powered island can be layered on later for home-page instant type-ahead if wanted.
 
Server-side search only becomes necessary if content starts updating live without a rebuild — not building for that preemptively.
 
## Experts Contact Flow
 
**Decision:** No authentication or access gating — open to all visitors.
 
Still open (not blocking): whether expert contact details show directly on the page vs. only via submission form, and whether spam/abuse protection (CAPTCHA, rate limiting) is added. Revisit if abuse becomes a problem.
 
## Open Questions
 
- Who maintains Q&A content long-term (dev vs. non-technical team) — determines whether we stay with markdown/JSON or introduce a CMS behind the same schema.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

