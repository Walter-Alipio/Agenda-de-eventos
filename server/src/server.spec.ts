import request from 'supertest';

describe('Server awake',  ()=>{
  const baseUrl = 'http://localhost:3333';

  test('', async ()=>{
    const res = await request(baseUrl).get('/');

    expect(res.status).toBe(200);
  })
})