# Implementation Plan — Portfolio v6 Audit Refinements

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `index6.html`, `style6.css`, and `i18n.js` extensions implementing all findings from the code review audit without modifying `index5.html` or `style5.css`.

**Architecture:** 
1. Build `style6.css` as a dedicated stylesheet extending the polished dark/light glass design system with styles for scroll-to-top floating button, copy-to-clipboard toast feedback, and 3-card grid responsiveness.
2. Build `index6.html` as the new clean production release integrating complete `data-i18n` coverage, absolute Open Graph metadata, 3 featured projects (including NebulaStream), and interactive UX helpers.
3. Add i18n translation keys in `i18n.js` ensuring full backward compatibility for `index.html`, `index1-5.html`, and `index6.html`.

**Tech Stack:** HTML5 Semantic, Vanilla CSS with custom properties & glassmorphism, Vanilla ES6+ JavaScript, Typed.js, FontAwesome 6, Lucide-style SVG icons.

**Spec:** User audit findings:
- Item 1: Complete i18n coverage across Achievements, Experience, and Project filters.
- Item 2: Production Open Graph & Social Card meta tags with absolute URLs.
- Item 3: 3rd Project: NebulaStream (audio/media web app) to balance the 3D tilt grid and categories.
- Item 4: Interactive UX polish: Smooth Scroll-To-Top button and One-Click Copy Email to clipboard with toast feedback.
- Safety constraint: Zero changes to `index5.html` and `style5.css`.

---

### Task 1: Update `i18n.js` with Missing Translation Keys
**Files:**
- Modify: `d:/Maliq/Other/Antigravity/Personal Portofolio/portofolio-website/i18n.js`

- [ ] Add `achieve.heading`, `achieve.sub`, `achieve.tab.all`, `achieve.tab.comp`, `achieve.tab.cyber`, `achieve.tab.cloud`, `achieve.viewcert` to `en` and `id`.
- [ ] Add `proj.heading`, `proj.sub`, `proj.tab.all`, `proj.tab.web`, `proj.tab.uiux`, `proj3.title`, `proj3.desc` to `en` and `id`.
- [ ] Ensure all existing keys for `edu1.title`, `edu1.desc`, `work1.title`, `work1.desc`, `work3.title`, `work3.desc`, `edu2.title`, `edu2.desc` are complete and verified.

---

### Task 2: Create `style6.css`
**Files:**
- Create: `d:/Maliq/Other/Antigravity/Personal Portofolio/portofolio-website/style6.css`

- [ ] Copy complete baseline from `style5.css`.
- [ ] Add styles for `.scroll-top-btn` (floating pill/circle with smooth transition, bottom right 2rem).
- [ ] Add styles for `.copy-email-btn` and `.toast-copied` notification tooltip.
- [ ] Ensure `.projects-3d-grid` cleanly accommodates 3 cards (3-column on wide screens, 2-column on mid screens, 1-column on mobile).

---

### Task 3: Generate Asset for NebulaStream & Prepare Media
**Files:**
- Create: `d:/Maliq/Other/Antigravity/Personal Portofolio/portofolio-website/content/images/nebulastream-preview.png`

- [ ] Generate high quality preview image for NebulaStream web application.

---

### Task 4: Create `index6.html`
**Files:**
- Create: `d:/Maliq/Other/Antigravity/Personal Portofolio/portofolio-website/index6.html`

- [ ] Set up absolute Open Graph and Twitter Card tags.
- [ ] Link `style6.css` and `i18n.js`.
- [ ] Include complete `data-i18n` tags on Achievements, Experience, and Projects sections.
- [ ] Add Project 003: NebulaStream with tags, live demo, and GitHub repository links.
- [ ] Add Floating Scroll-to-Top button.
- [ ] Add Copy Email to Clipboard button with toast feedback in Contact section.
- [ ] Wire up interactive JS handlers for Scroll-to-Top and Copy Email.

---

### Task 5: Verification & Quality Audit
**Files:**
- Test: Open `index6.html` in browser.

- [ ] Test language toggle between EN and ID, verifying 100% translation coverage.
- [ ] Test theme switch between dark and light modes.
- [ ] Test project category filters with 3 projects.
- [ ] Test Copy Email button and Toast notification.
- [ ] Test Scroll-To-Top button appearance and scroll behavior.
- [ ] Verify `index5.html` and `style5.css` are completely untouched.
