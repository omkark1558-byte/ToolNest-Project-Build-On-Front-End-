import { useState } from "react";
import { Link } from "react-router-dom";
import "./GSTCalculator.css";

function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [gstType, setGstType] = useState("exclusive");

  const baseAmount = Number(amount);
  const rate = Number(gstRate);
  
  let gstAmount = 0;
  let totalAmount = 0;

  if (baseAmount > 0) {

    if (gstType === "exclusive") {

      gstAmount = (baseAmount * rate) / 100;
      totalAmount = baseAmount + gstAmount;

    } else {

      gstAmount = baseAmount - baseAmount / (1 + rate / 100);
      totalAmount = baseAmount;

    }

  }

  return (
    <main className="calculator-page">
      <Link className="back-link" to="/">
        Back to Dashboard
      </Link>

      <section className="calculator-box">
        <h1>🧾 GST Calculator</h1>
        <p>Enter amount and GST rate to calculate GST and final total.</p>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>

          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gstRate">GST Rate</label>

          <select
            id="gstRate"
            value={gstRate}
            onChange={(e) => setGstRate(e.target.value)}
          >
            <option value="5">5%</option>
            <option value="12">12%</option>
            <option value="18">18%</option>
            <option value="28">28%</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="gstType">GST Type</label>

          <select
            id="gstType"
            value={gstType}
            onChange={(e) => setGstType(e.target.value)}
          >
            <option value="exclusive">Exclusive GST</option>
            <option value="inclusive">Inclusive GST</option>
          </select>
        </div>

        <div className="gst-result-box">
          <h2>Calculation Result</h2>

          <div className="result-item">
            <span>Original Amount</span>
            <strong>Rs {baseAmount.toFixed(2)}</strong>
          </div>

          <div className="result-item">
            <span>GST Amount</span>
            <strong>Rs {gstAmount.toFixed(2)}</strong>
          </div>

          <div className="result-item total-row">
            <span>Total Amount</span>
            <strong>Rs {totalAmount.toFixed(2)}</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GSTCalculator;