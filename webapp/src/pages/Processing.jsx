import React, { useState, useEffect } from "react";
import "../styles/Processing.css";

const Processing = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch("/api/processing")
      .then((response) => response.json())
      .then((data) => setFiles(data));
  }, []);

  return (
    <div className="processing">
      <h2>Processing Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <span>{file.name}</span> - {file.progress}% complete
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Processing;