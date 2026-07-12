import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Tool<span>Nest</span>
      </Link>

      <div className="nav-right">

        <Link to="/" className="nav-link">
          Home
        </Link>

        <a href="#categories" className="nav-link">
          Tools
        </a>

        <a href="#faq" className="nav-link">
          FAQ
        </a>

        <ThemeToggle />

      </div>

    </nav>
  );
}

export default Navbar;