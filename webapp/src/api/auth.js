const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const SECRET_KEY = 'secretkey';

let users = [
  { id: 1, name: 'Admin', role: 'Admin', password: 'admin123' },
  { id: 2, name: 'User1', role: 'User', password: 'user123' },
];

// התחברות
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.name === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;