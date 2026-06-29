# Front Runner Restoration

Website for Front Runner Restoration — a water damage mitigation and restoration company serving residential and commercial properties throughout Florida.

Built with React + Vite (client) and Express (server), deployed on Railway.

---

## Tech Stack

- **Frontend** — React, Vite, plain CSS
- **Backend** — Node.js, Express
- **Email** — Resend (contact form)
- **Deployment** — Railway

---

## Project Structure

```
frontline/
├── client/               # React frontend (Vite)
│   ├── public/images/    # Static images and assets
│   └── src/
│       ├── components/   # Shared UI components
│       ├── pages/        # Page-level components
│       ├── data/         # Service content data
│       └── styles/       # Global CSS and variables
├── server/               # Express backend
│   ├── routes/           # API route handlers
│   └── utils/            # Resend email client
├── railway.json          # Railway build/start config
└── package.json          # Root scripts
```

---

## Local Development

**1. Install dependencies**

```bash
npm run install:all
npm install
```

**2. Set up environment variables**

Create a `.env` file in the `server/` directory:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=no-reply@yourdomain.com
CONTACT_TO_EMAIL=you@yourdomain.com
```

**3. Start the dev server**

```bash
npm run dev
```

The React client runs on `http://localhost:5173` and proxies `/api` requests to Express on port `3001`.

---

## Deployment (Railway)

The project is configured for Railway via `railway.json`. On deploy Railway will:

1. Install client and server dependencies
2. Build the React frontend (`client/dist`)
3. Start the Express server, which serves both the API and built frontend

**Required environment variables in Railway:**

| Variable | Description |
|---|---|
| `NODE_ENV` | Set to `production` |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_FROM_EMAIL` | Sending email address |
| `CONTACT_TO_EMAIL` | Where contact form submissions are delivered |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, services, before/after, service area map |
| `/about` | About page — company info, why choose us, core services |
| `/contact` | Contact page — contact info, map, inquiry form |
| `/services/:slug` | Individual service detail pages |
| `/before-after` | Before and after project gallery |

---

## Contact Form

The contact form posts to `/api/contact` and sends an email via Resend. The form will return a `503` if the Resend environment variables are not configured. The rest of the site works without them.
