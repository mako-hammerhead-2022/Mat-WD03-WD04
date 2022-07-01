import request from 'supertest'

import server from '../server'
import { getUsers } from '../db/db'

jest.mock('../db/db')

describe('GET /api/users', () => {
  const testUsers = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Eve' },
  ]

  it('responds with an array of users on getUsers resolution', () => {
    getUsers.mockImplementationOnce(() => Promise.resolve(testUsers))

    expect.assertions(4)
    return request(server)
      .get('/api/users')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(testUsers.length)
        expect(res.body[0]).toEqual(testUsers[0])
        expect(res.body[1]).toEqual(testUsers[1])
        expect(res.body[2]).toEqual(testUsers[2])
      })
  })

  it('responds with a 500 status and error on getUsers rejection', () => {
    getUsers.mockImplementationOnce(() => Promise.reject('mock DB error'))

    return request(server)
      .get('/api/users')
      .expect(500)
      .then((res) => {
        expect(res.text).not.toBe('mock DB error') // don't show client db errors
        expect(res.text).toBe('Server Error')
      })
  })
})
