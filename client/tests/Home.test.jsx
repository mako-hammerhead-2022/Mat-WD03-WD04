/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home'

require('@testing-library/jest-dom')

const testProducts = [
  { id: 1, name: 'Stick', description: 'Very pointy', price: 2.5 },
  { id: 2, name: 'Paperclip', description: 'Eager to help', price: 10 },
]

describe('<Home />', () => {
  it('renders a descriptive heading', () => {
    render(<Home products={testProducts} />)
    const headingEl = screen.getByRole('heading', {
      level: 2,
      name: /purchase/i,
    })
    expect(headingEl).toBeInTheDocument()
  })

  it('renders a list of products', () => {
    render(<Home products={testProducts} />)
    const productListEl = screen.getByRole('list')
    expect(productListEl).toBeInTheDocument()
    expect(productListEl).toHaveClass('product-list')
  })
})
