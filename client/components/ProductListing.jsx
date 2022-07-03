import React from 'react'
import { useSelector } from 'react-redux'

function ProductListing(props) {
  const { id } = props
  const { name, description, price, image } = useSelector((state) =>
    state.products.find((p) => p.id === id)
  )

  const currency = new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
  })

  return (
    <div className="product-listing">
      <h4>{name}</h4>
      {image ? (
        <img src={`/images/${image}`} />
      ) : (
        <img src="/images/placeholder.svg" />
      )}
      <div className="product-description">{description}</div>
      <p>{currency.format(price)}</p>
    </div>
  )
}

export default ProductListing
