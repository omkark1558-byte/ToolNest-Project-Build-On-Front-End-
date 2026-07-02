// import { Link } from "react-router-dom";
// import "./Dashboard.css";

// import {
//   FaMoneyBillWave,
//   FaCalendarAlt,
//   FaPalette,
//   FaExchangeAlt,
//   FaUniversity,
//   FaQrcode,
//   FaLock,
//   FaFileCode,
//   FaCode,
//   FaUsers,
//   FaGlobe,
//   FaPercentage,
//   FaRulerCombined,
// } from "react-icons/fa";

// const tools = [
//   {
//     title: "GST Calculator",
//     path: "/gst-calculator",
//     icon: <FaMoneyBillWave />,
//     description: "Calculate GST amount instantly."
//   },
//   {
//     title: "Age Calculator",
//     path: "/age-calculator",
//     icon: <FaCalendarAlt />,
//     description: "Calculate your exact age."
//   },
//   {
//     title: "Color Palette Generator",
//     path: "/color-palette-generator",
//     icon: <FaPalette />,
//     description: "Generate beautiful color palettes."
//   },
//   {
//     title: "Currency Converter",
//     path: "/currency-converter",
//     icon: <FaExchangeAlt />,
//     description: "Convert currencies quickly."
//   },
//   {
//     title: "EMI Calculator",
//     path: "/emi-calculator",
//     icon: <FaUniversity />,
//     description: "Estimate monthly EMI."
//   },
//   {
//     title: "QR Generator",
//     path: "/qr-generator",
//     icon: <FaQrcode />,
//     description: "Generate QR codes."
//   },
//   {
//     title: "Password Generator",
//     path: "/password-generator",
//     icon: <FaLock />,
//     description: "Generate secure passwords."
//   },
//   {
//     title: "Word Counter",
//     path: "/word-counter",
//     icon: <FaFileCode />,
//     description: "Count words and characters."
//   },
//   {
//     title: "JSON Formatter",
//     path: "/json-formatter",
//     icon: <FaCode />,
//     description: "Format JSON data."
//   },
//   {
//     title: "Split Bill Calculator",
//     path: "/split-bill-calculator",
//     icon: <FaUsers />,
//     description: "Split bills easily."
//   },
//   {
//     title: "Meta Tag Generator",
//     path: "/meta-tag-generator",
//     icon: <FaGlobe />,
//     description: "Generate SEO meta tags."
//   },
//   {
//     title: "Tip Calculator",
//     path: "/tip-calculator",
//     icon: <FaPercentage />,
//     description: "Calculate restaurant tips."
//   },
//   {
//     title: "Unit Converter",
//     path: "/unit-converter",
//     icon: <FaRulerCombined />,
//     description: "Convert units instantly."
//   }
// ];


// function Dashboard() {
//   return (
//     <main className="dashboard">
//       <section className="hero">
//         <h1>ToolNest Dashboard</h1>
//         <p>Free calculators and generators for quick everyday use.</p>
//       </section>

//       <section className="tools-grid">
//         <Link className="tool-card" to="/gst-calculator">
//           <FaMoneyBillWave className="tool-icon" />
//           {/* <h2>GST Calculator</h2> */}
//           <p>Calculate GST amount and total price instantly.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/age-calculator">
//           <FaCalendarAlt className="tool-icon" />
//           {/* <h2>Age Calculator</h2> */}
//           <p>Calculate your exact age in years, months, and days.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/color-palette-generator">
//           <FaPalette className="tool-icon" />
//           {/* <h2>Color Palette Generator</h2> */}
//           <p>Generate color palettes and copy hex codes.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/currency-converter">
//           <FaExchangeAlt className="tool-icon" />
//           {/* <h2>Currency Converter</h2> */}
//           <p>Convert common currencies with quick reference rates.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/emi-calculator">
//           <FaUniversity className="tool-icon" />
//           {/* <h2>EMI Calculator</h2> */}
//           <p>Estimate monthly loan payments quickly.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/qr-generator">
//           <FaQrcode className="tool-icon" />
//           {/* <h2>QR Generator</h2> */}
//           <p>Create QR codes from links or text.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/password-generator">
//           <FaLock className="tool-icon" />
//           {/* <h2>Password Generator</h2> */}
//           <p>Generate strong random passwords instantly.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/word-counter">
//           <FaFileCode className="tool-icon" />
//           {/* <h2>Word Counter</h2> */}
//           <p>Analyze words, characters, reading time, and writing density.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/json-formatter">
//           <FaCode className="tool-icon" />
//           {/* <h2>JSON Formatter</h2> */}
//           <p>Format, validate, minify, and copy JSON data.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/split-bill-calculator">
//           <FaUsers className="tool-icon" />
//           {/* <h2>Split Bill Calculator</h2> */}
//           <p>Split bills with tip between multiple people.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/meta-tag-generator">
//           <FaGlobe className="tool-icon" />
//           {/* <h2>Meta Tag Generator</h2> */}
//           <p>Create SEO and social sharing meta tags.</p>
//           <span>Open Tool</span>
//         </Link>

//         <Link className="tool-card" to="/tip-calculator">
//           <FaPercentage className="tool-icon" />
//           {/* <h2>Tip Calculator</h2> */}
//           <p>Calculate tip and total bill amount quickly.</p>
//           <span>Open Tool</span>
//         </Link>

//       </section>
//     </main>
//   );
// }

// export default Dashboard;

import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useState } from "react";

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
          <button className="primary-btn">
            Explore Tools
          </button>

          <button className="secondary-btn">
            Free Forever
          </button>
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

      {/* <section className="tools-grid">

        <Link className="tool-card" to="/gst-calculator">
          <div className="tool-icon">
            <FaMoneyBillWave />
          </div>

          <h3>GST Calculator</h3>

          <p>Calculate GST amount instantly.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/age-calculator">
          <div className="tool-icon">
            <FaCalendarAlt />
          </div>

          <h3>Age Calculator</h3>

          <p>Calculate your exact age.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/color-palette-generator">
          <div className="tool-icon">
            <FaPalette />
          </div>

          <h3>Color Palette Generator</h3>

          <p>Create beautiful color palettes.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/currency-converter">
          <div className="tool-icon">
            <FaExchangeAlt />
          </div>

          <h3>Currency Converter</h3>

          <p>Convert currencies instantly.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/emi-calculator">
          <div className="tool-icon">
            <FaUniversity />
          </div>

          <h3>EMI Calculator</h3>

          <p>Estimate monthly EMI.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/qr-generator">
          <div className="tool-icon">
            <FaQrcode />
          </div>

          <h3>QR Generator</h3>

          <p>Create QR Codes instantly.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/password-generator">
          <div className="tool-icon">
            <FaLock />
          </div>

          <h3>Password Generator</h3>

          <p>Generate secure passwords.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/word-counter">
          <div className="tool-icon">
            <FaFileCode />
          </div>

          <h3>Word Counter</h3>

          <p>Count words and characters.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/json-formatter">
          <div className="tool-icon">
            <FaCode />
          </div>

          <h3>JSON Formatter</h3>

          <p>Format JSON instantly.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/split-bill-calculator">
          <div className="tool-icon">
            <FaUsers />
          </div>

          <h3>Split Bill</h3>

          <p>Split bills easily.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/meta-tag-generator">
          <div className="tool-icon">
            <FaGlobe />
          </div>

          <h3>Meta Tag Generator</h3>

          <p>Create SEO meta tags.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/tip-calculator">
          <div className="tool-icon">
            <FaPercentage />
          </div>

          <h3>Tip Calculator</h3>

          <p>Calculate restaurant tips.</p>

          <span>Open Tool →</span>
        </Link>

        <Link className="tool-card" to="/unit-converter">
          <div className="tool-icon">
            <FaRulerCombined />
          </div>

          <h3>Unit Converter</h3>

          <p>Convert units instantly.</p>

          <span>Open Tool →</span>
        </Link>

      </section> */}

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
     <section id="categories" className="categories">

        <h2 className="section-title">
          Popular Utilities
        </h2>

        <div className="category-grid">

          <Link to="/gst-calculator" className="category-item">
            <FaMoneyBillWave className="category-icon gst" />
            <span>GST Calculator</span>
          </Link>

          <Link to="/age-calculator" className="category-item">
            <FaCalendarAlt className="category-icon age" />
            <span>Age Calculator</span>
          </Link>

          <Link to="/color-palette-generator" className="category-item">
            <FaPalette className="category-icon palette" />
            <span>Color Palette</span>
          </Link>

          <Link to="/currency-converter" className="category-item">
            <FaExchangeAlt className="category-icon currency" />
            <span>Currency</span>
          </Link>

          <Link to="/emi-calculator" className="category-item">
            <FaUniversity className="category-icon emi" />
            <span>EMI</span>
          </Link>

          <Link to="/qr-generator" className="category-item">
            <FaQrcode className="category-icon qr" />
            <span>QR Generator</span>
          </Link>

          <Link to="/password-generator" className="category-item">
            <FaLock className="category-icon password" />
            <span>Password</span>
          </Link>

          <Link to="/word-counter" className="category-item">
            <FaFileCode className="category-icon word" />
            <span>Word Counter</span>
          </Link>

          <Link to="/json-formatter" className="category-item">
            <FaCode className="category-icon json" />
            <span>JSON Formatter</span>
          </Link>

          <Link to="/split-bill-calculator" className="category-item">
            <FaUsers className="category-icon split" />
            <span>Split Bill</span>
          </Link>

          <Link to="/meta-tag-generator" className="category-item">
            <FaGlobe className="category-icon meta" />
            <span>Meta Tag</span>
          </Link>

          <Link to="/tip-calculator" className="category-item">
            <FaPercentage className="category-icon tip" />
            <span>Tip Calculator</span>
          </Link>

        </div>

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