const express = require('express')
const db = require('../db/db')

const router = express.Router()

// GET /api/users
router.get('/users', async (req, res) => {
  try {
    const usersArr = await db.getUsers()
    res.json(usersArr)
  } catch (err) {
    //console.error(err)
    res.status(500).send('Server Error')
  }
})

// GET /api/user/:id
router.get('/user/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const user = await db.getUserById(id)
    if (!user) res.status(404).send(`User with id ${id} not found`)
    res.json(user)
  } catch (err) {
    //console.error(err)
    res.status(500).send('Server Error')
  }
})

module.exports = router
