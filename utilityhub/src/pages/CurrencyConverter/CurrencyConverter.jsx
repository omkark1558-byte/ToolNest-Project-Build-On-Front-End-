import { useState } from "react";
import { Link } from "react-router-dom";
import "./CurrencyConverter.css";

const rates = {
  USD: 1,
  INR: 83.5,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
};

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const convertedAmount =
    amount && Number(amount) > 0
      ? (Number(amount) / rates[fromCurrency]) * rates[toCurrency]
      : 0;

  return (
    <main className="calculator-page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <section className="calculator-box">
        <h1>💱 Currency Converter</h1>
        <p>Convert money between different currencies instantly.</p>

        <div className="form-group">
          <label>Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="currency-grid">

          <div className="form-group">
            <label>From Currency</label>

            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>To Currency</label>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.keys(rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div className="result-box">

          <h2>Conversion Result</h2>

          <div className="result-item">
            <span>Entered Amount</span>
            <strong>
              {amount || 0} {fromCurrency}
            </strong>
          </div>

          <div className="result-item">
            <span>Converted Amount</span>
            <strong>
              {convertedAmount.toFixed(2)} {toCurrency}
            </strong>
          </div>

          <div className="result-item total-row">
            <span>Final Value</span>
            <strong>
              {convertedAmount.toFixed(2)} {toCurrency}
            </strong>
          </div>

        </div>
      </section>
    </main>
  );
}

export default CurrencyConverter;