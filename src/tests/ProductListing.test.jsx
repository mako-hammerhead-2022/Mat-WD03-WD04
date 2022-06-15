import { render, screen } from '@testing-library/react'
import ProductListing from '../components/ProductListing'

describe('<ProductListing />', () => {
  it('renders a product name', () => {
    render(<ProductListing name="A stick" />)
    const nameEl = screen.getByText('A stick')
    expect(nameEl).toBeInTheDocument()
  })
  it('renders a product description', () => {
    render(<ProductListing name="A stick" description="Very pointy" />)
    const descEl = screen.getByText('Very pointy')
    expect(descEl).toBeInTheDocument()
  })
  it('renders a product price', () => {
    render(
      <ProductListing name="A stick" description="Very pointy" price="2.5" />
    )
    const priceEl = screen.getByText('$2.50')
    expect(priceEl).toBeInTheDocument()
  })
})
