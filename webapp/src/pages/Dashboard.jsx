import { useState, useEffect } from 'react';
import { fetchUsers, uploadFile } from '../../src/api/dashboardApi';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'doc1.pdf', status: 'Ready for Processing', size: 2 },
    { id: 2, name: 'doc2.pdf', status: 'Ready to Send', size: 3.5 },
  ]);
  const [file, setFile] = useState(null);

  // טעינת רשימת משתמשים
  useEffect(() => {
    fetchUsers()
      .then((data) => {
        console.log('Users loaded successfully');
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // העלאת קובץ
  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }

    try {
      const response = await uploadFile(file);
      alert(`File uploaded: ${response.message}`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      {/* קטע הצגת קבצים */}
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
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button onClick={handleFileUpload}>Upload File</button>
        </div>
      </div>

      {/* סטטיסטיקות */}
      <div className="stats">
        <p>Total Files: {files.length}</p>
        <p>Total Size: {files.reduce((acc, file) => acc + file.size, 0)} MB</p>
      </div>
    </div>
  );
};

export default Dashboard;