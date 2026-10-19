# Aura Events & Consulting — Brand Portfolio Website

> **Designing Moments. Delivering Impact.**
> Official brand portfolio website for **Aura Events & Consulting**, prepared for **FutureFest Pakistan**.

A professional, fully responsive single-page website built with **HTML5 + CSS3** and a light layer of **vanilla JavaScript** (optional enhancement only — the site works without it). Ready to publish on **GitHub Pages**.

---

## 1. Live URLs (fill in after publishing)

| Item | URL |
|------|-----|
| Repository | `https://github.com/<your-username>/aura-events-website` |
| Live website (GitHub Pages) | `https://<your-username>.github.io/aura-events-website/` |

---

## 2. Project Overview

Aura Events & Consulting is a simulated full-service event management and business consultancy from Lahore, Pakistan. This single-page website introduces the startup to potential clients and was prepared as the **Deliverable 1 — Brand Portfolio Single-Page Website** of the Startup Launch Project, pitched at **FutureFest Pakistan**.

### Website sections

1. **Announcement bar + sticky navigation** — FutureFest showcase notice, mobile hamburger menu
2. **Hero** — logo, tagline, positioning statement, key stats, call-to-action buttons
3. **Trusted-by marquee** — brands we have worked with (simulated)
4. **About** — company story, values, **Vision** and **Mission** cards
5. **Services** — 6 offerings across Events (corporate, weddings, exhibitions, hybrid) and Consulting (business/strategy, brand/marketing)
6. **USP — "The Aura Difference"** — strategy-led, one-roof delivery, built for Pakistan
7. **Why Choose Us** — 6 client-facing reasons
8. **Our Work** — 4 recent project highlights with results metrics
9. **Team** — all 11 leadership/operations roles from the project brief
10. **FutureFest Pakistan** — official showcase section (stand, offer, meeting booking CTA)
11. **Testimonials** — 3 client quotes (simulated)
12. **CTA band + Contact** — phone, email, address, enquiry form, social media links
13. **Footer** — brand identity, quick links, services, contact recap

---

## 3. Brand Identity

| Element | Value |
|---------|-------|
| Company | Aura Events & Consulting |
| Tagline | *Designing Moments. Delivering Impact.* |
| Logo | `assets/logo.svg` (mark) · `assets/favicon.svg` (favicon) |
| Primary colors | Violet `#7C3AED` · Fuchsia `#C026D3` · Gold `#F59E0B` |
| Neutrals | Ink `#191036` · Body `#514B6C` · Soft background `#F8F6FD` · Dark section `#150E2E` |
| Brand gradient | `linear-gradient(115deg, #7C3AED, #C026D3 52%, #F59E0B)` |
| Headings font | Playfair Display (Google Fonts) |
| Body font | Plus Jakarta Sans (Google Fonts) |

The logo is an original SVG: a four-point spark inside a gradient orbit ring, representing the company name ("aura" — a glow around an idea).

---

## 4. Project Structure

```
aura-events-website/
├── index.html          # Single-page website (semantic HTML)
├── style.css           # Complete design system + responsive breakpoints
├── script.js           # Optional enhancements (vanilla JS, no libraries)
├── assets/
│   ├── logo.svg        # Brand logo mark
│   ├── favicon.svg     # Browser tab icon
│   └── img/            # Optimized photography (JPG, ~0.56 MB total)
│       ├── hero-gala.jpg
│       ├── work-summit.jpg
│       ├── work-wedding.jpg
│       ├── work-expo.jpg
│       └── work-hybrid.jpg
└── README.md
```

---

## 5. Run Locally

Any one of these:

- **Simplest:** double-click `index.html` to open it in your browser.
- **VS Code:** install the *Live Server* extension → right-click `index.html` → *Open with Live Server*.
- **Python:** from this folder run `python3 -m http.server 3000` and open `http://localhost:3000`.

---

## 6. Publish on GitHub Pages (step by step)

1. Sign in at [github.com](https://github.com) and click **+** → **New repository**.
2. Name it `aura-events-website`, set visibility to **Public**, do **not** initialize with a README (you already have one), and click **Create repository**.
3. Upload the contents of this folder (all files and the `assets/` folder) so that `index.html` sits at the **repository root**:
   - **Web upload:** on the repo page click **uploading an existing file**, drag all files in, then **Commit changes**. (GitHub accepts a folder drag if you drag the *contents*, not the parent folder.)
   - **Or with Git:**
     ```bash
     git init
     git add .
     git commit -m "Aura Events & Consulting brand website"
     git branch -M main
     git remote add origin https://github.com/<your-username>/aura-events-website.git
     git push -u origin main
     ```
4. In the repository, open **Settings → Pages** (left sidebar → *Code and automation → Pages*).
5. Under **Build and deployment → Source**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/ (root)**, then click **Save**.
7. Wait 1–3 minutes, then reload the Pages screen — your live URL appears at the top:
   `https://<your-username>.github.io/aura-events-website/`
8. Update the URL table at the top of this README with your actual links, then commit again.

> Tip: if styles or images appear missing after publishing, hard-refresh (Ctrl/Cmd + Shift + R). All asset paths in this project are relative, so they work both locally and on GitHub Pages.

---

## 7. Before You Submit — Update Checklist

- [ ] Replace the **social media URLs** in `index.html` (search for `auraevents.pk`) with your team's real profiles, or keep the placeholders.
- [ ] Update the **WhatsApp number** (`https://wa.me/923217654321`) and phone/email if you have real ones.
- [ ] The **contact form** is a front-end demo: it validates, then shows a success message. To receive real messages, connect it to [Formspree](https://formspree.io) (add `action="https://formspree.io/f/<id>"` and `method="POST"` to the `<form>` tag and remove the demo JS handler) or any backend you prefer.
- [ ] Confirm the **FutureFest Pakistan** dates, venue and stand number when they are announced (announcement bar + FutureFest section).
- [ ] Team names, client names, testimonials, statistics and project metrics are **simulated for this academic project** — replace with your real data as it becomes available.
- [ ] Add your **repository URL and live URL** to the table at the top of this README (required by the assignment).

---

## 8. Technical Notes

- **No frameworks, no build step** — plain HTML/CSS/JS as required by the brief; JavaScript is optional (nav toggle, scroll reveal, stat counters, active-section highlighting, back-to-top, demo form handling, auto year).
- **Responsive breakpoints:** 1080px, 1020px (hamburger), 860px, 680px — tested at 1440×900 desktop and 390×844 mobile with zero horizontal overflow.
- **Accessibility:** semantic landmarks (`header/nav/main/section/footer`), skip link, ARIA labels on icon links, `prefers-reduced-motion` support, keyboard-focus styles, alt text on all images.
- **Performance:** optimized progressive JPEGs, lazy-loaded below-the-fold images, single CSS and JS file, system-font fallbacks, no external JS libraries.
- Images were generated with AI for this academic simulation; no trademarks or personal data are used, and no confidential information is included — safe for a public repository.

---

## 9. Academic Note

This website is a **student project deliverable** (Startup Launch Project — Deliverable 1) prepared for a simulated pitch at FutureFest Pakistan. Company details, clients, metrics and testimonials are fictional and for demonstration only. A real business should have its claims, policies and legal notices reviewed by qualified advisers before publication.

© 2026 Aura Events & Consulting — educational simulation. For academic use.
