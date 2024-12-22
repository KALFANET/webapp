import React, { useState, useEffect } from "react";
import { List, Button } from "antd";
import "../styles/Library.css";

const Library = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch("/api/library")
      .then((response) => response.json())
      .then((data) => setDocuments(data))
      .catch((err) => console.error("Error fetching documents:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Library</h2>
      <List
        bordered
        dataSource={documents}
        renderItem={(item) => (
          <List.Item>
            <div>
              <strong>{item.name}</strong> - {item.date}
            </div>
            <div>
              <Button
                type="primary"
                onClick={() => alert(`Downloading ${item.name}`)}
              >
                Download
              </Button>
              <Button danger onClick={() => alert(`Deleting ${item.name}`)}>
                Delete
              </Button>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Library;