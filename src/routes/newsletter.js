const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');
const rateLimit = require('../middleware/rateLimit');

router.post('/', rateLimit(5, 60000), async (req, res) => {
  const { email, source } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const result = await Subscriber.create(email, source);
    if (result.changes === 0) {
      return res.status(200).json({ message: 'Already subscribed' });
    }
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT') {
      return res.status(200).json({ message: 'Already subscribed' });
    }
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.getAll();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

module.exports = router;
