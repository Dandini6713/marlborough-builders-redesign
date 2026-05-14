# ART BIBLE — Marlborough Builders

Source of truth for the visual language of marlboroughbuilders.com, extracted
from the rendered hero in `app/HeroV2.tsx` and `app/globals.css`. Every
subsequent section must inherit from this document.

---

## 1. Palette

All colours below are pulled directly from `app/globals.css` (`:root` and the
`.hero-v2*` rules).

### Brand tokens (`:root`)

| Token | Value | Role |
|---|---|---|
| `--background` | `#f3efe7` | Page-level warm cream. The "warm light" backdrop used by every section that isn't a dark cinematic block. |
| `--foreground` | `#171717` | Primary body ink on cream backgrounds. |
| `--muted` | `#5f5c58` | Secondary text on cream. Sub-headings, meta. |
| `--surface` | `#ffffff` | Cards only, used sparingly. Never as a section background. |
| `--surface-dark` | `#1f2722` | Deep moss-green-black. The "architectural dark" used for inverted sections. |
| `--surface-dark-2` | `#2a342d` | Slightly lifted moss-green-black. Hover states on dark surfaces, dark-on-dark layering. |
| `--accent` | `#2f3b34` | The forest-green brand accent. Used for primary buttons, dividing rules, focused borders. Restrained — never a fill across a whole section. |
| `--line` | `rgba(23, 23, 23, 0.12)` | Hairline rules on cream. |
| `--line-light` | `rgba(255, 255, 255, 0.14)` | Hairline rules on dark. |

### Hero / dark-section tokens

Defined as channel-only triplets so they compose with `rgba()` for opacity work.

| Token | Value (RGB) | Equivalent hex | Role |
|---|---|---|---|
| `--hero-ink` | `12, 14, 13` | `#0c0e0d` | The near-black plate behind the hero video. Use as the base colour for any "lights-down" section. |
| `--hero-cream` | `245, 240, 230` | `#f5f0ea` | The warm plaster cream used for all type, borders and accents on dark surfaces. Slightly warmer than `--background`. |

### Operational opacities (built from `--hero-cream`)

These are the **only** legitimate opacities for cream-on-dark — do not invent new ones.

| Use | Value |
|---|---|
| Primary type on dark | `rgba(245, 240, 230, 0.92)` |
| Body type / tagline on dark | `rgba(245, 240, 230, 0.88)` |
| Quiet meta labels | `rgba(245, 240, 230, 0.60)` |
| CTA / button border (resting) | `rgba(245, 240, 230, 0.45)` |
| CTA / button border (alt) | `rgba(245, 240, 230, 0.50)` |
| Nav button border (resting) | `rgba(245, 240, 230, 0.30)` |
| Nav button border (active/strong) | `rgba(245, 240, 230, 0.60)` |
| Button hover fill | `rgba(245, 240, 230, 0.10–0.12)` |
| Hover border (strong) | `rgba(245, 240, 230, 0.90)` |

### Vignette / overlay

| Use | Value |
|---|---|
| Left-side darken | `linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0) 55%)` |
| Top/bottom softening | `linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.4) 100%)` |

### Brass / amber accent

The wall-sconce light in the hero plate is **photographed warmth, not a
CSS colour**. Do not introduce a literal amber/brass swatch. If an
accent is needed on dark, use cream at full opacity, not a separate
hue. The brand keeps to two tonal families: warm cream and moss-green-black.

---

## 2. Typography

### Loaded fonts (via `<link>` in `app/layout.tsx`, never `next/font/google`)

- **Cormorant Garamond** — weights 300, 400; italic 300, 400. Variable: no.
- **DM Sans** — weights 400, 500, 600, 700.

### CSS variables

```
--font-heading: "Cormorant Garamond", Georgia, serif;
--font-body:    "DM Sans", Arial, Helvetica, sans-serif;
```

### Hero title

```
font-family:     var(--font-heading)
font-weight:     300
font-size:       clamp(2rem, 9vw, 8rem)
line-height:     0.95
letter-spacing:  0.06em
text-transform:  uppercase
color:           rgba(245, 240, 230, 0.92)
```

Mobile (<768px): `clamp(2rem, 11vw, 3.6rem)`, letter-spacing `0.03em`.

### Tagline (italic serif)

```
font-family:     var(--font-heading)
font-style:      italic
font-weight:     400
font-size:       clamp(1.1rem, 1.9vw, 1.65rem)
line-height:     1.25
letter-spacing:  0
color:           rgba(245, 240, 230, 0.88)
```

Italic is reserved for short editorial fragments (pull-quotes, taglines, captions).
Never set body paragraphs in italic.

### Metadata label (Swiss uppercase)

```
font-family:     var(--font-body)
font-size:       0.7rem      (mobile: 0.65rem)
font-weight:     500
text-transform:  uppercase
letter-spacing:  0.18em
line-height:     1.4
color:           rgba(245, 240, 230, 0.60)
```

This is the **one** uppercase pattern allowed. Use for: corner meta in
heroes/sections, eyebrow kickers above headings, button labels.

### CTA / button label

```
font-family:     var(--font-body)
font-size:       0.72rem
font-weight:     500
text-transform:  uppercase
letter-spacing:  0.18em
```

### Headings on cream sections

`h1, h2, h3` already inherit `var(--font-heading)` (Cormorant Garamond). Keep
weight at 300 for display sizes, 400 for sub-headings. Never bold a heading.

---

## 3. Spacing

### Container

```
.container { width: min(calc(100% - 32px), var(--max-width)); margin: 0 auto; }
--max-width: 1220px;
```

Hero specifically **does not** use `.container` — it is full-bleed.

### Hero padding (the canonical pattern for full-bleed sections)

```
padding-top:    clamp(6rem, 11vh, 8.5rem)    /* clears nav */
padding-x:      clamp(1.5rem, 5vw, 4.5rem)
padding-bottom: clamp(7rem, 14vh, 10rem)
```

For full-bleed dark sections that follow: reuse the same x-padding range
(`clamp(1.5rem, 5vw, 4.5rem)`) so left/right gutters match.

### Absolute-position anchors used in the hero

| Anchor | Value |
|---|---|
| Top metadata | `top: calc(var(--header-h, 85px) + clamp(1rem, 3vh, 2.5rem))` |
| Bottom row | `bottom: calc(var(--header-h, 85px) + clamp(2rem, 5vh, 4rem))` |

The `var(--header-h)` offset only applies inside `.hero-v2` (which extends
behind the sticky nav by negative margin). For sections that do not run
behind the nav, drop the `var(--header-h)` term and use the `clamp(...)` alone.

### Section padding (used everywhere else in the site)

`.section { padding: 80px 0 }` is the legacy minimum. For the rebuild, prefer
`padding: clamp(5rem, 10vw, 8rem) 0` so sections breathe with viewport.

### Vertical rhythm inside content

- Title → tagline gap: `clamp(0.5rem, 1.5vh, 1.25rem)`
- Centre block internal gap: `clamp(1rem, 2.5vh, 1.75rem)`
- Meta stack line gap: `0.35rem`

### Asymmetry rule

The tagline is offset right of the title by `padding-left: clamp(0rem, 55vw, 40rem)`
on desktop (`clamp(0rem, 40vw, 18rem)` <1024px). Every section should have
one **deliberate asymmetric move** — never two columns of equal weight.

---

## 4. Layout principles

The hero is editorial, not templated, because of these moves:

1. **Full-bleed plate** — video/image runs corner to corner; nav floats over it.
2. **Four-corner metadata** — top-left, top-right, bottom-left, bottom-right.
   The viewport reads like a magazine spread with marginalia.
3. **Asymmetric headline / tagline** — headline anchors left, tagline pushed
   right of centre so the eye travels diagonally across the negative space.
4. **No central column** — nothing important is centred. Centring is the
   tell of a template.
5. **CTA anchored bottom-right** — single primary action, not a row of
   competing buttons.
6. **Empty quadrants are intentional** — the lower-left and upper-right are
   sparse on purpose. Resist the urge to fill them.

Apply these to every section: pick a layout move, commit to it, leave space.

---

## 5. Image treatment

- **Full-bleed**. Always. No cropped-into-a-card hero imagery.
- **Cinematic light** — single dominant source (a window, a sconce, a doorway).
  Avoid evenly lit "studio" photography.
- **Dark, warm, narrative** — moody plates that look like film stills, not
  estate-agent product shots.
- **No filters, no LUTs, no colour grading** beyond what's in the source. The
  source must be good. If a photo needs a filter, replace the photo.
- **Subtle gradient overlay only** — `rgba(0,0,0,0.35–0.45)` at most, only
  where text legibility needs help. Never flatten the image with a uniform
  black wash.
- **No stock imagery.** Site photography only.
- **Video** — looping muted MP4 for moments that benefit from motion (the hero).
  Always provide a static poster image for fallback.

---

## 6. Motion

Currently the hero is **deliberately quiet** — no entrance keyframes, no
text-reveal cascade. The motion is the looping video plate and CTA hover.
That restraint is part of the brand.

If/when reveals are added, the rules are:

- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` (out-quint) for the editorial
  feel. Never `ease-in-out` symmetric.
- **Durations**: `0.8s–1.2s`. Longer than a typical UI animation.
- **Stagger**: `0.05s–0.15s` between siblings; `0.3s–1s` between distinct
  groups.
- **Transform vocabulary**: opacity 0→1 paired with `translateY(12–24px)`.
  Never scale-up bounces, never spring overshoots.
- **Existing utility**: `app/ScrollReveal.tsx` already applies staggered
  reveals to a fixed list of selectors. Add new selectors to that list
  rather than inventing parallel systems.

### Always

- Looping background video uses `preload="metadata"`, `muted`, `playsInline`,
  `loop`, `autoPlay`. Poster image always provided.
- `prefers-reduced-motion: reduce` pauses the hero video and disables any
  scroll reveals. Implemented in `HeroV2.tsx`.

### Never

- Bouncy springs.
- Parallax that fights scroll direction.
- Decorative loops on text (no rotating words, no shimmering gradients).
- Animations longer than 1.5s on any single element.

---

## 7. CTA / pill button

The hero CTA is the canonical primary action on dark surfaces.

```
display:         inline-flex
align-items:     center
gap:             0.85rem
padding:         0.95rem 1.6rem
border-radius:   999px               /* full pill */
border:          1px solid rgba(245, 240, 230, 0.45)
background:      transparent
color:           rgba(245, 240, 230, 0.92)
font:            DM Sans 0.72rem / 500 / uppercase / letter-spacing 0.18em
transition:      background 0.25s ease, border-color 0.25s ease, transform 0.25s ease
```

Hover:

```
background:      rgba(245, 240, 230, 0.12)
border-color:    rgba(245, 240, 230, 0.90)
.arrow { transform: translateX(4px); }
```

Anatomy: `Label  →` with an inline arrow span that nudges right on hover.

**On cream surfaces**, the equivalent primary action is a pill with
`background: var(--accent)` (`#2f3b34`), white text, same padding/typography.
Use sparingly — one primary CTA per section.

---

## 8. Navigation

Defined in `app/SiteHeader.tsx` and `app/globals.css` (`.site-header`,
`.site-header.header-transparent`).

### Resting (solid) state

```
position:           sticky
top:                0
min-height:         84px
background:         rgba(243, 239, 231, 0.92)   /* cream + blur */
backdrop-filter:    blur(12px)
border-bottom:      1px solid var(--line)
box-shadow:         0 1px 8px rgba(0, 0, 0, 0.04)
```

### Transparent state (homepage hero only, `scrollY ≤ 80`)

```
background:         transparent
border-bottom:      transparent
backdrop-filter:    none
box-shadow:         none

text colour:        #f5f0ea
brand img filter:   invert(1) brightness(1.1)
button-secondary:   1px solid rgba(245, 240, 234, 0.30), transparent fill
button-primary:     1px solid rgba(245, 240, 234, 0.60), transparent fill, cream text
.brand-name:        font-weight 400 (down from 700)
```

Transition between states: `0.4s ease` on background, color, border-color,
filter, backdrop-filter, box-shadow.

**Rule**: only the homepage uses the transparent variant, because it's the
only page that opens on a dark plate. Any new page that opens on a dark
section must opt in to the transparent header (extend the `isHome` logic).

---

## 9. Mobile (<768px)

The hero is the reference for what mobile editorial means here:

| Property | Desktop | Mobile |
|---|---|---|
| Hero height | `100vh + var(--header-h)` | `90vh`, `min-height: 560px` |
| Title size | `clamp(2rem, 9vw, 8rem)` | `clamp(2rem, 11vw, 3.6rem)` |
| Title letter-spacing | `0.06em` | `0.03em` |
| Tagline indent | `clamp(0, 55vw, 40rem)` | `0` (stacks under title) |
| Top-right meta | shown | hidden |
| Bottom-left meta | shown | hidden |
| CTA | inline | full-width, centred |
| Content padding | `6/5/7rem` clamps | `5rem / 1.25rem / 2rem` |

Principle: shed the marginalia, keep the atmosphere. Do not collapse to a
generic centred column with a stack of identical cards.

---

## 10. What future sections must feel like

Each new block on the page should pass this taste test:

- **Cinematic, not corporate.** Could it open a high-end magazine feature?
- **Editorial, not templated.** Is there a piece of asymmetry or marginalia
  that signals editorial care?
- **Quiet, not loud.** Are CTAs restrained? Is type tracked, not bold?
- **Restrained, not cluttered.** Is there at least 25% intentional negative
  space?
- **Architectural, not decorative.** Are dividers, rules and grids doing the
  visual work — not gradients, icons or ornament?
- **Hero-worthy.** Could this section, isolated, function as a landing
  panel? If not, push it further.

---

## 11. What must be avoided

Hard "no" list — enforce before merging any new section:

- 3-up service card grids with icon + heading + paragraph.
- Icon rows above text. (We don't use Lucide/Heroicons as decoration.)
- Drop shadows on cards. Use hairline borders or section contrast instead.
- Centre-aligned everything. Centring is reserved for one specific moment per page.
- Pure white backgrounds. Lead with `--background` (`#f3efe7`) or
  `--surface-dark` / `--hero-ink`. White only inside `--surface` cards.
- Bold sans-serif headlines. Headings are Cormorant Garamond 300/400.
- Loud filled CTAs (e.g. accent-green block with white text everywhere).
  One filled primary per section, max.
- Standard "icon + heading + paragraph" content blocks.
- Stock photography. If real photography isn't available, lead with type.
- Decorative gradients, blurred orbs, mesh backgrounds, dotted patterns.
- Generic estate-agent / trades-business layouts. The benchmark is
  *Cereal Magazine*, not *Checkatrade*.

---

## 12. Section pacing

The page should feel like turning pages in a print magazine.

- **Alternate light and dark** — dark cinematic hero → warm cream proof
  section → dark feature → warm cream → dark CTA. Don't run two
  same-temperature sections back to back without a deliberate reason.
- **Vertical padding**: `clamp(5rem, 10vw, 8rem)` top and bottom on every
  major section.
- **Vary density**: a sparse hero followed by a dense type-led section is good.
  Two sparse sections in a row is a void.
- **One idea per section**. If a section has two ideas, split it.
- **Use full-bleed sparingly**. Roughly 1-in-3 sections should be full-bleed;
  the rest should sit inside `.container`. Full-bleed everywhere = no rhythm.

---

## 13. Maintaining hero-level quality

For every new section, before marking it done:

1. **Type confidence check** — is the headline at Cormorant Garamond 300
   in a real display size (`clamp` capped at ≥ 3rem on desktop)?
2. **Imagery check** — is it cinematic and considered? Is there a single
   dominant light source, or interesting composition?
3. **Asymmetry check** — is there one deliberate off-axis move?
4. **Negative space check** — could the section lose 20% of its content
   and look stronger?
5. **Palette discipline check** — is every colour in this document, or have
   I introduced something new?
6. **Brand-world check** — does it feel like the same person designed it as
   the hero?

If any answer is "no", redesign before moving on. The standing question is
literally: **"Does this section deserve the hero?"**
