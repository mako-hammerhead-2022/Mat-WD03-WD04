import request from 'supertest'

import server from '../server'
import { getUsers, getUserById } from '../db/db'

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

describe('GET /api/user/:id', () => {
  const testUser = { id: 3, name: 'Eve' }

  it('responds with a user object on getUserById resolution', () => {
    getUserById.mockImplementationOnce(() => Promise.resolve(testUser))

    expect.assertions(2)
    return request(server)
      .get(`/api/user/${testUser.id}`)
      .expect(200)
      .then((res) => {
        expect(res.body.id).toBe(testUser.id)
        expect(res.body.name).toBe(testUser.name)
      })
  })

  it('responds with a 500 status and error on getUserById rejection', () => {
    getUserById.mockImplementationOnce(() => Promise.reject('mock DB error'))

    expect.assertions(2)
    return request(server)
      .get(`/api/user/${testUser.id}`)
      .expect(500)
      .then((res) => {
        expect(res.text).not.toBe('mock DB error') // don't show client db errors
        expect(res.text).toBe('Server Error')
      })
  })

  it('responds with a 404 status and error if no user with id exists', () => {
    getUserById.mockImplementationOnce(() => Promise.resolve(undefined))

    expect.assertions(1)
    return request(server)
      .get(`/api/user/${testUser.id + 1}`)
      .expect(404)
      .then((res) => {
        expect(res.text).toBe(`User with id ${testUser.id + 1} not found`)
      })
  })
})
