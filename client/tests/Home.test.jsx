/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home'

import { useDispatch, useSelector } from 'react-redux'

require('@testing-library/jest-dom')

jest.mock('react-redux')

const testProducts = [
  { id: 1, name: 'Stick', description: 'Very pointy', price: 2.5 },
  { id: 2, name: 'Paperclip', description: 'Eager to help', price: 10 },
]

const fakeDispatch = jest.fn()

describe('<Home />', () => {
  it('renders a descriptive heading', () => {
    useDispatch.mockReturnValue(fakeDispatch)
    useSelector.mockImplementation(() => testProducts)
    render(<Home />)
    const headingEl = screen.getByRole('heading', {
      level: 2,
      name: /purchase/i,
    })
    expect(headingEl).toBeInTheDocument()
  })

  it('renders a list of products', () => {
    useDispatch.mockReturnValue(fakeDispatch)
    useSelector.mockImplementation(() => testProducts)
    render(<Home />)
    const productListEl = screen.getByRole('list')
    expect(productListEl).toBeInTheDocument()
    expect(productListEl).toHaveClass('product-list')
  })
})
