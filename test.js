const http = require('http');
const { start, getServer } = require('./server');

let PASS = 0, FAIL = 0;

function assert(cond, msg) {
  if (cond) {
    PASS++;
    console.log('  PASS: ' + msg);
  } else {
    FAIL++;
    console.log('  FAIL: ' + msg);
  }
}

function request(method, path, body, headers = {}) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const opts = {
      hostname: 'localhost',
      port: 5000,
      path,
      method,
      headers: { 'Content-Type': 'application/json', ...headers }
    };
    if (data) opts.headers['Content-Length'] = Buffer.byteLength(data);

    const req = http.request(opts, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: d ? JSON.parse(d) : {} });
        } catch (e) {
          resolve({ status: res.statusCode, body: d });
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

async function run() {
  console.log('\n=== Gehad Automotive Backend Tests ===\n');

  await start();
  await new Promise(r => setTimeout(r, 200));

  console.log('[Health Check]');
  const health = await request('GET', '/api/health');
  assert(health.status === 200, 'Health endpoint returns 200');
  assert(health.body.status === 'ok', 'Health returns status ok');

  console.log('\n[Vehicles API]');
  const list = await request('GET', '/api/vehicles');
  assert(list.status === 200, 'GET /api/vehicles returns 200');
  assert(Array.isArray(list.body), 'Returns array of vehicles');
  assert(list.body.length === 6, '6 vehicles seeded from frontend data');
  assert(list.body.some(v => v.brand === 'Audi' && v.model === 'Q8 Black Edition'), 'Audi Q8 present');
  assert(list.body.some(v => v.featured === 1), 'At least one featured vehicle');
  console.log('  Seeded vehicle details:');
  list.body.forEach(v => console.log(`    - ${v.brand} ${v.model} | EGP ${v.price.toLocaleString()} | featured=${v.featured}`));

  const audi = list.body.find(v => v.brand === 'Audi');
  const detail = await request('GET', `/api/vehicles/${audi.id}`);
  assert(detail.status === 200, 'GET /api/vehicles/:id returns 200');
  assert(detail.body.brand === 'Audi', 'Vehicle detail has correct brand');
  assert(Array.isArray(detail.body.specs), 'Vehicle detail includes parsed specs array');

  const notFound = await request('GET', '/api/vehicles/99999');
  assert(notFound.status === 404, 'Non-existent vehicle returns 404');

  console.log('\n[Admin Auth]');
  const login = await request('POST', '/api/admin/login', { username: 'admin', password: 'GehadAdmin2026!' });
  assert(login.status === 200, 'Admin login succeeds with correct credentials');
  assert(!!login.body.token, 'Login returns JWT token');
  assert(login.body.username === 'admin', 'Token response includes username');
  const token = login.body.token;

  const badLogin = await request('POST', '/api/admin/login', { username: 'admin', password: 'wrong' });
  assert(badLogin.status === 401, 'Bad password returns 401');

  console.log('\n[Admin Protected Routes]');
  const stats = await request('GET', '/api/admin/stats', null, { Authorization: `Bearer ${token}` });
  assert(stats.status === 200, 'GET /api/admin/stats works with token');
  assert(stats.body.vehicles === 6, `Stats shows ${stats.body.vehicles} vehicles`);

  const noAuthStats = await request('GET', '/api/admin/stats');
  assert(noAuthStats.status === 401, 'Stats without token returns 401');

  console.log('\n[Admin Vehicle Create]');
  const newCar = await request('POST', '/api/vehicles', {
    brand: 'Test', model: 'Car', variant: 'V1', year: 2025, price: 100000,
    finance_monthly: 5000, finance_note: 'Finance available', mileage: '0 km',
    transmission: 'Auto', engine: '2.0L', power: '250 HP', color: 'Red',
    status: 'available', badge: 'New', category: 'sports', description: 'Test car',
    specs: [{ label: 'Test', value: 'Yes' }], image: 'test.jpg', gallery: 'test.jpg', featured: 0
  }, { Authorization: `Bearer ${token}` });
  assert(newCar.status === 201, 'POST /api/vehicles creates a vehicle');

  const createdList = await request('GET', '/api/vehicles');
  assert(createdList.body.length === 7, 'Vehicle count is now 7');

  console.log('\n[Newsletter API]');
  const sub = await request('POST', '/api/newsletter', { email: 'test@example.com' });
  assert(sub.status === 201, 'POST /api/newsletter subscribes email');

  const dupSub = await request('POST', '/api/newsletter', { email: 'test@example.com' });
  assert(dupSub.status === 200, 'Duplicate subscription returns 200 (already subscribed)');

  const badEmail = await request('POST', '/api/newsletter', { email: 'not-an-email' });
  assert(badEmail.status === 400, 'Invalid email returns 400');

  const noEmail = await request('POST', '/api/newsletter', {});
  assert(noEmail.status === 400, 'Missing email returns 400');

  console.log('\n[Contact API]');
  const inquiry = await request('POST', '/api/contact', { name: 'John Doe', email: 'john@test.com', phone: '+201234567890', subject: 'Car Inquiry', message: 'I would like to know more about the Audi Q8.' });
  assert(inquiry.status === 201, 'POST /api/contact submits inquiry');
  assert(inquiry.body.id, 'Inquiry returns an ID');

  const badInquiry = await request('POST', '/api/contact', { name: 'John' });
  assert(badInquiry.status === 400, 'Missing fields returns 400');

  console.log('\n[Admin Inquiry Management]');
  const allInquiries = await request('GET', '/api/admin/inquiries', null, { Authorization: `Bearer ${token}` });
  assert(allInquiries.status === 200, 'GET /api/admin/inquiries returns inquiries');
  assert(Array.isArray(allInquiries.body), 'Returns array of inquiries');
  console.log('  Inquiries:', allInquiries.body.length);

  console.log('\n=== Test Summary ===');
  console.log(`  Passed: ${PASS} | Failed: ${FAIL}\n`);

  process.exit(FAIL > 0 ? 1 : 0);
}

run().catch(err => {
  console.error('Test runner error:', err.message);
  process.exit(1);
});
