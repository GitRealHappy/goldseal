# Gold Seal Mechanical

A Jekyll-based marketing website for **Gold Seal Mechanical**, a professional plumbing, heating, air conditioning, and gas services contractor. The site is licensed, insured, and built for clarity, accessibility, and maintainability.

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
- [Deployment](#deployment)

---

## Overview

| Aspect | Details |
|--------|---------|
| **Framework** | Jekyll 4.x |
| **Theme** | Minima (base) |
| **Styling** | Custom SCSS with design tokens |
| **Markdown** | Kramdown |

The site uses a token-based design system (gold primary, slate-teal secondary), layered section backgrounds, and reusable section patterns for consistent page composition.

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
│   ├── default.html      # Base layout (header, main, footer)
│   ├── home.html         # Homepage layout (hero, services, trust, CTA)
│   ├── page.html         # Standard page (title, content, optional sidebar, CTA)
│   └── post.html         # Blog post layout
├── _sass/
│   ├── main.scss         # Entry point; imports all partials
│   ├── _variables.scss    # Design tokens (colors, spacing, breakpoints)
│   ├── _base.scss        # Typography, element defaults
│   ├── _layout.scss      # Wrapper, bands, sections, page structure
│   ├── _components.scss  # Buttons, header, footer, cards, breadcrumbs
│   ├── _services.scss    # Service cards grid
│   └── _animations.scss  # Scroll/transition animations
├── _posts/               # Blog articles (Jekyll posts)
├── assets/
│   ├── css/main.scss     # Compiled to main.css
│   ├── js/main.js
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
| **Company** | `company.name`, `company.phone`, `company.emergency_phone`, `company.email`, `company.address`, `company.service_areas` |
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
- **Colors:** Primary gold (`$color-primary`), slate-teal secondary (`$slate-teal`), semantic surfaces (`$surface-1`, `$surface-2`, `$surface-dark`)
- **Spacing:** `$space-xs` through `$space-3xl` (rem-based)
- **Shadows:** `$shadow-sm` through `$shadow-elevated`, `$shadow-card`, `$shadow-button`
- **Typography:** `$font-family-base`, `$line-height-base`, `$line-height-tight`

### Layout Patterns

- **Wrapper:** `.wrapper` — max-width container with responsive padding
- **Band:** `.band` + `.band__inner` — full-bleed section with centered content
- **Section surfaces:** `.section--surface-1`, `.section--surface-2`, `.section--surface-dark` — alternating backgrounds for visual rhythm

### SCSS Architecture

```
main.scss
├── variables    (tokens)
├── base         (typography, resets)
├── layout       (wrapper, bands, sections, page structure)
├── components   (buttons, header, footer, cards)
├── animations   (scroll, transitions)
└── services     (service cards grid)
```

---

## Layouts

| Layout | Used By | Description |
|--------|---------|-------------|
| **default** | Base for all | Header, main (with optional wrapper), footer, scripts |
| **home** | `index.md` | Hero band, intro, services section, trust block, CTA band |
| **page** | Services, Contact, Testimonials, Rebates, Articles | Title/breadcrumbs, main content, optional sidebar, optional CTA band |
| **post** | Blog posts | Article layout with meta, content, navigation |

### Page Layout Options (front matter)

- `sidebar: services` — Services list + contact widget
- `show_cta: true` — Adds CTA band at bottom
- `use_hero_band: true` — Skips default H1; hero comes from content
- `hide_breadcrumbs: true` — Hides breadcrumb nav
- `hero_image` — Full hero image path (alternative to hero-band)

---

## Reusable Includes

### Section Patterns

| Include | Purpose | Key Params |
|---------|---------|------------|
| **hero-band** | Hero section with optional image | `title`, `subtitle`, `image`, `surface` |
| **feature-split** | Two-column text + image | `heading`, `body`, `image`, `surface`, `reverse` |
| **testimonial-strip** | Testimonial block | `heading`, `quote`, `author`, `surface` |
| **cta-band** | Dark CTA with buttons | `title`, `text`, `primary_label`, `secondary_label` |
| **section-open** / **section-close** | Wrap content in a surface section | `surface` (e.g. `surface-1`) |

### Homepage-Specific

| Include | Purpose |
|---------|---------|
| **services-section** | Services heading + services-grid |
| **services-grid** | Grid of service cards (Heat Pumps, Furnaces, etc.) |
| **trust-block** | “Why Choose Gold Seal?” with image and CTA |

---

## Pages & Content

| Page | Path | Layout | Notes |
|------|------|--------|------|
| Home | `/` | home | Hero, intro, services, trust, CTA |
| Services | `/services/` | page | Hero band, service list, feature-split, sidebar |
| Contact | `/contact/` | page | Hero band, contact details, CTA |
| Testimonials | `/testimonials/` | page | Hero band, testimonials, feature-split, CTA |
| Rebates | `/rebates/` | page | Standard content, CTA |
| Articles | `/articles/` | page | Paginated blog index |

Content is written in Markdown with Liquid. Use `{% include ... %}` for section patterns and `{% include section-open.html surface="surface-1" %}` … `{% include section-close.html %}` to wrap blocks.

---

## Collections

- **`_posts`** — Blog articles. Permalink: `/articles/:year/:month/:day/:title/`
- **`services`** — Output: true, permalink `/services/:name/` (no items in repo yet)
- **`testimonials`** — Output: false (for future use)

---

## Assets

- **CSS:** `assets/css/main.scss` → compiled to `main.css`
- **JS:** `assets/js/main.js` (mobile menu, etc.)
- **Images:** `assets/images/` — logo, placeholders, hero backgrounds

### Hero images to produce (for pages with hero-band)

| Page | Filename | Suggested image |
|------|----------|------------------|
| **Services** | `hero-services.png` | Technician at work (HVAC, plumbing, or gas)—ductwork, furnace room, or service van—conveying professional mechanical work. Wide format, works well with dark overlay. |
| **Testimonials** | `hero-testimonials.png` | Satisfied homeowner, handshake, or completed project. Warm, trustworthy tone. |
| **Contact** | `img3.png` (existing) | Office/storefront, service van, or team—welcoming and easy to reach. |

---

## Deployment

1. Set `url` in `_config.yml` to the production domain.
2. Run `bundle exec jekyll build`.
3. Deploy the `_site/` directory to any static host (GitHub Pages, Netlify, Vercel, etc.).

For GitHub Pages, configure the repo to build from the `goldseal` directory if the project lives in a subfolder.

---

## License

Proprietary — Gold Seal Mechanical.
