import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import contactRouter from './routes/contact.js';

const app = express();
const port = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDist = path.resolve(__dirname, '../client/dist');

app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use((_req, res, next) => {
  const connectSources = process.env.NODE_ENV === 'production'
    ? "'self'"
    : "'self' ws://localhost:5173 http://localhost:3001";
  const csp = [
    "default-src 'self'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'",
    "object-src 'none'", "img-src 'self' data: https://maps.gstatic.com https://maps.googleapis.com", "font-src 'self'", "style-src 'self' 'unsafe-inline'",
    "script-src 'self'", `connect-src ${connectSources}`,
    "frame-src https://maps.google.com https://www.google.com",
  ];
  if (process.env.NODE_ENV === 'production') csp.push('upgrade-insecure-requests');
  res.set({
    'Content-Security-Policy': csp.join('; '),
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
  });
  if (process.env.NODE_ENV === 'production') res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? false : 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  maxAge: 86400,
}));
app.use(express.json({ limit: '25kb' }));
app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/contact', contactRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(clientDist));
  app.get('/{*splat}', (_req, res) => res.sendFile(path.join(clientDist, 'index.html')));
}

app.listen(port, () => console.log(`Front Runner server listening on port ${port}`));
