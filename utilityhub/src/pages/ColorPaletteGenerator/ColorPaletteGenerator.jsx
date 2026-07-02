import { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorPaletteGenerator.css";

function ColorPaletteGenerator() {
  const [colors, setColors] = useState([
    "#2563eb",
    "#16a34a",
    "#f97316",
    "#dc2626",
    "#7c3aed",
  ]);

  function generateColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${hex.padStart(6, "0")}`;
  }

  function generatePalette() {
    const newColors = Array.from({ length: 5 }, generateColor);
    setColors(newColors);
  }

  async function copyColor(color) {
    await navigator.clipboard.writeText(color);
    alert(`${color} copied`);
  }

  return (
    <main className="palette-page">
      <Link className="back-link" to="/">
        ← Back to Dashboard
      </Link>

      <section className="palette-box">
        <h1 className="tool-title">🎨 Color Palette Generator</h1>

        <p className="tool-subtitle">
          Generate beautiful random color palettes and copy any HEX color with one click.
        </p>

        <button
          className="primary-button"
          type="button"
          onClick={generatePalette}
        >
          🎲 Generate New Palette
        </button>

        <div className="palette-grid">
          {colors.map((color, index) => (
            <button
              key={index}
              type="button"
              className="color-card"
              onClick={() => copyColor(color)}
            >
              <div
                className="color-preview"
                style={{ backgroundColor: color }}
              />

              <div className="color-info">
                <span>HEX Code</span>
                <strong>{color}</strong>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ColorPaletteGenerator;