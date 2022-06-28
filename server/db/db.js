const config = require('./knexfile').development
const connection = require('knex')(config)

function getUsers(db = connection) {
  return db('users').select()
}

module.exports = {
  getUsers,
}
