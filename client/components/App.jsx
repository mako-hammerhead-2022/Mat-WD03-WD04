import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'

import { getProducts } from '../apiClient'
import { fetchProducts } from '../actions'

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home products={products} />} />
      </Routes>
    </div>
  )
}

export default App
