import './styles.css'
import Footer from './components/Footer'
import Dropdown from './components/Dropdown'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <>
      <Navbar />
      <hr />
      <Dropdown />
      <hr />
      <Reviews />
      <hr />
      <Footer />
    </>
  )
}

