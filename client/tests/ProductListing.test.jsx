/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductListing from '../components/ProductListing'

import { useSelector } from 'react-redux'

require('@testing-library/jest-dom')

jest.mock('react-redux')

const testProduct = {
  id: 1,
  name: 'Stick',
  description: 'Very pointy',
  price: 2.5,
}

describe('<ProductListing />', () => {
  useSelector.mockImplementation(() => testProduct)
  it('renders a product name', () => {
    render(<ProductListing id={testProduct.id} />)
    const nameEl = screen.getByText('Stick')
    expect(nameEl).toBeInTheDocument()
  })
  it('renders a product description', () => {
    render(<ProductListing id={testProduct.id} />)
    const descEl = screen.getByText('Very pointy')
    expect(descEl).toBeInTheDocument()
  })
  it('renders a product price', () => {
    render(<ProductListing id={testProduct.id} />)
    const priceEl = screen.getByText('$2.50')
    expect(priceEl).toBeInTheDocument()
  })
})
