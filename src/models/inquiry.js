const { run: runQuery, all: allQuery, get: getQuery } = require('../config/database');

exports.create = async (data) => {
  const { name, email, phone, subject, message, vehicle_id } = data;
  const result = await runQuery(
    `INSERT INTO inquiries (name, email, phone, subject, message, vehicle_id) VALUES (?, ?, ?, ?, ?, ?)`,
    [name, email, phone || null, subject || null, message, vehicle_id || null]
  );
  return result;
};

exports.getAll = async () => {
  return await allQuery(`SELECT * FROM inquiries ORDER BY created_at DESC`);
};

exports.getById = async (id) => {
  return await getQuery(`SELECT * FROM inquiries WHERE id = ?`, [id]);
};

exports.updateStatus = async (id, status) => {
  await runQuery(`UPDATE inquiries SET status = ? WHERE id = ?`, [status, id]);
};

exports.remove = async (id) => {
  await runQuery(`DELETE FROM inquiries WHERE id = ?`, [id]);
};
