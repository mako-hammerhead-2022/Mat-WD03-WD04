import React from 'react'
import ProductListing from './ProductListing'

function Home(props) {
  const { products } = props

  return (
    <>
      <h2>Items Available to Purchase</h2>
      <ul className="product-list">
        {products.map((p) => (
          <li key={`product${p.id}`}>
            <ProductListing {...p} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
