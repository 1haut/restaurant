export default function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>// © {year}, Havets Skatter //</p>
    </div>
  );
}
