const express = require('express')

const router = express.Router()

// GET /api/
router.get('/', (req, res) => {
  try {
    res.json({ message: 'Hello world!' })
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

module.exports = router
