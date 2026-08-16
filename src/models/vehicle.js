const { all: allQuery, get: getQuery, run: runQuery } = require('../config/database');

const parseSpecs = (row) => ({ ...row, specs: row.specs ? JSON.parse(row.specs) : [] });

exports.getAll = async (page = 1, limit = 100) => {
  const offset = (page - 1) * limit;
  const rows = await allQuery(
    `SELECT * FROM vehicles ORDER BY featured DESC, created_at DESC LIMIT ? OFFSET ?`,
    [limit, offset]
  );
  return rows.map(parseSpecs);
};

exports.getByCategory = async (category) => {
  const rows = await allQuery(`SELECT * FROM vehicles WHERE category = ? ORDER BY created_at DESC`, [category]);
  return rows.map(parseSpecs);
};

exports.search = async (query) => {
  const q = '%' + query + '%';
  const rows = await allQuery(
    `SELECT * FROM vehicles WHERE brand LIKE ? OR model LIKE ? OR variant LIKE ? OR description LIKE ? ORDER BY featured DESC, created_at DESC`,
    [q, q, q, q]
  );
  return rows.map(parseSpecs);
};

exports.getById = async (id) => {
  const row = await getQuery(`SELECT * FROM vehicles WHERE id = ?`, [id]);
  if (!row) return null;
  return parseSpecs(row);
};

exports.create = async (data) => {
  const {
    brand, model, variant, year, price, finance_monthly, finance_note,
    mileage, transmission, engine, power, color, status, badge,
    category, description, specs, image, gallery, featured
  } = data;

  const result = await runQuery(
    `INSERT INTO vehicles (brand, model, variant, year, price, finance_monthly, finance_note, mileage, transmission, engine, power, color, status, badge, category, description, specs, image, gallery, featured)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [brand, model, variant, year, price, finance_monthly, finance_note, mileage, transmission, engine, power, color, status, badge, category, description, JSON.stringify(specs || []), image, gallery, featured ? 1 : 0]
  );
  return result;
};

exports.update = async (id, data) => {
  const fields = [];
  const params = [];
  for (const [key, value] of Object.entries(data)) {
    if (key === 'specs') {
      fields.push(`specs = ?`);
      params.push(JSON.stringify(value));
    } else if (key === 'featured') {
      fields.push(`featured = ?`);
      params.push(value ? 1 : 0);
    } else {
      fields.push(`${key} = ?`);
      params.push(value);
    }
  }
  params.push(id);
  await runQuery(`UPDATE vehicles SET ${fields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`, params);
};

exports.remove = async (id) => {
  await runQuery(`DELETE FROM vehicles WHERE id = ?`, [id]);
};
