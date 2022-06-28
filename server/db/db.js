const config = require('./knexfile').development
const connection = require('knex')(config)

function getUsers(db = connection) {
  return db('users').select()
}

function getUserById(id, db = connection) {
  return db('users').select().where({ id }).first()
}

module.exports = {
  getUsers,
  getUserById,
}
