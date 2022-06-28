const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getUsers', () => {
  it('returns an array with 3 users', async () => {
    const actual = await db.getUsers(testDb)

    expect(actual).toHaveLength(3)
    expect(actual[0].id).toBe(1)
    expect(actual[0].username).toBe('Alice')
  })
})

describe('getUserById', () => {
  it('returns a single user object with correct details', async () => {
    const actual = await db.getUserById(2, testDb)

    expect(typeof actual).toBe('object')
    expect(actual.id).toBe(2)
    expect(actual.username).toBe('Bob')
  })
})

describe('getProducts', () => {
  it('returns an array of products', async () => {
    const actual = await db.getProducts(testDb)

    expect(actual).toHaveLength(2)
    expect(actual[0].name).toBe('Stick')
  })
})

describe('getProductById', () => {
  it('returns a product object with correct details', async () => {
    const actual = await db.getProductById(2, testDb)

    expect(typeof actual).toBe('object')
    expect(actual.id).toBe(2)
    expect(actual.name).toBe('Paperclip')
    expect(actual.description).toBe('Eager to help')
    expect(actual.price).toBe(10)
    expect(actual.quantity).toBe(1)
  })
})
