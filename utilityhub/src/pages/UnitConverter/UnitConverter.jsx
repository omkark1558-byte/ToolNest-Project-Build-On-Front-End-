import { useState } from "react";
import { Link } from "react-router-dom";
import "./UnitConverter.css";

const unitOptions = {
  length: [
    "Meter",
    "Kilometer",
    "Centimeter",
    "Millimeter",
    "Mile",
    "Foot",
    "Inch",
  ],
  weight: [
    "Gram",
    "Kilogram",
    "Pound",
    "Ounce",
  ],
  temperature: [
    "Celsius",
    "Fahrenheit",
    "Kelvin",
  ],
};

function UnitConverter() {
  const [category, setCategory] = useState("length");
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("Meter");
  const [toUnit, setToUnit] = useState("Kilometer");
  const [precision, setPrecision] = useState(2);

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const clearAll = () => {
    setValue("");
    setFromUnit(unitOptions[category][0]);
    setToUnit(unitOptions[category][1]);
    setPrecision(2);
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setFromUnit(unitOptions[newCategory][0]);
    setToUnit(unitOptions[newCategory][1]);
    setValue("");
  };

  return (
    <main className="unit-page">

      <Link to="/" className="back-btn">
        ← Back to Dashboard
      </Link>

      <section className="unit-header">

        <h1>Unit Converter</h1>

        <p>
          Convert Length, Weight and Temperature instantly.
        </p>

      </section>

      <section className="unit-card">

        <div className="category-section">

          <h3>Category</h3>

          <div className="category-buttons">

            <button
              className={category === "length" ? "active" : ""}
              onClick={() => changeCategory("length")}
            >
              Length
            </button>

            <button
              className={category === "weight" ? "active" : ""}
              onClick={() => changeCategory("weight")}
            >
              Weight
            </button>

            <button
              className={category === "temperature" ? "active" : ""}
              onClick={() => changeCategory("temperature")}
            >
              Temperature
            </button>

          </div>

        </div>

        <div className="form-group">

          <label>Enter Value</label>

          <input
            type="number"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

        </div>

        <div className="converter-grid">

          <div>

            <label>From</label>

            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >

              {unitOptions[category].map((unit) => (
                <option
                  key={unit}
                  value={unit}
                >
                  {unit}
                </option>
              ))}

            </select>

          </div>

          <div className="swap-container">

            <button
              className="swap-btn"
              onClick={swapUnits}
            >
              ⇄
            </button>

          </div>

          <div>

            <label>To</label>

            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >

              {unitOptions[category].map((unit) => (
                <option
                  key={unit}
                  value={unit}
                >
                  {unit}
                </option>
              ))}

            </select>

          </div>

        </div>

        <div className="precision-box">

          <label>Decimal Precision</label>

          <select
            value={precision}
            onChange={(e) => setPrecision(Number(e.target.value))}
          >

            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>

          </select>

        </div>

        <div className="result-box">

          <h3>Converted Result</h3>

          <h2>0.00</h2>

          <p>
            Conversion result will appear here.
          </p>

        </div>

        <div className="action-buttons">

          <button>
            Copy Result
          </button>

          <button onClick={clearAll}>
            Clear
          </button>

        </div>

      </section>

      <section className="history-card">

        <h2>Recent History</h2>

        <div className="history-item">

          <p>
            No conversion history yet.
          </p>

        </div>

      </section>

    </main>
  );
}

export default UnitConverter;