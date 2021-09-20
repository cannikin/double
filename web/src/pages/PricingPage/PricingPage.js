import PricingCell from 'src/components/PricingCell'
import { useAuth } from '@redwoodjs/auth'

const PricingPage = () => {
  const { isAuthenticated, logIn, logOut } = useAuth()

  return (
    <>
      <header>
        <button type="button" onClick={isAuthenticated ? logOut : logIn}>
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
      </header>
      <PricingCell />
    </>
  )
}

export default PricingPage
