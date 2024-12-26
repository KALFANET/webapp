const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'John Doe', role: 'Admin', password: 'admin123' },
  { id: 2, name: 'Jane Smith', role: 'User', password: 'user123' },
];

// נתיב לקבלת כל המשתמשים
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// נתיב להוספת משתמש חדש
router.post('/', (req, res) => {
  const { name, role, password } = req.body;
  if (!name || !role || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const newUser = { id: Date.now(), name, role, password };
  users.push(newUser);
  res.status(201).json(newUser);
});

// נתיב למחיקת משתמש לפי ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.status(204).send();
});

module.exports = router;