const { run, get } = require('../config/database');
const bcrypt = require('bcryptjs');

const vehicles = [
  {
    brand: 'Audi',
    model: 'Q8 Black Edition',
    variant: 'Black Edition',
    year: 2024,
    price: 4250000,
    finance_monthly: 47000,
    finance_note: 'Finance from EGP 47,000/mo',
    mileage: 'N/A',
    transmission: '8-Speed Automatic',
    engine: '3.0L V6 TFSI',
    power: '340 HP',
    color: 'Black Out',
    status: 'available',
    badge: 'Exclusive Fleet',
    category: 'suv',
    description: 'Experience the alignment of coupe elegance and commanding SUV presence. Handpicked directly from our showroom portfolio featuring a sinister black-out configuration.',
    specs: [
      { label: 'Powertrain', value: '3.0L V6 TFSI' },
      { label: 'Output', value: '340 HP' },
      { label: 'Acceleration', value: '5.9 s (0-100)' },
      { label: 'Showroom Capture', value: '7.jpeg & 8.jpeg' }
    ],
    image: '8.jpeg',
    gallery: '7.jpeg,8.jpeg',
    featured: 1
  },
  {
    brand: 'Mercedes-Benz',
    model: 'Class',
    variant: 'S 580 L Luxury Package',
    year: 2024,
    price: 5900000,
    finance_monthly: 65500,
    finance_note: 'Finance from EGP 65,500/mo',
    mileage: 'N/A',
    transmission: '9-Speed Automatic',
    engine: '4.0L V8 Biturbo',
    power: '496 HP',
    color: 'Diamond White',
    status: 'available',
    badge: 'Available',
    category: 'sedan',
    description: 'The pinnacle of Mercedes-Benz luxury sedan engineering with handcrafted AMG power and bespoke appointments.',
    specs: [
      { label: 'Trim', value: 'Exclusive' },
      { label: 'Lighting', value: 'LED Matrix' },
      { label: 'Status', value: 'Showroom' }
    ],
    image: '5.jpeg',
    gallery: '5.jpeg',
    featured: 0
  },
  {
    brand: 'Mercedes-Benz',
    model: 'Coupe',
    variant: 'Bespoke Aerodynamics',
    year: 2024,
    price: 5400000,
    finance_monthly: 60000,
    finance_note: 'Finance from EGP 60,000/mo',
    mileage: 'N/A',
    transmission: '9-Speed Automatic',
    engine: '4.0L V8 Biturbo',
    power: '621 HP',
    color: 'Showroom Mint',
    status: 'available',
    badge: 'Available',
    category: 'suv',
    description: 'A luxury coupe with bespoke aerodynamics and premium appointments from our showroom.',
    specs: [
      { label: 'Engine', value: 'Biturbo' },
      { label: 'Wheels', value: 'Premium' },
      { label: 'Stance', value: 'Bespoke' }
    ],
    image: '6.jpeg',
    gallery: '6.jpeg',
    featured: 0
  },
  {
    brand: 'BMW',
    model: 'M Performance',
    variant: 'M Performance TwinPower',
    year: 2024,
    price: 4800000,
    finance_monthly: 53500,
    finance_note: 'Finance from EGP 53,500/mo',
    mileage: 'N/A',
    transmission: '8-Speed M Steptronic',
    engine: '3.0L Inline-6',
    power: '503 HP',
    color: 'São Paulo Yellow',
    status: 'new_arrival',
    badge: 'New Arrival',
    category: 'sports',
    description: 'M Performance TwinPower with São Paulo Yellow finish and track-tuned suspension.',
    specs: [
      { label: 'Headlights', value: 'Laser' },
      { label: 'Rims', value: 'Competition' },
      { label: 'Tuned', value: 'Track' }
    ],
    image: '4.jpeg',
    gallery: '4.jpeg',
    featured: 0
  },
  {
    brand: 'Bentley',
    model: 'Continental GT',
    variant: 'Mulliner Specifications',
    year: 2024,
    price: 8200000,
    finance_monthly: 91000,
    finance_note: 'Finance from EGP 91,000/mo',
    mileage: 'N/A',
    transmission: '8-Speed Automatic',
    engine: 'V8 / W12',
    power: '542 HP (V8)',
    color: 'Magnetic Gray',
    status: 'available',
    badge: 'Available',
    category: 'sports',
    description: 'Bentley Continental GT with Mulliner specifications, V8/W12 power and open-top gran tourer capability.',
    specs: [
      { label: 'Power', value: 'V8/W12' },
      { label: 'Calipers', value: 'Red Gloss' },
      { label: 'Gran Tourer', value: 'Open Top' }
    ],
    image: '1.jpeg',
    gallery: '1.jpeg',
    featured: 0
  },
  {
    brand: 'Scuderia',
    model: 'Performance',
    variant: 'Aerodynamic Matrix',
    year: 2025,
    price: 14500000,
    finance_monthly: 0,
    finance_note: 'Price on Request',
    mileage: 'N/A',
    transmission: '7-Speed DCT',
    engine: 'V12 Hybrid',
    power: '819 HP',
    color: 'Rosso Corsa Flame',
    status: 'pre_order',
    badge: 'Ultra Luxury',
    category: 'sports',
    description: 'Ultra-luxury hypercar with aerodynamic matrix design, circular LED lighting and exotic exhaust.',
    specs: [
      { label: 'LEDs', value: 'Circular' },
      { label: 'Diffuser', value: 'Carbon' },
      { label: 'Exhaust', value: 'Exotic' }
    ],
    image: '2.jpeg',
    gallery: '2.jpeg,3.jpeg',
    featured: 0
  }
];

const defaultAdmin = {
  username: 'admin',
  password: 'GehadAdmin2026!'
};

const seed = async () => {
  for (const v of vehicles) {
    const exists = await get('SELECT id FROM vehicles WHERE model = ? AND brand = ? AND year = ?', [v.model, v.brand, v.year]);
    if (!exists) {
      const specs = JSON.stringify(v.specs);
      await run(
        `INSERT INTO vehicles (brand, model, variant, year, price, finance_monthly, finance_note, mileage, transmission, engine, power, color, status, badge, category, description, specs, image, gallery, featured)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [v.brand, v.model, v.variant, v.year, v.price, v.finance_monthly, v.finance_note, v.mileage, v.transmission, v.engine, v.power, v.color, v.status, v.badge, v.category, v.description, specs, v.image, v.gallery, v.featured]
      );
    }
  }

  const adminExists = await get('SELECT id FROM admins WHERE username = ?', [defaultAdmin.username]);
  if (!adminExists) {
    const hash = await bcrypt.hash(defaultAdmin.password, 10);
    await run('INSERT INTO admins (username, password_hash, role) VALUES (?, ?, ?)', [defaultAdmin.username, hash, 'admin']);
  }

  console.log('Seed complete');
};

module.exports = { seed, vehicles, defaultAdmin };
