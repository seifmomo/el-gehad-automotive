# Gehad Automotive

A complete car dealership website for Gehad Automotive — "Where Performance Meets Luxury". Built with a Node.js/Express backend and SQLite database, serving a dynamic frontend with 71+ vehicle models across 28 brands available in the Egyptian market.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm start

# 3. Open in browser
http://localhost:5000
```

## Project Overview

### Backend (Node.js + Express + SQLite)
- REST API for vehicle inventory with **search, filtering, and pagination**
- Newsletter subscription with validation and rate limiting
- Contact inquiry system with admin management
- JWT-based admin authentication
- Admin dashboard at `/admin.html`
- SQLite database (auto-created, no setup needed)

### Frontend
- `index.html` — Landing page with dynamic inventory grid, featured showcase, and newsletter form
- `vehicle.html` — Vehicle detail pages with inquiry forms
- `contact.html` — Full contact page with inquiry submission
- `admin.html` — Admin dashboard for managing vehicles, inquiries, and subscribers
- `js/api.js` — Frontend API client library
- Scroll reveal animations, skeleton loading, and smooth transitions

### Database
- Auto-seeded with **71 vehicle models** from 28 brands (Toyota, BMW, Mercedes-Benz, Audi, Porsche, Honda, Hyundai, Kia, and more)
- Includes luxury and exotic vehicles (original 6 from the frontend design)
- Admin account auto-created

## API Endpoints

### Public
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/vehicles` | List vehicles (query: `?category=`, `?featured=1`, `?search=`, `?page=`, `?limit=`) |
| `GET` | `/api/vehicles/:id` | Get a single vehicle by ID |
| `POST` | `/api/newsletter` | Subscribe email (`{ email, source }`) |
| `POST` | `/api/contact` | Submit inquiry (`{ name, email, phone, subject, message, vehicle_id }`) |
| `GET` | `/api/health` | Health check |

### Admin (requires JWT Bearer token)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/admin/login` | Login (`{ username, password }`) → returns JWT token |
| `GET` | `/api/admin/stats` | Dashboard statistics |
| `GET` | `/api/admin/inquiries` | List all inquiries |
| `PUT` | `/api/admin/inquiries/:id/status` | Update inquiry status |
| `DELETE` | `/api/admin/inquiries/:id` | Delete inquiry |
| `GET` | `/api/admin/subscribers` | List all subscribers |
| `POST` | `/api/vehicles` | Create a vehicle |
| `PUT` | `/api/vehicles/:id` | Update a vehicle |
| `DELETE` | `/api/vehicles/:id` | Delete a vehicle |

### Default Admin Credentials
```
Username: admin
Password: GehadAdmin2026!
```

## Running Tests

```bash
npm test
```

Runs 34 tests covering all API endpoints, authentication, seed data, search, filtering, and rate limiting.

## Environment Variables

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port |
| `JWT_SECRET` | *(required)* | Secret for JWT token signing |
| `JWT_EXPIRES_IN` | `7d` | Token expiration time |

## Pages

| URL | Description |
|-----|-------------|
| `/` | Home page with featured showcase and dynamic inventory |
| `/vehicle.html?id=N` | Vehicle detail page with inquiry form |
| `/contact.html` | Contact page with full inquiry form |
| `/admin.html` | Admin dashboard (login required) |
