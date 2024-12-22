import React, { useState } from 'react';
import '../styles/Processing.css';

const Processing = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'doc1.pdf', status: 'Processing', progress: 60 },
    { id: 2, name: 'doc2.pdf', status: 'Completed', progress: 100 },
    { id: 3, name: 'doc3.pdf', status: 'Failed', progress: 0 },
  ]);

  const handleCancel = (fileId) => {
    setFiles((prevFiles) =>
      prevFiles.map((file) =>
        file.id === fileId ? { ...file, status: 'Cancelled', progress: 0 } : file
      )
    );
  };

  return (
    <div className="processing-container">
      <h1>Processing Status</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id} className="file-item">
            <div className="file-info">
              <span>{file.name}</span>
              <span>
                {file.status} {file.progress > 0 ? `- ${file.progress}%` : ''}
              </span>
            </div>
            {file.status === 'Processing' && (
              <button onClick={() => handleCancel(file.id)}>Cancel</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Processing;