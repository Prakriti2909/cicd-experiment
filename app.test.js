const request = require('supertest');
const app = require('./app');

test('GET / returns Version 2', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toContain('Version 1');
});

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.body.status).toBe('ok');
});
