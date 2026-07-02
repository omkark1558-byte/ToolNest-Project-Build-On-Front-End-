import { useEffect, useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}>
      <span>{theme === "light" ? "🌙" : "☀️"}</span>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

export default ThemeToggle;