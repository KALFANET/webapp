import React, { useState, useEffect } from "react";
import "../styles/Results.css";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/api/results")
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <div className="results">
      <h2>Results</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>OCR Text</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.name}</td>
              <td>{result.text}</td>
              <td>
                <button onClick={() => alert(`Editing ${result.name}`)}>
                  Edit
                </button>
                <button onClick={() => alert(`Exporting ${result.name}`)}>
                  Export
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;