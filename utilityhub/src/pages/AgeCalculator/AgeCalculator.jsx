import { useState } from "react";
import { Link } from "react-router-dom";
import "./AgeCalculator.css";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  function calculateAge() {
    if (!birthDate) {
      setAge(null);
      return;
    }

    const today = new Date();
    const dob = new Date(birthDate);

    if (dob > today) {
      setAge({ error: "Date of birth cannot be in the future." });
      return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  }

  return (
    <main className="age-page">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <section className="age-box">
        <h1>🎂 Age Calculator</h1>

        <p>
          Calculate your exact age in years, months and days.
        </p>

        <div className="form-group">
          <label>Date of Birth</label>

          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <button
          className="calculate-btn"
          type="button"
          onClick={calculateAge}
        >
          Calculate Age
        </button>

        {age && (
          <div className="result-box">
            <h2>🎉 Your Age</h2>

            {age.error ? (
              <p className="error-message">
                {age.error}
              </p>
            ) : (
              <>
                <div className="result-item">
                  <span>Years</span>
                  <strong>{age.years}</strong>
                </div>

                <div className="result-item">
                  <span>Months</span>
                  <strong>{age.months}</strong>
                </div>

                <div className="result-item">
                  <span>Days</span>
                  <strong>{age.days}</strong>
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default AgeCalculator;