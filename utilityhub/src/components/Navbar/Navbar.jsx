import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        ToolNest
      </Link>

      <div className="nav-right">

        <Link to="/">
          Home
        </Link>

        <a href="#categories">
          Tools
        </a>

        <a href="#faq">
          FAQ
        </a>

        <ThemeToggle />

      </div>

    </nav>
  );
}

export default Navbar;