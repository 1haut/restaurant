import About from "../components/main-page/About.tsx";
import Footer from "../components/footer/Footer.tsx";
import Navbar from "../components/header/Navbar.tsx";
import ReviewList from "../components/main-page/ReviewList.tsx";
import LogoTest from "../components/main-page/LogoTest.tsx";
import Carousel from "../components/main-page/Carousel.tsx";

export default function Main() {
  return (
    <>
      <Navbar />
      <main>
        <LogoTest />
        <hr />
        <Carousel />
        <hr />
        <About />
        <hr />
        <ReviewList />
      </main>
      <hr />
      <Footer />
    </>
  );
}
