import request from 'supertest'

import app from '../../../src/app'

const createUser = body => {
  const httpRequest = request(app).post('/api/users')
  httpRequest.send(body)
  httpRequest.set('Accept', 'application/json')
  httpRequest.set('Origin', 'http://localhost:3000')
  return httpRequest
}

describe('Create User', () => {
  it('should return the user', async () => {
    const body = {
      email: 'ak.test@yopmail.com',
      password: 'Hello123',
      firstName: 'Apichan',
      lastName: 'Test',
    }
    const res = await createUser(body).expect(200)
    expect(res.body.email).toBe(body.email)
    expect(res.body.firstName).toBe(body.firstName)
    expect(res.body.lastName).toBe(body.lastName)
  })

  it('should throw EMAIL_ALREADY_EXISTS', async () => {
    const body = {
      email: 'ak.test@yopmail.com',
      password: 'Hello123',
      firstName: 'Apichan',
      lastName: 'Test',
    }
    const res = await createUser(body).expect(422)
    expect(res.body.error.message).toBe('EMAIL_ALREADY_EXISTS')
  })
})
