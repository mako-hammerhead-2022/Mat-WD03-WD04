import React from 'react'
import { useSelector } from 'react-redux'

function ProductListing(props) {
  const { id } = props
  const { name, description, price } = useSelector((state) =>
    state.products.find((p) => p.id === id)
  )

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
