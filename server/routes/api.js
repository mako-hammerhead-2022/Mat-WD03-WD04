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

module.exports = router
