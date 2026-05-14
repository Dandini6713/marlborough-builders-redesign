# Local Web Studio - Project Rules

## Critical Technical Rules (Non-Negotiable)

1. **No `next/font/google`** — Never import fonts from `next/font/google`. Use system fonts or self-hosted fonts only. This breaks the build every time.
2. **`'use client'` directive is mandatory** — Any component using `useState`, `useEffect`, event handlers, or browser APIs must have `'use client'` at the top of the file. No exceptions. Do not rely on parent components.
3. **HTTPS remotes only** — Always use `https://github.com/...` format for Git. SSH push does not work on this network.
4. **Manual deployment only** — Deploy with `npx vercel --prod` from terminal. GitHub webhook integration is broken. Never rely on automated deploys.
5. **Never remove existing sections without being explicitly asked** — The SEND Guidance portfolio entry and any other existing content must be preserved unless specifically told to remove it. If restructuring a component, list what you are keeping before making changes.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript
- Vercel
- GitHub (HTTPS only)

## File Conventions

- `app/` directory structure (Next.js App Router)
- Components folder for reusable elements
- Keep pages lean, logic lives in components
- Tailwind utility classes throughout, no CSS modules unless specifically needed
- Each client/demo site lives in its own repo

## Design Standards

Every page, component, and layout built for Local Web Studio or any client project must feel premium and editorial. Avoid generic AI aesthetics at all costs: no default purple gradients, no predictable card layouts, no bland Inter-on-white templates.

When building UI, always apply the following installed design skills:

- **taste-skill** — Use this as the primary design voice. Premium layout, strong typography, intentional spacing, anti-slop motion. Lean towards editorial restraint, not flashy effects.
- **frontend-design** (Anthropic) — Use this for the creative direction framework. Before writing any code, think through purpose, tone, constraints, and what makes this interface distinct.
- **interface-design** (Dammyjay93) — Use this for design consistency across sessions. Load any existing `.interface-design/system.md` in the project root. If none exists, offer to create one after the first build.
- **ui-ux-pro-max** — Use this for industry-specific design intelligence: colour palettes, typography pairings, and style recommendations matched to the client's trade or sector.
- **web-design-guidelines** (Vercel) — Use this as a quality gate. After building, audit the output against accessibility, performance, and UX rules. Check contrast, touch targets, semantic HTML, heading hierarchy, and keyboard navigation.

### Design Principles for LWS Client Sites

These sites are for local trades and service businesses. The goal is to make them look like premium brands, not generic small business templates.

- **Restraint over noise** — Fewer sections, more breathing room. Confident whitespace. No cluttered homepages.
- **Editorial typography** — Strong hierarchy. Headlines that feel architectural, not shouty. Body text that reads well.
- **Cinematic imagery** — Full-bleed hero sections. Material detail shots. No cheap stock photography.
- **Subtle motion only** — Gentle scroll reveals, soft transitions. No animation overload, no bouncing elements.
- **Premium positioning** — Copy should elevate the trade. "Architectural roofing and exterior craftsmanship" not "reliable roofing services." See the premium-website-rebuild skill for the full positioning framework.
- **Trust through presentation** — Never fabricate accreditations, reviews, or statistics. Premium perception comes from design quality, not fake badges.

## Deployment Workflow

1. Build and test locally
2. `git add .`
3. `git commit -m "descriptive message"`
4. `git push`
5. `npx vercel --prod`
6. Verify on live URL

## Writing Style (for any copy or content)

- British English throughout
- Professional but conversational, not corporate
- No em dashes or en dashes (use commas, brackets, or other punctuation)
- No buzzwords like "streamlined" or "leveraged"
- Clear, direct, natural language
