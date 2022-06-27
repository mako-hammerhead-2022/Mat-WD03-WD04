import React from 'react'

function ProductListing(props) {
  const { name, description, price } = props

  const currency = new Intl.NumberFormat('en-NZ', {
    style: 'currency',
    currency: 'NZD',
  })

  return (
    <>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{currency.format(price)}</p>
    </>
  )
}

export default ProductListing
