# Front Runner Restoration

A responsive React + Express website for Front Runner Restoration.

## Local setup

1. Run `npm run install:all` and `npm install` from the project root.
2. Copy `.env.example` to `.env` and add your Resend details.
3. Run `npm run dev`.

The client runs on port 5173 and proxies `/api` requests to the Express server on port 3001.

## Railway

Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in Railway. The server serves the built React client in production.
