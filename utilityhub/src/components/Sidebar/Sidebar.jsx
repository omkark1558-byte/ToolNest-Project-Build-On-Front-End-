// src/components/Sidebar/Sidebar.jsx

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/gst-calculator">GST Calculator</Link></li>
        <li><Link to="/emi-calculator">EMI Calculator</Link></li>
        <li><Link to="/qr-generator">QR Generator</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;