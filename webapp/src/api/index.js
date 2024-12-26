const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const fs = require('fs');
const path = require('path');
const net = require('net');
const fileRoutes = require('./routes/files');

const app = express();
const DEFAULT_PORT = 5000; // פורט ברירת מחדל

// פונקציה למציאת פורט פנוי
const findFreePort = (startPort) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(startPort, () => {
      server.once('close', () => resolve(startPort));
      server.close();
    });
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findFreePort(startPort + 1)); // נסה את הפורט הבא
      } else {
        reject(err);
      }
    });
  });
};

// שימוש ב-CORS וב-body-parser
app.use(cors());
app.use(bodyParser.json());

// חיבור נתיב המשתמשים
app.use('/api/users', usersRoutes);
app.use('/api/files', fileRoutes);

// נתיב לבדיקת סטטוס השרת
app.get('/api/status', (req, res) => {
  res.json({ message: 'API is running!' });
});

// הכנה לכתיבת קובץ הקונפיגורציה
const configDir = path.join(__dirname, '../config');
if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

// הפעלת השרת ומציאת פורט פנוי
findFreePort(DEFAULT_PORT)
  .then((freePort) => {
    app.listen(freePort, () => {
      console.log(`Server is running on http://localhost:${freePort}`);
      
      // כתיבה לקובץ serverConfig.json
      const configPath = path.join(configDir, 'serverConfig.json');
      const configData = { backendPort: freePort };
      fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));
    });
  })
  .catch((err) => {
    console.error('Error finding a free port:', err);
  });