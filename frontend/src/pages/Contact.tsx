import ContactForm from "../components/contact-page/ContactForm.tsx";
import Footer from "../components/footer/Footer.tsx";
import FooterSocials from "../components/footer/FooterSocial.tsx";
import Navbar from "../components/header/Navbar.tsx";

export default function Contact() {
  return (
    <>
      <Navbar />
      <hr />
      <div>
        <h3 className="socials-header-contact">
          Du kan også kontakte oss via våre sosiale medier!
        </h3>
        <FooterSocials />
      </div>
      <ContactForm />
      <hr />
      <Footer />
    </>
  );
}
