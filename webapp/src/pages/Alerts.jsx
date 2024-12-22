import React from 'react';
import '../styles/Alerts.css';

const Alerts = () => {
  return (
    <div className="alerts-page">
      <h2>System Alerts</h2>
      <ul className="alerts-list">
        <li className="success">
          <span>Processing completed for File1.pdf</span>
          <button>View</button>
        </li>
        <li className="error">
          <span>Error processing File2.pdf</span>
          <button>Details</button>
        </li>
        <li className="warning">
          <span>File3.pdf requires review</span>
          <button>Resolve</button>
        </li>
      </ul>
    </div>
  );
};

export default Alerts;