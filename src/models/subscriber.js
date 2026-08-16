const { run: runQuery, get: getQuery, all: allQuery } = require('../config/database');

exports.create = async (email, source) => {
  const result = await runQuery(
    `INSERT OR IGNORE INTO subscribers (email, source) VALUES (?, ?)`,
    [email, source || 'website']
  );
  return result;
};

exports.getAll = async () => {
  return await allQuery(`SELECT * FROM subscribers ORDER BY created_at DESC`);
};

exports.getByEmail = async (email) => {
  return await getQuery(`SELECT * FROM subscribers WHERE email = ?`, [email]);
};
