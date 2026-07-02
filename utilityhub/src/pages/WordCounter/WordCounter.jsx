import { useState } from "react";
import { Link } from "react-router-dom";
import "./WordCounter.css";

function WordCounter() {
  const [text, setText] = useState("");

  const characters = text.length;
  const charactersWithoutSpaces = text.replace(/\s/g, "").length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter((sentence) => sentence.trim()).length
    : 0;
  const paragraphs = text.trim()
    ? text.split(/\n+/).filter((paragraph) => paragraph.trim()).length
    : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  const density = Math.min(100, (words / 500) * 100);

  function clearText() {
    setText("");
  }

  return (
    <main className="word-page">
      <Link className="back-link" to="/">
        Back to Dashboard
      </Link>

      <section className="word-hero">
        <div>
          <h1>Word Counter</h1>
          <p>Write, paste, and measure your text instantly.</p>
        </div>

        <button className="clear-button" type="button" onClick={clearText}>
          Clear
        </button>
      </section>

      <section className="word-layout">
        <div className="editor-panel">
          <textarea
            placeholder="Start typing your content here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="writing-meter">
            <div className="meter-top">
              <span>Writing Density</span>
              <strong>{Math.round(density)}%</strong>
            </div>
            <div className="meter-track">
              <span style={{ width: `${density}%` }} />
            </div>
          </div>
        </div>

        <aside className="stats-panel">
          <div className="stat-card featured">
            <span>Words</span>
            <strong>{words}</strong>
          </div>

          <div className="stat-card">
            <span>Characters</span>
            <strong>{characters}</strong>
          </div>

          <div className="stat-card">
            <span>No Spaces</span>
            <strong>{charactersWithoutSpaces}</strong>
          </div>

          <div className="stat-card">
            <span>Sentences</span>
            <strong>{sentences}</strong>
          </div>

          <div className="stat-card">
            <span>Paragraphs</span>
            <strong>{paragraphs}</strong>
          </div>

          <div className="stat-card">
            <span>Reading Time</span>
            <strong>{readingTime} min</strong>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default WordCounter;