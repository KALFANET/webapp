import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    alert("File uploaded successfully!");
    // Logic for handling file upload
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {file && <p>Selected file: {file.name}</p>}
    </div>
  );
};

export default FileUpload;