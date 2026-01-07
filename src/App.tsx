import './styles.css'
import HeaderIcon from './components/HeaderIcon'
import Footer from './components/Footer'
import CompanyLogo from './assets/icons/placeholder-logo.svg'
import HamburgerMenu from './assets/icons/hamburger-menu.svg'
import { information } from './info'

export default function App() {
  return (
    <>
      <header className='navbar'>
        <HeaderIcon src={CompanyLogo} />
        <HeaderIcon src={HamburgerMenu} className='hamburger-menu' />
      </header>
      <hr />
      <nav className='dropdown'>
        <ul>
          {information.navbarOptions.map((option) => <li>{option}</li>)}
        </ul>
      </nav>
      <Footer />
    </>
  )
}

