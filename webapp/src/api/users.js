const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

let users = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

router.get('/', authenticateToken, (req, res) => {
  res.json(users);
});

router.post('/', authenticateToken, (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ message: 'Name and role are required' });
  }
  const newUser = { id: Date.now(), name, role };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.delete('/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.status(204).send();
});

module.exports = router;