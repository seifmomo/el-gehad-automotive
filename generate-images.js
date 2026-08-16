const fs = require('fs');
const path = require('path');
const { vehiclesData } = require('./src/models/vehiclesData');

const dir = path.join(__dirname, 'images');
fs.mkdirSync(dir, { recursive: true });

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function svgFor(brand, model, variant) {
  const label = esc((brand + ' ' + model).toUpperCase());
  const sub = esc((variant || '').toUpperCase());
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#0a0a0f"/>
  <rect x="40" y="40" width="720" height="520" fill="none" stroke="#c8a84c" stroke-width="2" opacity="0.35"/>
  <circle cx="400" cy="250" r="110" fill="#11131a" stroke="#c8a84c" stroke-width="3" opacity="0.8"/>
  <text x="400" y="225" font-family="Arial, sans-serif" font-size="52" font-weight="bold" fill="#c8a84c" text-anchor="middle">${label}</text>
  <text x="400" y="285" font-family="Arial, sans-serif" font-size="26" fill="#8a8f98" text-anchor="middle">${sub}</text>
  <text x="400" y="500" font-family="Arial, sans-serif" font-size="20" fill="#4a4e55" text-anchor="middle">GEHAD AUTOMOTIVE</text>
</svg>
`;
}

function fileName(brand, model) {
  return (brand + '-' + model).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.svg';
}

let changed = 0;
vehiclesData.forEach(v => {
  const name = fileName(v.brand, v.model);
  const rel = 'images/' + name;
  const abs = path.join(dir, name);
  if (!fs.existsSync(abs)) {
    fs.writeFileSync(abs, svgFor(v.brand, v.model, v.variant));
  }
  if (v.image !== rel || v.gallery !== rel) {
    v.image = rel;
    v.gallery = rel;
    changed++;
  }
});

fs.writeFileSync(path.join(__dirname, 'vehicles.json'), JSON.stringify(vehiclesData, null, 2));
console.log('SVG images ready in images/ (' + fs.readdirSync(dir).length + ' files)');
console.log('vehicles updated: ' + changed + ' of ' + vehiclesData.length);