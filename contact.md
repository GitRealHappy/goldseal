---
layout: page
title: Contact
permalink: /contact/
description: Get in touch with Gold Seal Mechanical for quotes and service.
---

## Contact Gold Seal Mechanical

We're here to help with your plumbing, heating, cooling, and gas needs.

### Phone

- **Office:** [{{ site.company.phone }}](tel:{{ site.company.phone | remove: '(' | remove: ')' | remove: '-' | remove: ' ' }})
- **Emergency (24/7):** [{{ site.company.emergency_phone }}](tel:{{ site.company.emergency_phone | remove: '(' | remove: ')' | remove: '-' | remove: ' ' }})

### Email

[{{ site.company.email }}](mailto:{{ site.company.email }})

### Address

{{ site.company.address }}

### Service Areas

{% for area in site.company.service_areas %}
- {{ area }}
{% endfor %}

---

*We'll respond to inquiries as quickly as possible. For urgent issues, please call our emergency line.*
