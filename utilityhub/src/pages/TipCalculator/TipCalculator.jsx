import { useState } from "react";
import { Link } from "react-router-dom";
import "./TipCalculator.css";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

  const billAmount = Number(bill) || 0;

  const tipAmount = (billAmount * tip) / 100;
  const total = billAmount + tipAmount;
  const perPerson = people > 0 ? total / people : 0;

  return (
    <main className="tip-page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <section className="tip-box">
        <h1>💰 Tip Calculator</h1>

        <p>
          Calculate tip amount, total bill and split the bill among friends.
        </p>

        <div className="form-group">
          <label>Bill Amount</label>

          <input
            type="number"
            placeholder="Enter Bill Amount"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Number of People</label>

          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) =>
              setPeople(Math.max(1, Number(e.target.value)))
            }
          />
        </div>

        <label>Select Tip Percentage</label>

        <div className="tip-buttons">
          {[5, 10, 15, 20, 25].map((value) => (
            <button
              key={value}
              type="button"
              className={tip === value ? "active" : ""}
              onClick={() => setTip(value)}
            >
              {value}%
            </button>
          ))}
        </div>

        <div className="result-box">
          <div className="result-card">
            <span>Tip Amount</span>
            <strong>₹ {tipAmount.toFixed(2)}</strong>
          </div>

          <div className="result-card">
            <span>Total Bill</span>
            <strong>₹ {total.toFixed(2)}</strong>
          </div>

          <div className="result-card">
            <span>Per Person</span>
            <strong>₹ {perPerson.toFixed(2)}</strong>
          </div>

          <div className="result-card">
            <span>Tip Percentage</span>
            <strong>{tip}%</strong>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TipCalculator;