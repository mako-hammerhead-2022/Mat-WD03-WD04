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

// GET /api/products
router.get('/products', async (req, res) => {
  try {
    const productsArr = await db.getProducts()
    res.json(productsArr)
  } catch (err) {
    //console.error(err)
    res.status(500).send('Server Error')
  }
})

// GET /api/product/:id
router.get('/product/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const product = await db.getProductById(id)
    if (!product) res.status(404).send(`Product with id ${id} not found`)
    res.json(product)
  } catch (err) {
    //console.error(err)
    res.status(500).send('Server Error')
  }
})

// POST /api/product
router.post('/product', async (req, res) => {
  const { name, description, price } = req.body

  if (
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof price !== 'number'
  ) {
    return res.status(500).send('POST data malformed')
  }
  try {
    const newIds = await db.addProduct(name, description, price)
    res.status(200).send(`Added new item with ID ${newIds[0]}`)
  } catch (err) {
    res.status(500).send('Server Error')
  }
})

module.exports = router
