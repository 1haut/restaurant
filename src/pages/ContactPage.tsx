import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import FooterSocials from "../components/FooterSocial";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <hr />
      <FooterSocials headline="Du kan også sende oss melding via våre sosiale medier!" />
      <ContactForm />
      <hr />
      <Footer />
    </>
  );
}