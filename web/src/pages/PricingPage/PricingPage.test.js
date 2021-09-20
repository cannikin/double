import { render } from '@redwoodjs/testing/web'

import PricingPage from './PricingPage'

describe('PricingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PricingPage />)
    }).not.toThrow()
  })
})
