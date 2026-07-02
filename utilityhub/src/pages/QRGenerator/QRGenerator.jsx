import { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import "./QRGenerator.css";

function QRGenerator() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");

  async function generateQR() {
    if (!text.trim()) {
      alert("Please enter text or URL");
      return;
    }

    const url = await QRCode.toDataURL(text);
    setQrCode(url);
  }

  function downloadQR() {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "ToolNest-QR.png";
    link.click();
  }

  async function copyText() {
    if (!text) return;

    await navigator.clipboard.writeText(text);
    alert("Copied Successfully!");
  }

  return (
    <main className="qr-page">

      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <section className="qr-box">

        <h1>📱 QR Code Generator</h1>

        <p>
          Generate beautiful QR Codes for URLs, text, emails and more.
        </p>

        <div className="form-group">

          <label>Enter Text or URL</label>

          <input
            type="text"
            placeholder="https://example.com"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

        </div>

        <button
          className="generate-btn"
          type="button"
          onClick={generateQR}
        >
          Generate QR Code
        </button>

        {qrCode && (

          <div className="result-box">

            <h2>Your QR Code</h2>

            <div className="qr-image">
              <img src={qrCode} alt="QR Code" />
            </div>

            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                marginTop: "20px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="download-btn"
                onClick={downloadQR}
              >
                📥 Download
              </button>

              <button
                className="download-btn"
                onClick={copyText}
              >
                📋 Copy Text
              </button>

            </div>

          </div>

        )}

      </section>

    </main>
  );
}

export default QRGenerator;