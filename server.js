require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { init, db } = require('./src/config/database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const blocked = ['/server.js', '/.env', '/.env.example', '/package.json', '/package-lock.json', '/test.js'];
app.use((req, res, next) => {
  if (blocked.includes(req.path) || req.path.startsWith('/src/') || req.path.startsWith('/data/')) {
    return res.status(404).json({ error: 'Not found' });
  }
  next();
});
app.use(express.static(__dirname, { extensions: ['html', 'js', 'json', 'css', 'jpeg', 'jpg', 'png', 'svg'] }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/vehicles', require('./src/routes/vehicles'));
app.use('/api/newsletter', require('./src/routes/newsletter'));
app.use('/api/contact', require('./src/routes/contact'));
app.use('/api/admin', require('./src/routes/admin'));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

let server;

const start = async () => {
  init();
  await new Promise(r => setTimeout(r, 500));
  const seed = require('./src/models/seed');
  await seed.seed();
  server = app.listen(PORT, () => {
    console.log(`Gehad Automotive backend running on http://localhost:${PORT}`);
  });
  return server;
};

if (require.main === module) {
  start();
}

module.exports = { app, start, getServer: () => server };
