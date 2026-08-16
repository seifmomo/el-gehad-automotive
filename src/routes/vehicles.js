const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');
const { verifyToken } = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const { category, featured, search, page, limit } = req.query;
    let vehicles;

    if (search) {
      vehicles = await Vehicle.search(search);
    } else if (category) {
      vehicles = await Vehicle.getByCategory(category);
    } else if (featured === '1' || featured === 'true') {
      const all = await Vehicle.getAll(1, 100);
      vehicles = all.filter(v => v.featured === 1);
    } else {
      vehicles = await Vehicle.getAll(
        parseInt(page) || 1,
        parseInt(limit) || 100
      );
    }

    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.getById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicle' });
  }
});

router.post('/', verifyToken, async (req, res) => {
  try {
    const result = await Vehicle.create(req.body);
    res.status(201).json({ message: 'Vehicle created', id: result.id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create vehicle' });
  }
});

router.put('/:id', verifyToken, async (req, res) => {
  try {
    const existing = await Vehicle.getById(req.params.id);
    if (!existing) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    await Vehicle.update(req.params.id, req.body);
    const updated = await Vehicle.getById(req.params.id);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update vehicle' });
  }
});

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const existing = await Vehicle.getById(req.params.id);
    if (!existing) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    await Vehicle.remove(req.params.id);
    res.json({ message: 'Vehicle deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete vehicle' });
  }
});

module.exports = router;
