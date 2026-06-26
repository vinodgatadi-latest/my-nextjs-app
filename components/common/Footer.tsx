export default function Footer() {
  return (
    <footer className="bg-light border-top mt-auto py-3">
      <div className="container text-center text-muted">
        © {new Date().getFullYear()} Service Management System
      </div>
    </footer>
  );
}