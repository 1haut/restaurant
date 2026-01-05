import './styles.css'
import HeaderIcon from './components/HeaderIcon'
import CompanyLogo from './assets/icons/placeholder-logo.svg'
import HamburgerMenu from './assets/icons/hamburger-menu.svg'

export default function App(){
  return (
    <>
      <header className='navbar'>
        <HeaderIcon src={CompanyLogo} />
        <HeaderIcon src={HamburgerMenu} />
      </header>
      <nav className='dropdown'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </nav>
    </>
  )
}