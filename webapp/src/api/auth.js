const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [
  { id: 1, username: 'admin', password: 'password123', role: 'Admin' },
  { id: 2, username: 'user', password: 'userpass', role: 'User' },
];

const SECRET_KEY = 'your_secret_key';

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });

  res.json({ token, role: user.role });
});

module.exports = router;