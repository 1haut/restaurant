export default function Copyright() {
  const year = new Date().getFullYear();
  return <div className="copyright" aria-label="">// © {year}, Havets Skatter //</div>;
}
