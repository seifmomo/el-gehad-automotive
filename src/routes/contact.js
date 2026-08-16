const express = require('express');
const router = express.Router();
const Inquiry = require('../models/inquiry');
const rateLimit = require('../middleware/rateLimit');

router.post('/', rateLimit(10, 60000), async (req, res) => {
  const { name, email, phone, subject, message, vehicle_id } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    const result = await Inquiry.create({ name, email, phone, subject, message, vehicle_id });
    res.status(201).json({ message: 'Inquiry submitted successfully', id: result.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.getAll();
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.getById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch inquiry' });
  }
});

module.exports = router;
