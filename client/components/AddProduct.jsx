import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { postNewProduct } from '../actions'

function AddProduct() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    dispatch(
      postNewProduct(
        formData.name,
        formData.description,
        Number(formData.price)
      )
    )
  }

  const handleChange = (evt) => {
    const key = evt.target.name
    setFormData((prev) => ({ ...prev, [key]: evt.target.value }))
  }

  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  )
}

export default AddProduct
