import About from "../components/main-page/About.tsx";
import Footer from "../components/footer/Footer.tsx";
import Navbar from "../components/header/Navbar.tsx";
import ReviewList from "../components/main-page/ReviewList.tsx";
import SectionLogo from "../components/main-page/SectionLogo.tsx";
import Carousel from "../components/main-page/Carousel.tsx";
import Nudge from "../components/main-page/Nudge.tsx";

export default function Main() {
  return (
    <>
      <Navbar />
      <main>
        <SectionLogo />
        <hr />
        <Carousel />
        <hr />
        <About />
        <hr />
        <ReviewList />
        <hr />
        <Nudge />
      </main>
      <hr />
      <Footer />
    </>
  );
}