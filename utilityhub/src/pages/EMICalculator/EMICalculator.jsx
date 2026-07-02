import { useState } from "react";
import { Link } from "react-router-dom";
import "./EMICalculator.css";

function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanYears, setLoanYears] = useState("");

  const principal = Number(loanAmount);
  const monthlyRate = Number(interestRate) / 12 / 100;
  const months = Number(loanYears) * 12;

  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (principal > 0 && monthlyRate > 0 && months > 0) {
    emi =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    totalPayment = emi * months;
    totalInterest = totalPayment - principal;
  }

  return (
    <main className="calculator-page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <section className="calculator-box">

        <h1>🏦 EMI Calculator</h1>

        <p>
          Calculate your monthly EMI, total interest and total payment.
        </p>

        <div className="form-group">
          <label>Loan Amount (₹)</label>

          <input
            type="number"
            placeholder="Enter Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Interest Rate (%)</label>

          <input
            type="number"
            placeholder="Annual Interest Rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Loan Tenure (Years)</label>

          <input
            type="number"
            placeholder="Enter Years"
            value={loanYears}
            onChange={(e) => setLoanYears(e.target.value)}
          />
        </div>

        <div className="result-box">

          <h2>Calculation Result</h2>

          <div className="result-item">
            <span>Monthly EMI</span>
            <strong>₹ {emi.toFixed(2)}</strong>
          </div>

          <div className="result-item">
            <span>Total Interest</span>
            <strong>₹ {totalInterest.toFixed(2)}</strong>
          </div>

          <div className="result-item total-row">
            <span>Total Payment</span>
            <strong>₹ {totalPayment.toFixed(2)}</strong>
          </div>

        </div>

      </section>

    </main>
  );
}

export default EMICalculator;