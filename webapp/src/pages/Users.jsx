import React, { useEffect, useState } from 'react';
import { getUsers, addUser, deleteUser } from '../api/usersApi';
import '../styles/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', role: 'User', password: '' });
  const [error, setError] = useState('');

  // קבלת משתמשים מהשרת
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const users = await getUsers(token);
      setUsers(users);
    } catch (err) {
      setError('Error fetching users. Please try again.');
    }
  };

  // הוספת משתמש חדש
  const handleAddUser = async () => {
    if (!newUser.name || !newUser.password) {
      setError('Name and password are required.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const addedUser = await addUser(newUser, token);
      setUsers([...users, addedUser]);
      setNewUser({ name: '', role: 'User', password: '' });
    } catch (err) {
      setError('Error adding user. Please try again.');
    }
  };

  // מחיקת משתמש
  const handleDeleteUser = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await deleteUser(id, token);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError('Error deleting user. Please try again.');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-page">
      <h2>Manage Users</h2>
      {error && <p className="error">{error}</p>}
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-user-form">
        <h2>Add New User</h2>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Viewer">Viewer</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default Users;