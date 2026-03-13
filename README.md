# Gold Seal Mechanical

A Jekyll-based marketing website for **Gold Seal Mechanical**, a professional plumbing, heating, air conditioning, and gas services contractor. The site uses a sharp metallic, tool-chest aesthetic with gold accents, layered dark sections, and full-bleed hero bands. Built for clarity, accessibility, and maintainability.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Design System](#design-system)
- [Layouts](#layouts)
- [Reusable Includes](#reusable-includes)
- [Pages & Content](#pages--content)
- [Collections](#collections)
- [Assets](#assets)
- [JavaScript](#javascript)
- [Deployment](#deployment)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Framework** | Jekyll 4.x |
| **Theme** | Minima (base) |
| **Styling** | Custom SCSS with design tokens |
| **Markdown** | Kramdown |

The site uses a **tool-chest aesthetic**: warm grays, charcoal bands, gold accents, and subtle metallic texture (goldenwires). Hero bands and the CTA band are full-bleed across the viewport. Service cards use background images with dark overlays and cursor-follow parallax on desktop.

---

## Project Structure

```
goldseal/
├── _config.yml           # Site configuration, company info, navigation, plugins
├── _includes/            # Reusable Liquid partials
│   ├── hero-band.html
│   ├── feature-split.html
│   ├── testimonial-strip.html
│   ├── cta-band.html
│   ├── section-open.html / section-close.html
│   ├── services-section.html
│   ├── services-grid.html
│   ├── trust-block.html
│   ├── header.html
│   ├── footer.html
│   └── head.html
├── _layouts/
│   ├── default.html      # Base layout (header, main, footer); page layout not wrapped
│   ├── home.html         # Homepage layout (hero, intro, services, trust, CTA)
│   ├── page.html         # Standard page (hero/CTA full-bleed; content in wrapper)
│   └── post.html         # Blog post layout
├── _sass/
│   ├── main.scss         # Entry point; imports all partials
│   ├── _variables.scss   # Design tokens (tool-chest palette, surfaces, spacing)
│   ├── _base.scss        # Typography, element defaults
│   ├── _layout.scss      # Wrapper, bands, sections, page structure
│   ├── _components.scss  # Buttons, header, footer, cards, hero-band, CTA, band--tool-chest
│   ├── _services.scss    # Service cards grid (full-bleed, background images)
│   └── _animations.scss  # Scroll-triggered animations
├── _posts/               # Blog articles (Jekyll posts)
├── assets/
│   ├── css/main.scss     # Compiled to main.css
│   ├── js/main.js        # Parallax, scroll animations, mobile menu
│   └── images/
├── index.md              # Homepage (uses layout: home)
├── services.md
├── contact.md
├── testimonials.md
├── rebates.md
├── articles/
│   └── index.html        # Blog index with pagination
├── Gemfile
└── README.md
```

---

## Getting Started

### Prerequisites

- Ruby 3.0+
- Bundler

### Install & Run

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

### Build for Production

```bash
bundle exec jekyll build
```

Output is in `_site/`.

---

## Configuration

All site-wide settings live in `_config.yml`:

| Section | Purpose |
|---------|---------|
| **Site** | `title`, `email`, `description`, `url`, `baseurl` |
| **Company** | `company.name`, `company.phone`, `company.email`, `company.address`, `company.license`, `company.service_area_region`, `company.service_area_range`, `company.service_areas` |
| **Navigation** | `navigation` array (name, url) |
| **Services** | `services` array (name, description) |
| **Social** | `social.facebook`, `social.twitter`, etc. |
| **Blog** | `blog.paginate`, `paginate_path` |
| **Plugins** | `jekyll-feed`, `jekyll-sitemap`, `jekyll-seo-tag`, `jekyll-paginate` |
| **Collections** | `testimonials`, `services` |
| **Defaults** | Layout and permalink defaults for posts and pages |

Update `url` before deployment. Add `google_analytics` and `google_site_verification` when ready.

---

## Design System

### Tokens (`_sass/_variables.scss`)

- **Breakpoints:** `$bp-sm` (480px) through `$bp-2xl` (1440px)
- **Tool-chest palette:** `$surface-tool-light`, `$surface-tool-mid`, `$surface-tool-dark`, `$surface-tool-accent` — warm grays and charcoal
- **Semantic surfaces:** `$surface-1` (warm light), `$surface-2` (warm mid), `$surface-dark` (black), `$surface-tool-dark`, `$surface-tool-accent`
- **Colors:** Primary gold (`$color-primary`), slate-teal secondary (`$slate-teal`), `$text-on-dark`, `$text-on-dark-muted`
- **Spacing:** `$space-xs` through `$space-3xl` (rem-based)
- **Shadows:** `$shadow-sm` through `$shadow-elevated`, `$shadow-card`, `$shadow-button`
- **Typography:** `$font-family-base`, `$line-height-base`, `$line-height-tight`
- **Border radius:** Sharp metallic aesthetic — `$radius-sm/md/lg` (2px)

### Layout Patterns

- **Wrapper:** `.wrapper` — max-width container with responsive padding
- **Band:** `.band` + `.band__inner` — full-bleed section with centered content
- **Section surfaces:** `.section--surface-1`, `.section--surface-2`, `.section--surface-dark`, `.section--surface-tool-dark`, `.section--surface-tool-accent`
- **Tool-chest texture:** `.band--tool-chest` — adds goldenwires.png overlay at low opacity for metallic texture

### SCSS Architecture

```
main.scss
├── variables    (tokens, tool-chest palette)
├── base         (typography, resets)
├── layout       (wrapper, bands, sections, page structure)
├── components   (buttons, header, footer, hero-band, CTA, band--tool-chest)
├── animations   (scroll-triggered transitions)
└── services     (service cards grid, full-bleed, background images)
```

---

## Layouts

| Layout | Used By | Description |
|--------|---------|-------------|
| **default** | Base for all | Header, main (page layout content not wrapped), footer, scripts |
| **home** | `index.md` | Hero band, intro (tool-dark), services section (tool-dark), trust block (tool-accent), CTA band |
| **page** | Services, Contact, Testimonials, Rebates, The Library | Hero band (full-bleed, from front matter), wrapper content, optional sidebar, CTA band (full-bleed) |
| **post** | Blog posts | Article layout with meta, content, navigation |

### Page Layout Structure

For pages with `use_hero_band: true`:

1. **Hero band** — Rendered full-bleed at `<main>` level (outside wrapper)
2. **Wrapper** — Page content, sidebar grid, article
3. **CTA band** — Rendered full-bleed after wrapper (outside max-width)

This ensures hero and CTA span the full viewport on all screen sizes.

### Page Layout Options (front matter)

- `sidebar: services` — Services list + contact widget
- `show_cta: true` — Adds CTA band at bottom (full-bleed)
- `use_hero_band: true` — Skips default H1; hero comes from front matter; breadcrumb and page description hidden
- `hide_breadcrumbs: true` — Hides breadcrumb nav
- **Hero params** (when `use_hero_band: true`): `hero_title`, `hero_subtitle`, `hero_image`, `hero_image_alt`, `hero_surface`

---

## Reusable Includes

### Section Patterns

| Include | Purpose | Key Params |
|---------|---------|------------|
| **hero-band** | Full-bleed hero with optional image | `title`, `subtitle`, `image`, `image_alt`, `surface` |
| **feature-split** | Two-column text + image | `heading`, `body`, `image`, `surface`, `reverse` |
| **testimonial-strip** | Testimonial block | `heading`, `quote`, `author`, `surface` |
| **cta-band** | Dark CTA with goldenwires background | `title`, `text`, `primary_label`, `secondary_label` |
| **section-open** / **section-close** | Wrap content in a surface section | `surface` (e.g. `surface-1`) |

### Homepage-Specific

| Include | Purpose |
|---------|---------|
| **services-section** | Services heading + services-grid (tool-dark surface, band--tool-chest texture) |
| **services-grid** | Full-bleed grid of service cards (no gaps, no radius, background images) |
| **trust-block** | "Why Choose Gold Seal?" with image and CTA |

---

## Pages & Content

| Page | Path | Layout | Notes |
|------|------|--------|------|
| Home | `/` | home | Hero (img1.png), intro (tool-dark), services (tool-dark), trust (tool-accent), CTA |
| Services | `/services/` | page | Hero band (hero-services.png), service list, feature-split, sidebar |
| Contact | `/contact/` | page | Hero band (img3.png), contact details, CTA |
| Testimonials | `/testimonials/` | page | Hero band (hero-testimonials.png), testimonials, feature-split, CTA |
| Rebates | `/rebates/` | page | Standard content, CTA |
| The Library | `/library/` | page | Paginated blog index |

Pages with `use_hero_band: true` define hero content in front matter; no hero-band include in the markdown body.

---

## Collections

- **`_posts`** — Blog articles. Permalink: `/library/:year/:month/:day/:title/`
- **`services`** — Output: true, permalink `/services/:name/` (no items in repo yet)
- **`testimonials`** — Output: false (for future use)

---

## Assets

- **CSS:** `assets/css/main.scss` → compiled to `main.css`
- **JS:** `assets/js/main.js` (parallax, scroll animations, mobile menu)
- **Images:** `assets/images/` — logo, hero backgrounds, service card images, goldenwires.png

### Hero Images

| Page | Image | Notes |
|------|-------|-------|
| Home | `img1.png` | Hero band background |
| Services | `hero-services.png` | Hero band background |
| Testimonials | `hero-testimonials.png` | Hero band background |
| Contact | `img3.png` | Hero band background |

### Service Card Images

| Card | Image | Notes |
|------|-------|-------|
| Heat Pumps | `placeholder1.png` | Background with 50% dark overlay |
| Furnaces & Boilers | `placeholder2.png` | Background with 50% dark overlay |
| Water Heaters | `waterheater.png` | Background with 50% dark overlay |
| Mechanical Services | `mechanical.png` | Background with 50% dark overlay |

Hover: darker overlay (35%), gold text brightens; background image stays visible.

### CTA Band

- **goldenwires.png** — Repeating horizontal lines texture at 15% opacity

---

## JavaScript

- **Hero parallax** — Cursor-follow effect on hero-band text (desktop only, ≥768px)
- **Service card parallax** — Cursor-follow effect on service card content (desktop only)
- **Scroll animations** — `.animate-on-scroll` elements fade/slide in when entering viewport
- **Mobile menu** — Hamburger toggle, dark mode when active

Parallax is disabled on mobile (viewport &lt; 768px) and when `prefers-reduced-motion: reduce` is set.

---

## Deployment

1. Set `url` in `_config.yml` to the production domain.
2. Run `bundle exec jekyll build`.
3. Deploy the `_site/` directory to any static host (GitHub Pages, Netlify, Vercel, etc.).

For GitHub Pages, configure the repo to build from the `goldseal` directory if the project lives in a subfolder.

---

## License

Proprietary — Gold Seal Mechanical.
