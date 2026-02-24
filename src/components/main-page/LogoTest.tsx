import NewLogo from "../../assets/img/test4.png";

export default function LogoTest() {
  return (
    <section className="page-logo">
      <img className="page-logo-element" src={NewLogo} loading="lazy"/>
      <h1>Havets Skatter</h1>
      <h2>Oslo</h2>
    </section>
  );
}
