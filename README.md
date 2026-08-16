# Gehad Automotive

A modern luxury car dealership website for the Egyptian market — **"Where Performance Meets Luxury"**.

Built with a Node.js/Express + SQLite backend and a fresh, editorial-style frontend, the site ships with a live catalog of **71 vehicles across 28 brands**, transparent EGP pricing, and a full private-sales workflow.

## Live Demo

- **GitHub Pages (static):** https://seifmomo.github.io/el-gehad-automotive/
- **Local (full app):** `npm start` → http://localhost:5000

## Features

- **Vehicle catalog** — 71 models, 28 brands (Audi, Mercedes-Benz, BMW, Bentley, Porsche, Toyota, BYD and more), with specs, prices, and finance options in EGP
- **Search & filter** — instant search by brand/model, category filters (Sedans, SUVs, Sports)
- **Featured showcase** — rotating "Masterpiece of the Month" powered by the featured vehicle in the database
- **Private inquiries** — per-vehicle and general contact forms that land in the admin dashboard
- **Newsletter** — off-market allocation drops signup with subscriber management
- **Admin dashboard** — JWT-secured, with stats, vehicle CRUD, inquiry management, and subscriber list
- **Static-first frontend** — works on GitHub Pages out of the box via a bundled `vehicles.json` fallback when the API is unreachable

## Tech Stack

| Layer    | Technology                     |
|----------|--------------------------------|
| Frontend | Vanilla HTML/CSS/JS (no framework), Space Grotesk + Inter |
| Backend  | Node.js, Express              |
| Database | SQLite (via `sqlite3`)         |
| Auth     | JWT (`jsonwebtoken`) + `bcryptjs` |
| Security | Rate limiting, input validation, protected admin routes |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the server (seeds the database automatically)
npm start

# 3. Open in browser
http://localhost:5000

# 4. Run the test suite (34 tests)
npm test
```

> The database file is created at `data/database.sqlite` on first run and seeded with the 71 vehicles plus the default admin account.

## Default Admin Account

| Credential | Value            |
|------------|------------------|
| Username   | `admin`          |
| Password   | `GehadAdmin2026!`|

Change the password after your first login via `src/models/seed.js`.

## Project Structure

```
├── index.html          # Home: hero, stats, featured, inventory, experience, newsletter
├── vehicle.html        # Vehicle detail page with inquiry form
├── contact.html        # Contact / private allocation desk
├── admin.html          # Admin dashboard (login required)
├── js/api.js           # Frontend API client with static JSON fallback
├── vehicles.json       # Static export for GitHub Pages mode
├── images/             # Real per-model photos (one JPG per vehicle) + showroom/
├── server.js           # Express entry point
├── src/
│   ├── config/         # Database setup
│   ├── middleware/     # JWT auth + rate limiting
│   ├── models/         # Schema, seed data (71 vehicles), seeding logic
│   └── routes/         # vehicles, newsletter, contact, admin APIs
└── test.js             # End-to-end API test suite (34 tests)
```

## API Overview

| Method | Endpoint                   | Description                     |
|--------|----------------------------|---------------------------------|
| GET    | `/api/vehicles`            | List vehicles (search/filter)   |
| GET    | `/api/vehicles/:id`        | Vehicle details                 |
| POST   | `/api/newsletter`          | Subscribe an email              |
| POST   | `/api/contact`             | Submit an inquiry               |
| POST   | `/api/admin/login`         | Admin login (JWT)               |
| GET    | `/api/admin/stats`         | Dashboard stats                 |
| GET    | `/api/admin/vehicles`      | All vehicles (auth)             |
| POST   | `/api/admin/vehicles`      | Create vehicle (auth)           |
| PUT    | `/api/admin/vehicles/:id`  | Update vehicle (auth)           |
| DELETE | `/api/admin/vehicles/:id`  | Delete vehicle (auth)           |
| GET    | `/api/admin/inquiries`     | Inquiries (auth)                |
| GET    | `/api/admin/subscribers`   | Subscribers (auth)              |

## Deployment Notes

- **GitHub Pages** serves the full catalog statically (browsing, search, filtering, vehicle pages). Admin dashboard and forms require the backend.
- Vehicle photos are self-hosted real car images (sourced from [Wikimedia Commons](https://commons.wikimedia.org/), one matched photo per model) bundled under `images/`, so the catalog renders fully offline / on static hosting — no external image URLs.
- **Full stack hosting**: the Express app runs anywhere Node.js is available (Render, Railway, Fly.io, a VPS). Point `base` in `js/api.js` at the hosted API if you deploy the frontend separately.
- Environment variables (see `.env.example`): `PORT`, `JWT_SECRET`, `JWT_EXPIRES_IN`.

---

© 2026 Gehad Automotive. Crafted to exact luxury specifications.
