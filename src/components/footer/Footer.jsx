import { Link } from "react-router-dom";
export default function Footer() {
  const date = new Date();
  const today = date.getFullYear();

  return (
    <footer className="footer bg-darker-brown">
      <div className="wrapper">
        <div className="footer-text">
          <p className="footer-copyright text-body-sm text-center">
            &copy;{today} Kawusia - wszelkie prawa zastrzeżone
          </p>
        </div>
        <div className="footer-links">
          <ul>
            <Link
              to="/polityka-prywatnosci"
            >
              <p className="text-right">Polityka prywatności</p>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
