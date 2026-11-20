# Seal of Grace Bible Church — Mobile Application

A modern, mobile-first web application (PWA) for **Seal of Grace Bible Church (Tarkwa, Ghana)** built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, **Shadcn UI component primitives**, **Lucide Icons**, and **React Router**.

> **Motto:** *"SHOW THEM CHRIST! GROW THEIR FAITH!!"*  
> **Annual Theme 2026:** *"Our Year of Divine Speed and Overflow"*  
> **Official Website Reference:** [https://www.sealofgracebiblechurch.com/]

---

## 📱 The Viewport Iframe Architecture (Industry Standard)

To give non-technical clients an exact, 1:1 authentic mobile app preview on desktop without needing to open Chrome DevTools (F12), this project implements **The Viewport Iframe Architecture** (the same architecture used by Figma Prototypes, Storybook Mobile Viewport, and Shopify Theme Customizers):

### Why Standard Container Frames Fail:
When an app is wrapped in a normal `<div>` container on desktop, CSS media queries (`@media (min-width: 640px)`, Tailwind's `sm:`, `md:`) still listen to the desktop window (1920px wide), which causes components to switch to desktop layouts.

### How The Viewport Iframe Architecture Solves This:
1. **Isolated Viewport Context (`DesktopDeviceFrame.tsx`)**:
   - An `<iframe>` creates an isolated browser window context with a genuine mobile width (**393px × 852px**, standard iPhone 15 Pro viewport).
   - All CSS media queries evaluate to `false`, rendering authentic mobile UI with zero desktop overrides.
   - On physical mobile devices (`< 768px`) or inside the iframe, the children render directly in full-screen mode without nesting (`window.self !== window.top` check prevents infinite recursion).
2. **Bi-Directional Route & History Synchronization (`RouteSync.tsx`)**:
   - Navigating inside the iframe updates the outer browser address bar in real time via `window.top.history.replaceState`.
   - Desktop browser **Back** and **Forward** buttons synchronize with the iframe via a `popstate` listener.
   - `localStorage` is natively shared across the same origin.
3. **Global Native App Scrollbar Hiding (`index.css`)**:
   - Native mobile apps never show scrollbars. Global CSS rules hide scrollbars across Chrome, Safari, Edge, and Firefox while keeping mouse wheel, trackpad, and touch scrolling 100% functional.

---

## 🎨 Centralized Theme & Design System (`src/index.css`)

All color variables and design tokens are centrally managed using **CSS Custom Properties** inside [src/index.css](file:///c:/Users/UXDLab/Desktop/SealOfGrace/src/index.css). Updating these values updates the theme across the entire application without touching individual components:

- `--primary`: `204 100% 29.4%` (`#005A96` Ocean Blue)
- `--secondary`: `223 100% 14.1%` (`#001448` Deep Royal Navy)
- `--tertiary`: `34 43% 58%` (`#C09867` Warm Gold/Bronze)
- `--cta` / `--destructive`: `0 100% 42.5%` (`#D90000` Crimson Red)
- `--background` & `--card`: `#FFFFFF`
- `--foreground`: `#161616`
- `--muted`: `#F7F7F8`
- `--gold-soft`: `#E5D6C3`
- `--success`: `#198754`

**Typography**:
- **Display & Headlines**: Google Fonts *Halant* (Serif)
- **Title, Body, Labels & UI**: Google Fonts *Sora* (Sans-Serif)

---

## 🗺️ Application Routes & Pages

| Route | Screen Component | Description |
|---|---|---|
| `/` | `HomeScreen.tsx` | Hero banner, live stream pill, upcoming events, 2026 theme & monthly bookmark cards, presbytery preview, gallery, and YouTube CTA. |
| `/about` | `AboutUsScreen.tsx` | Historical background (Est. 2016 at Tarkwa Methodist School, Nzemaline), 7 Core Pillars ("What We Stand For"), Mission & Vision, and contact summary. |
| `/services` | `ServicesScreen.tsx` | Core church worship services, pastoral counseling, covenant prayer meetings, sacraments, and category filters. |
| `/services/:id` | `ServiceDetailScreen.tsx` | Individual service detail page with scriptural foundation, schedule, officiating ministers, and online booking CTA. |
| `/booking` | `BookingScreen.tsx` | **Core simulated service workflow**: Multi-step wizard (1. Choose Service/Counseling -> 2. Select Date & Time Slot -> 3. Personal & Prayer Details -> 4. Review Summary -> 5. Confirmation Ticket with Booking Reference ID). |
| `/events` | `EventsScreen.tsx` | Weekly divine services, Medeama FM 92.9 radio broadcast, Covenant Prayers, and 2026 fasting spiritual calendar with interactive reminders. |
| `/ministries` | `MinistriesScreen.tsx` | Children's Ministry, Choir Ministry, Youth of Grace, Evangelism & Outreach with interactive "Get Involved" modal. |
| `/pastors` | `OurPastorsScreen.tsx` | Lead Pastor & Founder Samuel Koffie spotlight, Presbytery Team profiles, and interactive pastor biography dialogs. |
| `/sermons` | `SermonsScreen.tsx` | Searchable and filterable catalog of sermons (*Faith & Favor*, *Spiritual Warfare*, *Holy Living*, *Marriage*), in-app audio study player, and YouTube watch links. |
| `/sermons/:id` | `SermonDetailScreen.tsx` | Full sermon outline, key study points, audio scrubber, and native share functionality. |
| `/gallery` | `GalleryScreen.tsx` | Church photo memory gallery filterable by *All*, *Events*, *Choir*, *Children*, *Baptism*, with tap-to-open full-screen lightbox modal. |
| `/contact` | `ContactUsScreen.tsx` | Interactive prayer request and inquiry form with live validation and confirmation, direct call, email, and church location details. |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```
