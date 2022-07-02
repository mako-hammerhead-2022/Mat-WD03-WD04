import request from 'supertest'

import server from '../server'
import {
  getUsers,
  getUserById,
  getProducts,
  getProductById,
  addProduct,
} from '../db/db'

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

describe('GET /api/products', () => {
  const testProducts = [
    {
      id: 1,
      name: 'Stick',
      description: 'Very pointy',
      price: 2.5,
      quantity: 10,
      image: undefined,
    },
    {
      id: 2,
      name: 'Paperclip',
      description: 'Eager to help',
      price: 10,
      quantity: 1,
      image: undefined,
    },
  ]

  it('responds with an array of products on getProducts resolution', () => {
    getProducts.mockImplementationOnce(() => Promise.resolve(testProducts))

    expect.assertions(3)
    return request(server)
      .get('/api/products')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(testProducts.length)
        expect(res.body[0]).toEqual(testProducts[0])
        expect(res.body[1]).toEqual(testProducts[1])
      })
  })

  it('responds with a 500 status and error on getProducts rejection', () => {
    getProducts.mockImplementationOnce(() => Promise.reject('mock DB error'))

    return request(server)
      .get('/api/products')
      .expect(500)
      .then((res) => {
        expect(res.text).not.toBe('mock DB error') // don't show client db errors
        expect(res.text).toBe('Server Error')
      })
  })
})

describe('GET /api/product/:id', () => {
  const testProduct = {
    id: 2,
    name: 'Paperclip',
    description: 'Eager to help',
    price: 10,
    quantity: 1,
    image: undefined,
  }

  it('responds with a product object on getProductById resolution', () => {
    getProductById.mockImplementationOnce(() => Promise.resolve(testProduct))

    expect.assertions(4)
    return request(server)
      .get(`/api/product/${testProduct.id}`)
      .expect(200)
      .then((res) => {
        expect(res.body.id).toBe(testProduct.id)
        expect(res.body.name).toBe(testProduct.name)
        expect(res.body.description).toBe(testProduct.description)
        expect(res.body.price).toBe(testProduct.price)
      })
  })

  it('responds with a 500 status and error on getProductById rejection', () => {
    getProductById.mockImplementationOnce(() => Promise.reject('mock DB error'))

    expect.assertions(2)
    return request(server)
      .get(`/api/product/${testProduct.id}`)
      .expect(500)
      .then((res) => {
        expect(res.text).not.toBe('mock DB error') // don't show client db errors
        expect(res.text).toBe('Server Error')
      })
  })

  it('responds with a 404 status and error if no product with id exists', () => {
    getProductById.mockImplementationOnce(() => Promise.resolve(undefined))

    expect.assertions(1)
    return request(server)
      .get(`/api/product/${testProduct.id + 1}`)
      .expect(404)
      .then((res) => {
        expect(res.text).toBe(`Product with id ${testProduct.id + 1} not found`)
      })
  })
})

describe('POST /api/product', () => {
  const testProduct = {
    name: 'Test product',
    description: 'Good for testing',
    price: 10.5,
  }
  it('calls the addProduct db function with correct data', () => {
    const fakeAddProduct = jest.fn().mockResolvedValue([7])
    addProduct.mockImplementation(fakeAddProduct)

    expect.assertions(2)
    return request(server)
      .post('/api/product')
      .send(testProduct)
      .expect(200)
      .then((res) => {
        expect(res.text).toContain('ID 7')
        expect(fakeAddProduct).toHaveBeenCalledWith(
          testProduct.name,
          testProduct.description,
          testProduct.price
        )
      })
  })
  it('responds with a 500 status and error if the posted data is malformed', () => {
    const fakeAddProduct = jest.fn().mockResolvedValue([7])
    addProduct.mockImplementation(fakeAddProduct)

    expect.assertions(1)
    return request(server)
      .post('/api/product')
      .send({ name: 'blah', price: '5', description: 'blah blah' })
      .expect(500)
      .then((res) => {
        expect(fakeAddProduct).not.toHaveBeenCalled()
      })
  })
})
