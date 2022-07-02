import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'

import { getProducts } from '../apiClient'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => console.error(err))
  })

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
      </Routes>
    </div>
  )
}

export default App
