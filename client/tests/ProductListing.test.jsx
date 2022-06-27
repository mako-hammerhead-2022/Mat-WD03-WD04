/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductListing from '../components/ProductListing'

require('@testing-library/jest-dom')

describe('<ProductListing />', () => {
  it('renders a product name', () => {
    render(<ProductListing name="Stick" />)
    const nameEl = screen.getByText('Stick')
    expect(nameEl).toBeInTheDocument()
  })
  it('renders a product description', () => {
    render(<ProductListing name="Stick" description="Very pointy" />)
    const descEl = screen.getByText('Very pointy')
    expect(descEl).toBeInTheDocument()
  })
  it('renders a product price', () => {
    render(
      <ProductListing name="Stick" description="Very pointy" price="2.5" />
    )
    const priceEl = screen.getByText('$2.50')
    expect(priceEl).toBeInTheDocument()
  })
})
