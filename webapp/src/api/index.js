const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const fileRoutes = require('./routes/files');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// שימוש ב-CORS וב-body-parser
app.use(cors());
app.use(bodyParser.json());

// חיבור נתיבים
app.use('/api/users', usersRoutes);
app.use('/api/files', fileRoutes);
app.use('/auth', authRoutes);

// נתיב לבדיקת סטטוס השרת
app.get('/api/status', (req, res) => {
  res.json({ message: 'API is running!' });
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});