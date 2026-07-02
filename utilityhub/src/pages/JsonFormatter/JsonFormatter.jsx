import { useState } from "react";
import { Link } from "react-router-dom";
import "./JsonFormatter.css";

function JsonFormatter() {
  const [jsonText, setJsonText] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [error, setError] = useState("");

  function formatJson() {
    try {
      const parsedJson = JSON.parse(jsonText);
      const prettyJson = JSON.stringify(parsedJson, null, 2);

      setFormattedJson(prettyJson);
      setError("");
    } catch {
      setFormattedJson("");
      setError("Invalid JSON. Please check brackets, commas, and quotes.");
    }
  }

  function minifyJson() {
    try {
      const parsedJson = JSON.parse(jsonText);
      const minifiedJson = JSON.stringify(parsedJson);

      setFormattedJson(minifiedJson);
      setError("");
    } catch {
      setFormattedJson("");
      setError("Invalid JSON. Please check brackets, commas, and quotes.");
    }
  }

  function clearJson() {
    setJsonText("");
    setFormattedJson("");
    setError("");
  }

  async function copyJson() {
    if (!formattedJson) return;
    await navigator.clipboard.writeText(formattedJson);
    alert("JSON copied");
  }

  return (
    <main className="json-page">
      <Link className="back-link" to="/">
        Back to Dashboard
      </Link>

      <section className="json-hero">
        <div>
          <h1>JSON Formatter</h1>
          <p>Format, validate, minify, and copy JSON instantly.</p>
        </div>

        <span className={error ? "status-badge error" : "status-badge"}>
          {error ? "Invalid JSON" : "Ready"}
        </span>
      </section>

      <section className="json-toolbar">
        <button className="primary-button" type="button" onClick={formatJson}>
          Format JSON
        </button>

        <button className="secondary-button" type="button" onClick={minifyJson}>
          Minify
        </button>

        <button className="secondary-button" type="button" onClick={copyJson}>
          Copy Output
        </button>

        <button className="danger-button" type="button" onClick={clearJson}>
          Clear
        </button>
      </section>

      {error && <p className="json-error">{error}</p>}

      <section className="json-layout">
        <div className="json-panel">
          <div className="panel-header">
            <span>Input JSON</span>
          </div>

          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            placeholder='Paste JSON here, example: {"name":"Omkar","tool":"ToolNest"}'
          />
        </div>

        <div className="json-panel output-panel">
          <div className="panel-header">
            <span>Formatted Output</span>
          </div>

          <pre>{formattedJson || "Formatted JSON will appear here..."}</pre>
        </div>
      </section>
    </main>
  );
}

export default JsonFormatter;