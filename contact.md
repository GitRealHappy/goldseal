---
layout: page
title: Contact
permalink: /contact/
description: Get in touch with Gold Seal Mechanical for quotes and service.
show_cta: true
use_hero_band: true
hero_title: "Contact Gold Seal Mechanical"
hero_subtitle: "We're here to help with your plumbing, heating, cooling, and gas needs."
hero_image: "/assets/images/img3.png"
hero_image_alt: "Contact Gold Seal Mechanical"
hero_surface: "surface-dark"
---

### Phone

- **Office:** [{{ site.company.phone }}](tel:{{ site.company.phone | remove: '(' | remove: ')' | remove: '-' | remove: ' ' }})

### Email

[{{ site.company.email }}](mailto:{{ site.company.email }})

### Address

{{ site.company.address }}

### Service Areas

{{ site.company.service_area_region }} — {{ site.company.service_area_range }}

{% for area in site.company.service_areas %}
- {{ area }}
{% endfor %}

*We'll respond to inquiries as quickly as possible.*

