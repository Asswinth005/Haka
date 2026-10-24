# HAKA SOLUTIONS — Corporate Website Frontend

A modern, responsive corporate website for **HAKA SOLUTIONS**, built in strict compliance with the HAKA SOLUTIONS Website Development Blueprint.

## 🚀 Overview

- **Company**: HAKA SOLUTIONS
- **Tagline**: Technology · Digital Solutions · Business Growth
- **Registered Address**: Union Bank Back Side, Kattupudi Street, Pallikonda – 635809.
- **Architecture**: 100% Static Frontend (HTML5, Tailwind CSS, Vanilla JavaScript, Custom CSS).
- **No Backend / No APIs**: Fully functional client-side prototype with interactive demonstration forms.

---

## 📁 Project Directory Structure

```
d:/HaKa/
├── index.html           # Homepage (13 sections in exact blueprint order)
├── about.html           # About Us (Mission, Vision, Values, Leadership placeholders)
├── services.html        # Services landing page (6 core service areas)
├── solutions.html       # Solutions landing page (5 featured solutions)
├── portfolio.html       # Portfolio & Showcases (6 interactive industry showcases)
├── technology.html      # Technology focus areas (Data, Cloud, Automation, AI, Security)
├── careers.html         # Careers & Culture (Discipline, Teamwork, Demo Application Form)
├── contact.html         # Contact page (Official address, Demo Inquiry Form)
├── robots.txt           # Search crawler directives
├── sitemap.xml          # XML sitemap for SEO
├── assets/
│   ├── favicon.svg      # Custom SVG favicon
│   ├── logo.jpeg        # Logo asset
│   ├── icons/           # Icon assets
│   └── images/          # Image assets
├── css/
│   ├── styles.css       # Master design system, typography, components, responsive layout
│   └── home.css         # Homepage-specific visual dashboard, node animations, charts
└── js/
    └── main.js          # Sticky header, mobile drawer, scroll reveals, demo form validation
```

---

## 🎨 Design System

- **Midnight Navy**: `#07111F`
- **Dark Navy**: `#0B1628`
- **Card Background**: `#0F1E35`
- **Primary Blue**: `#2563EB`
- **Electric Blue**: `#3B82F6`
- **Cyan Accent**: `#22D3EE`
- **Light Background**: `#F5F8FC`
- **Main Text**: `#0F172A`
- **Muted Text**: `#64748B`
- **Typography**: Inter (Body) & Manrope (Headings) via Google Fonts.

---

## ⚡ How to Run Locally

Because this project is built entirely with standard HTML5, CSS3, and Vanilla JavaScript, **no build step, Node.js, or server is required**.

### Option 1: Double-click to open
Simply open any HTML file (such as [index.html](file:///d:/HaKa/index.html)) directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: VS Code Live Server
1. Open the folder `d:\HaKa` in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on [index.html](file:///d:/HaKa/index.html) and select **Open with Live Server**.
4. The site will launch at `http://127.0.0.1:5500`.

### Option 3: Python local HTTP server
Run from terminal or command prompt:
```bash
cd d:\HaKa
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## 📋 Features & Compliance

- **Exact Blueprint Order**: All 13 sections on the homepage strictly follow the specification.
- **Zero False Claims**: Case studies and leadership use clearly labeled placeholders pending verified client details.
- **Frontend Prototype Disclosure**: Contact and Career forms feature explicit alerts explaining that no data is transmitted or stored.
- **Accessibility & UX**: Semantic HTML5 elements, ARIA attributes, keyboard-navigable drawer, visible focus indicators, and `prefers-reduced-motion` compliance.
- **Responsive Across Devices**: Fully tested for 1920px desktop down to 375px mobile displays.
- **Dedicated Portfolio Ecosystem**: Features 6 interactive showcases:
  1. *Luxury Fashion E-Commerce Showcase*
  2. *TS Landscaping & Construction Site*
  3. *Healthcare Provider Clinic Network*
  4. *Grand Event & Conference Hub*
  5. *Real Estate Property Portal*
  6. *Premium Restaurant & Café Platform*
