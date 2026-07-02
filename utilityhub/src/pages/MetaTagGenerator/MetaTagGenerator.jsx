import { useState } from "react";
import { Link } from "react-router-dom";
import "./MetaTagGenerator.css";

function MetaTagGenerator() {
  const [title, setTitle] = useState("ToolNest");
  const [description, setDescription] = useState("Free everyday tools for quick calculations.");
  const [url, setUrl] = useState("https://example.com");
  const [image, setImage] = useState("https://example.com/preview.png");

  const metaTags = `<title>${title}</title>
<meta name="description" content="${description}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${image}" />
<meta name="twitter:card" content="summary_large_image" />`;

  async function copyTags() {
    await navigator.clipboard.writeText(metaTags);
    alert("Meta tags copied");
  }

  return (
    <main className="meta-page">
      <Link className="back-link" to="/">Back to Dashboard</Link>

      <section className="meta-hero">
        <h1>Meta Tag Generator</h1>
        <p>Create SEO and social sharing meta tags.</p>
      </section>

      <section className="meta-layout">
        <div className="meta-form">
          <label>
            Page Title
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>

          <label>
            Description
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>

          <label>
            Page URL
            <input value={url} onChange={(e) => setUrl(e.target.value)} />
          </label>

          <label>
            Preview Image URL
            <input value={image} onChange={(e) => setImage(e.target.value)} />
          </label>
        </div>

        <div className="meta-output">
          <div className="preview-card">
            <span>Social Preview</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <small>{url}</small>
          </div>

          <pre>{metaTags}</pre>

          <button className="primary-button" type="button" onClick={copyTags}>
            Copy Meta Tags
          </button>
        </div>
      </section>
    </main>
  );
}

export default MetaTagGenerator;