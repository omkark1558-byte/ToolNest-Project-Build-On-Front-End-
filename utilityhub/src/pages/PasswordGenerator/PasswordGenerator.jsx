import { useState } from "react";
import { Link } from "react-router-dom";
import "./PasswordGenerator.css";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  function generatePassword() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  }

  async function copyPassword() {
    if (!password) return;

    await navigator.clipboard.writeText(password);
    alert("Password Copied Successfully!");
  }

  return (
    <main className="password-page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <section className="password-box">
        <h1>🔐 Password Generator</h1>

        <p>
          Generate secure and random passwords with adjustable length.
        </p>

        <div className="form-group">
          <label>Password Length : {length}</label>

          <input
            type="range"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <button
          className="generate-btn"
          type="button"
          onClick={generatePassword}
        >
          Generate Password
        </button>

        {password && (
          <div className="password-result">
            <h2>Your Password</h2>

            <div className="password-output">
              <span>{password}</span>

              <button
                className="copy-btn"
                type="button"
                onClick={copyPassword}
              >
                📋 Copy
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default PasswordGenerator;