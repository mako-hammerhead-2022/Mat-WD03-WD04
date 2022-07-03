import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListing from './ProductListing'

import { fetchAllProducts } from '../actions'

function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <div className="products-home">
      <h2>Items Available to Purchase</h2>
      <ul className="product-list">
        {products.map((p) => (
          <li key={`product${p.id}`}>
            <ProductListing {...p} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
