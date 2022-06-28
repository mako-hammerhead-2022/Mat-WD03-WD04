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
