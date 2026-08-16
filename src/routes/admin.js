const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { db, get } = require('../config/database');
const { generateToken, verifyToken } = require('../middleware/auth');
const Vehicle = require('../models/vehicle');
const Inquiry = require('../models/inquiry');
const Subscriber = require('../models/subscriber');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  try {
    const admin = await get('SELECT * FROM admins WHERE username = ?', [username]);
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const valid = await bcrypt.compare(password, admin.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(admin);
    res.json({ token, username: admin.username, role: admin.role });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

router.get('/stats', verifyToken, async (req, res) => {
  try {
    const vehicleCount = await get('SELECT COUNT(*) as count FROM vehicles');
    const subscriberCount = await get('SELECT COUNT(*) as count FROM subscribers');
    const inquiryCount = await get('SELECT COUNT(*) as count FROM inquiries');
    const newInquiries = await get('SELECT COUNT(*) as count FROM inquiries WHERE status = ?', ['new']);

    res.json({
      vehicles: vehicleCount.count,
      subscribers: subscriberCount.count,
      inquiries: inquiryCount.count,
      newInquiries: newInquiries.count
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

router.get('/inquiries', verifyToken, async (req, res) => {
  try {
    const inquiries = await Inquiry.getAll();
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

router.put('/inquiries/:id/status', verifyToken, async (req, res) => {
  try {
    const { status } = req.body;
    await Inquiry.updateStatus(req.params.id, status);
    res.json({ message: 'Status updated' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update status' });
  }
});

router.delete('/inquiries/:id', verifyToken, async (req, res) => {
  try {
    await Inquiry.remove(req.params.id);
    res.json({ message: 'Inquiry deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete inquiry' });
  }
});

router.get('/subscribers', verifyToken, async (req, res) => {
  try {
    const subscribers = await Subscriber.getAll();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

module.exports = router;
