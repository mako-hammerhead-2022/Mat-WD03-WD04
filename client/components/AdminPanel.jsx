import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AddProduct from './AddProduct'

import { fetchAllProducts } from '../actions'

function AdminPanel() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div>
      <h2>Admin Panel</h2>
      <div className="product-list-admin">
        <h3>Products</h3>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </div>
      <AddProduct />
    </div>
  )
}

export default AdminPanel
