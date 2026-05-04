# Wanderlust Travel — Figma to Code

A marketing + booking-style travel site built with **React 19**, **Vite 7**, **React Router 7**, **Tailwind CSS v4**, and **Swiper**. Includes a mock **operations dashboard** (bookings, tours, analytics) behind a simple **client-side login** (localStorage session).

## Features

- **Home** — hero search strip, trending packages, services, galleries, testimonials.
- **About, Packages, Tour info** — reusable hero, overlapping content panels, tabbed tour detail (information, plan, map, gallery).
- **Auth** — `/login` accepts any email + password (≥ 4 characters); session persists in `localStorage` (`wanderlust_session_v1`).
- **Dashboard** — `/dashboard` and nested routes; protected until login.
- **Content** — copy and raster images are driven from `src/data/siteContent.js` using **bundled assets only** (no Unsplash or other hotlinked photos in UI components).

## Scripts

```bash
npm install    # dependencies
npm run dev    # local dev server
npm run build  # production build → dist/
npm run preview
npm run lint
```

## Project layout

| Path | Purpose |
|------|---------|
| `src/data/siteContent.js` | Tours, trending cards, gallery mosaic, testimonials, map embed, about grid |
| `src/data/mockDashboard.js` | Dashboard tables, stats, charts (mock) |
| `src/context/AuthContext.jsx` | Login / logout / session |
| `src/components/layout/` | Marketing shell (`Landing.jsx`), `DashboardLayout.jsx` |
| `src/pages/dashboard/` | Dashboard pages |

## Replacing images

Add files under `src/assets/` and import them in `siteContent.js` (or the relevant component). Vite will hash and emit them at build time.

## Map embed

`siteContent.js` → `mapEmbed.src` is a standard Google Maps embed URL (Zürich). Replace with your own embed or a maps component.

## License

Course / demo project — adapt as needed for your portfolio or product.
