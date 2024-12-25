import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'doc1.pdf', status: 'Ready for Processing', size: 2 },
    { id: 2, name: 'doc2.pdf', status: 'Ready to Send', size: 3.5 },
  ]);

  const totalSize = files.reduce((acc, file) => acc + file.size, 0);

  const handleProcessFiles = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/files/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files }),
      });
      const result = await response.json();
      alert(`Processing Complete: ${result.message}`);
    } catch (error) {
      alert('Error processing files.');
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="files-section">
        <h3>Files Overview</h3>
        <ul>
          {files.map((file) => (
            <li key={file.id}>
              <span>{file.name}</span>
              <span>Status: {file.status}</span>
              <span>Size: {file.size}MB</span>
            </li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={handleProcessFiles}>Process Files</button>
          <Link to="/upload">
            <button>Upload New File</button>
          </Link>
        </div>
      </div>
      <div className="stats">
        <p>Total Files: {files.length}</p>
        <p>Total Size: {totalSize} MB</p>
      </div>
    </div>
  );
};

export default Dashboard;