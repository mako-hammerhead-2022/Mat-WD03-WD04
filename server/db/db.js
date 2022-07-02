const config = require('./knexfile').development
const connection = require('knex')(config)

function getUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  return db('users').select().where({ id }).first()
}

function getProducts(db = connection) {
  return db('products').select()
}

function getProductById(id, db = connection) {
  return db('products').select().where({ id }).first()
}

function addProduct(name, description, price, db = connection) {
  return db('products').insert({ name, description, price })
}

module.exports = {
  getUsers,
  getUserById,
  getProducts,
  getProductById,
  addProduct,
}
