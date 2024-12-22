import React, { useState } from 'react';
import '../styles/upload.css';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setUploadStatus(`File "${file.name}" uploaded successfully.`);
    } else {
      setUploadStatus('Please select a file first.');
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload File</h1>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div className="file-preview">
          <p>Selected File: {file.name}</p>
        </div>
      )}
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUpload;