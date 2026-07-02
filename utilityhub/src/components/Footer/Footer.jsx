import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>ToolNest</h2>

        <p>
          Free calculators and developer tools for everyone.
        </p>

      </div>

      <div className="footer-links">

        <a
          href="https://mail.google.com/mail/u/1/#inbox"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://www.linkedin.com/in/omkarkale2004/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/omkark1558-byte"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ToolNest • Built with <FaHeart className="heart" /> by
          <strong> Omkar Kale</strong>
        </p>

      </div>

    </footer>
  );
}

export default Footer;