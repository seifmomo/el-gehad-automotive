# Gehad Automotive

A modern car dealership website for Gehad Automotive — "Where Performance Meets Luxury".

## Stack

- **Frontend:** Static HTML/CSS/JS with dynamic API integration
- **Backend:** Node.js + Express + SQLite
- **Database:** SQLite (local file, no external service required)
- **Auth:** JWT tokens for admin access

## Features

### Frontend
- Vehicle showcase with high-quality imagery
- Dynamic inventory loaded from backend API
- Responsive layout with custom cursor and hover effects
- Vehicle detail pages with inquiry forms
- Newsletter subscription with real API integration
- Contact form with inquiry submission

### Backend API
- REST API for vehicle inventory (CRUD)
- Newsletter subscription management
- Contact inquiry handling
- Admin authentication (JWT)
- Admin dashboard for managing vehicles, inquiries, and subscribers

## Project Structure

```
el gehad automotive/
├── server.js            # Express server entry point
├── package.json         # npm package config
├── .env.example         # Environment variables template
├── .gitignore
├── index.html           # Main landing page
├── contact.html         # Contact form page
├── vehicle.html         # Vehicle detail page
├── admin.html           # Admin dashboard
├── js/
│   └── api.js           # Frontend API client
├── data/                # SQLite database (auto-generated)
│   └── database.sqlite
├── uploads/             # Vehicle image uploads
├── src/
│   ├── config/
│   │   └── database.js  # SQLite setup and schema
│   ├── models/
│   │   ├── vehicle.js   # Vehicle model
│   │   ├── subscriber.js # Newsletter model
│   │   ├── inquiry.js   # Contact inquiry model
│   │   └── seed.js      # Database seed data
│   ├── routes/
│   │   ├── vehicles.js  # Vehicle CRUD API
│   │   ├── newsletter.js # Newsletter API
│   │   ├── contact.js   # Contact inquiry API
│   │   └── admin.js     # Admin auth + management API
│   └── middleware/
│       └── auth.js      # JWT auth middleware
├── *.jpeg              # Showroom images
└── test.js             # Backend test suite
```

## Setup

### Prerequisites
- Node.js 18+ (tested on Node.js 24)
- npm

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server runs on `http://localhost:5000`.

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5000` | Server port |
| `JWT_SECRET` | *(required)* | Secret for JWT token signing |
| `JWT_EXPIRES_IN` | `7d` | Token expiration time |

## API Endpoints

### Public

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/vehicles` | List all vehicles (filter: `?category=suv\|sedan\|sports`, `?featured=1`) |
| `GET` | `/api/vehicles/:id` | Get a single vehicle by ID |
| `POST` | `/api/newsletter` | Subscribe email (`{ email, source }`) |
| `POST` | `/api/contact` | Submit contact inquiry (`{ name, email, phone, subject, message, vehicle_id }`) |
| `GET` | `/api/health` | Health check |

### Admin (requires Bearer token)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/admin/login` | Login (`{ username, password }`) → returns JWT token |
| `GET` | `/api/admin/stats` | Dashboard stats |
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

## Testing

```bash
npm test
```

The test suite verifies all API endpoints, authentication, and seed data.

## Usage

### Frontend Pages
- `/` — Main landing page with dynamic inventory
- `/vehicle.html?id=N` — Vehicle detail page
- `/contact.html` — Contact form page
- `/admin.html` — Admin dashboard

### Admin Dashboard
1. Navigate to `/admin.html`
2. Log in with the default credentials above
3. Manage vehicles, view inquiries, and review subscribers
