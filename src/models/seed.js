const { run, get } = require('../config/database');
const bcrypt = require('bcryptjs');
const { vehiclesData } = require('./vehiclesData');

const defaultAdmin = {
  username: 'admin',
  password: 'GehadAdmin2026!'
};

const seed = async () => {
  let count = 0;
  for (const v of vehiclesData) {
    const exists = await get('SELECT id FROM vehicles WHERE model = ? AND brand = ? AND year = ?', [v.model, v.brand, v.year]);
    if (!exists) {
      const specs = JSON.stringify(v.specs || []);
      await run(
        `INSERT INTO vehicles (brand, model, variant, year, price, finance_monthly, finance_note, mileage, transmission, engine, power, color, status, badge, category, description, specs, image, gallery, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [v.brand, v.model, v.variant, v.year, v.price, v.finance_monthly, v.finance_note, v.mileage, v.transmission, v.engine, v.power, v.color, v.status, v.badge, v.category, v.description, specs, v.image, v.gallery, v.featured || 0]
      );
      count++;
    }
  }

  const adminExists = await get('SELECT id FROM admins WHERE username = ?', [defaultAdmin.username]);
  if (!adminExists) {
    const hash = await bcrypt.hash(defaultAdmin.password, 10);
    await run('INSERT INTO admins (username, password_hash, role) VALUES (?, ?, ?)', [defaultAdmin.username, hash, 'admin']);
  }

  console.log(`Seed complete (${count} new vehicles added, total: ${vehiclesData.length})`);
};

module.exports = { seed, vehiclesData, defaultAdmin };
