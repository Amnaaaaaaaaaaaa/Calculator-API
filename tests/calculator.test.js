const request = require('supertest');
const app = require('../app');

describe('Calculator API', () => {
  test('adds numbers', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.body.result).toBe(5);
  });

  test('subtracts numbers', async () => {
    const res = await request(app).get('/subtract?a=5&b=2');
    expect(res.body.result).toBe(3);
  });

  test('multiplies numbers', async () => {
    const res = await request(app).get('/multiply?a=2&b=3');
    expect(res.body.result).toBe(6);
  });

  test('divides numbers', async () => {
    const res = await request(app).get('/divide?a=9&b=3');
    expect(res.body.result).toBe(3);
  });

  test('handles divide by zero', async () => {
    const res = await request(app).get('/divide?a=9&b=0');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Cannot divide by zero');
  });
});

