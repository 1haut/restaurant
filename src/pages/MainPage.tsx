import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";


export default function MainPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr />
      <About />
      <hr />
      <Reviews />
      <hr />
      <Footer />
    </>
  );
}
