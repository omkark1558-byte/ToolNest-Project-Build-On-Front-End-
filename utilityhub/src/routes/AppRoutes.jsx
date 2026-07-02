import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import GSTCalculator from "../pages/GSTCalculator/GSTCalculator";
import EMICalculator from "../pages/EMICalculator/EMICalculator";
import QRGenerator from "../pages/QRGenerator/QRGenerator";
import AgeCalculator from "../pages/AgeCalculator/AgeCalculator";
import ColorPaletteGenerator from "../pages/ColorPaletteGenerator/ColorPaletteGenerator";
import CurrencyConverter from "../pages/CurrencyConverter/CurrencyConverter";
import PasswordGenerator from "../pages/PasswordGenerator/PasswordGenerator";
import WordCounter from "../pages/WordCounter/WordCounter";
import JsonFormatter from "../pages/JsonFormatter/JsonFormatter";
import SplitBillCalculator from "../pages/SplitBillCalculator/SplitBillCalculator";
import MetaTagGenerator from "../pages/MetaTagGenerator/MetaTagGenerator";
import TipCalculator from "../pages/TipCalculator/TipCalculator";
 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/gst-calculator" element={<GSTCalculator />} />
      <Route path="/age-calculator" element={<AgeCalculator />} />
      <Route path="/emi-calculator" element={<EMICalculator />} />
      <Route path="/qr-generator" element={<QRGenerator />} />
      <Route path="/color-palette-generator" element={<ColorPaletteGenerator />} />
      <Route path="/currency-converter" element={<CurrencyConverter />} />
      <Route path="/password-generator" element={<PasswordGenerator />} />
      <Route path="/word-counter" element={<WordCounter />} />
      <Route path="/json-formatter" element={<JsonFormatter />} />
      <Route path="/split-bill-calculator" element={<SplitBillCalculator />} />
      <Route path="/meta-tag-generator" element={<MetaTagGenerator />} />
      <Route path="/tip-calculator" element={<TipCalculator />} />
     

    </Routes>
  );
}

export default AppRoutes;