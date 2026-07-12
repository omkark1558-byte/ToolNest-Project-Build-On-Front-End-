import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaPalette,
  FaExchangeAlt,
  FaUniversity,
  FaQrcode,
  FaLock,
  FaFileCode,
  FaCode,
  FaUsers,
  FaGlobe,
  FaPercentage,
  FaRulerCombined,
} from "react-icons/fa";

const featuredTools = [
  {
    title: "GST Calculator",
    desc: "Calculate GST instantly.",
    path: "/gst-calculator",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Age Calculator",
    desc: "Calculate your exact age.",
    path: "/age-calculator",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Currency Converter",
    desc: "Live currency conversion.",
    path: "/currency-converter",
    icon: <FaExchangeAlt />,
  },
  {
    title: "QR Generator",
    desc: "Generate QR codes.",
    path: "/qr-generator",
    icon: <FaQrcode />,
  },
  {
    title: "Password Generator",
    desc: "Generate secure passwords.",
    path: "/password-generator",
    icon: <FaLock />,
  },
  {
    title: "JSON Formatter",
    desc: "Format JSON beautifully.",
    path: "/json-formatter",
    icon: <FaCode />,
  },
];
const allTools = [
  { name: "GST Calculator", path: "/gst-calculator", icon: <FaMoneyBillWave /> },
  { name: "Age Calculator", path: "/age-calculator", icon: <FaCalendarAlt /> },
  { name: "Color Palette", path: "/color-palette-generator", icon: <FaPalette /> },
  { name: "Currency Converter", path: "/currency-converter", icon: <FaExchangeAlt /> },
  { name: "EMI Calculator", path: "/emi-calculator", icon: <FaUniversity /> },
  { name: "QR Generator", path: "/qr-generator", icon: <FaQrcode /> },
  { name: "Password Generator", path: "/password-generator", icon: <FaLock /> },
  { name: "Word Counter", path: "/word-counter", icon: <FaFileCode /> },
  { name: "JSON Formatter", path: "/json-formatter", icon: <FaCode /> },
  { name: "Split Bill", path: "/split-bill-calculator", icon: <FaUsers /> },
  { name: "Meta Tag Generator", path: "/meta-tag-generator", icon: <FaGlobe /> },
  { name: "Tip Calculator", path: "/tip-calculator", icon: <FaPercentage /> },
  { name: "Unit Converter", path: "/unit-converter", icon: <FaRulerCombined /> },
  { name: "Resume Builder", path: "/resume-builder", icon: <FaFileAlt /> }
];
const faqs = [
  {
    question: "Is ToolNest free?",
    answer: "Yes, every tool is completely free to use."
  },
  {
    question: "Do I need to create an account?",
    answer: "No. You can use all tools without signing in."
  },
  {
    question: "Can I use ToolNest on mobile?",
    answer: "Yes. ToolNest is fully responsive."
  },
  {
    question: "Will more tools be added?",
    answer: "Yes. New tools will be added regularly."
  }
];

function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [search, setSearch] = useState("");
  const filteredTools = useMemo(() => {
    return allTools.filter((tool) =>
      tool.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);
  return (

    <main className="dashboard">


      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>
      <div className="bg-glow glow3"></div>

      <section className="hero">
        <div className="hero-badge">
          🚀 13 Free Utility Tools
        </div>

        <h1>
          Welcome to <span>ToolNest</span>
        </h1>

        <p>
          Free calculators, generators and developer tools in one place.
        </p>

        <div className="hero-buttons">
          <a href="#categories" className="primary-btn">
            Explore Tools
          </a>

          <a href="#faq" className="secondary-btn">
            Learn More
          </a>
        </div>
      </section>
      <section className="search-section">
        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search any tool..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      </section>

      <section id="categories" className="categories">

        <h2 className="section-title">
          Explore <span>All Tools</span>
        </h2> <div className="category-grid">

          {filteredTools.map((tool, index) => (

            <Link
              key={index}
              to={tool.path}
              className="category-item"
            >

              <div className="tool-icon">
                {tool.icon}
              </div>

              <span>{tool.name}</span>

            </Link>

          ))}

        </div>

      </section>
      <section className="stats">

        <div className="stat-card">
          <h2>14+</h2>
          <p>Free Tools</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Free Forever</p>
        </div>

        <div className="stat-card">
          <h2>Fast</h2>
          <p>Instant Results</p>
        </div>

        <div className="stat-card">
          <h2>Secure</h2>
          <p>No Data Stored</p>
        </div>

      </section>
      <section className="trusted">
        <p className="trusted-title">Trusted by Developers Worldwide</p>

        <div className="trusted-grid">

          <div className="trusted-card">
            <h2>12+</h2>
            <span>Developer Tools</span>
          </div>

          <div className="trusted-card">
            <h2>100%</h2>
            <span>Free Access</span>
          </div>

          <div className="trusted-card">
            <h2>Fast</h2>
            <span>Instant Results</span>
          </div>

          <div className="trusted-card">
            <h2>24/7</h2>
            <span>Always Available</span>
          </div>

        </div>
      </section>
      <section className="features">

        <h2 className="section-title">
          Why Choose <span>ToolNest?</span>
        </h2>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Get instant results without waiting.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data never leaves your browser.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Works perfectly on mobile and desktop.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Easy to Use</h3>
            <p>Simple interface with modern design.</p>
          </div>

        </div>

      </section>

      <section className="testimonials">

        <h2 className="section-title">
          What Users Say
        </h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <div className="stars">★★★★★</div>

            <p>
              ToolNest saves me a lot of time. The GST Calculator
              and Currency Converter are amazing.
            </p>

            <h4>Rahul Sharma</h4>

            <span>Frontend Developer</span>

          </div>

          <div className="testimonial-card">

            <div className="stars">★★★★★</div>

            <p>
              Beautiful UI and very fast tools.
              Everything works perfectly.
            </p>

            <h4>Priya Patel</h4>

            <span>UI Designer</span>

          </div>

          <div className="testimonial-card">

            <div className="stars">★★★★★</div>

            <p>
              I use ToolNest every day for JSON formatting
              and QR generation.
            </p>

            <h4>Aman Gupta</h4>

            <span>Software Engineer</span>

          </div>

        </div>

      </section>
      <section id="faq" className="faq">

        <h2 className="section-title">
          Frequently Asked Questions
        </h2>

        {
          faqs.map((faq, index) => (
            <div
              className="faq-item"
              key={index}
            >

              <div
                className="faq-question"
                onClick={() => setActiveIndex(
                  activeIndex === index ? null : index
                )}
              >

                <span>{faq.question}</span>

                <span>
                  {activeIndex === index ? "-" : "+"}
                </span>

              </div>

              {
                activeIndex === index && (

                  <div className="faq-answer">

                    {faq.answer}

                  </div>

                )
              }

            </div>
          ))
        }

      </section>

      <section className="featured-tools">

        <h2 className="section-title">
          Featured Tools
        </h2>

        <div className="featured-grid">

          {featuredTools.map((tool, index) => (

            <Link
              key={index}
              to={tool.path}
              className="featured-card"
            >

              <div className="featured-icon">
                {tool.icon}
              </div>

              <h3>{tool.title}</h3>

              <p>{tool.desc}</p>

            </Link>

          ))}

        </div>

      </section>
    </main>
  );
}

export default Dashboard;