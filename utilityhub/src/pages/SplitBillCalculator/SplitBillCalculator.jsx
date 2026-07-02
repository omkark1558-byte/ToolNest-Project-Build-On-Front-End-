import { useState } from "react";
import { Link } from "react-router-dom";
import "./SplitBillCalculator.css";

function SplitBillCalculator() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("2");
  const [tip, setTip] = useState("10");

  const billAmount = Number(bill);
  const peopleCount = Number(people);
  const tipPercent = Number(tip);

  const tipAmount = billAmount > 0 ? (billAmount * tipPercent) / 100 : 0;
  const total = billAmount + tipAmount;
  const perPerson = peopleCount > 0 ? total / peopleCount : 0;

  return (
    <main className="split-page">
      <Link className="back-link" to="/">Back to Dashboard</Link>

      <section className="split-box">
        <div className="split-header">
          <h1>Split Bill Calculator</h1>
          <p>Split restaurant bills with tip included.</p>
        </div>

        <div className="split-layout">
          <div className="split-form">
            <label>
              Bill Amount
              <input
                type="number"
                placeholder="Example: 1200"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
              />
            </label>

            <label>
              People
              <input
                type="number"
                min="1"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </label>

            <label>
              Tip %
              <input
                type="number"
                value={tip}
                onChange={(e) => setTip(e.target.value)}
              />
            </label>
          </div>

          <div className="split-result">
            <span>Each Person Pays</span>
            <strong>Rs {perPerson.toFixed(2)}</strong>

            <div className="mini-results">
              <p>Tip: Rs {tipAmount.toFixed(2)}</p>
              <p>Total: Rs {total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SplitBillCalculator;