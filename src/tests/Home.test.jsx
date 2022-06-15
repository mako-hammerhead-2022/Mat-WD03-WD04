import { render, screen } from '@testing-library/react'
import Home from '../components/Home'

describe('<Home />', () => {
  it('renders a descriptive heading', () => {
    render(<Home />)
    const headingEl = screen.getByRole('heading', {
      level: 2,
      name: /purchase/i,
    })
    expect(headingEl).toBeInTheDocument()
  })

  it('renders a list of products', () => {
    render(<Home />)
    const productListEl = screen.getByRole('list')
    expect(productListEl).toBeInTheDocument()
    expect(productListEl).toHaveClass('product-list')
  })
})
