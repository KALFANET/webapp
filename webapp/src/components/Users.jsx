import React, { useState } from 'react';
import { hashPassword } from '../utils/encryption';
import '../styles/Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', role: 'User', password: '' });

  const handleAddUser = () => {
    if (!newUser.name) {
      alert('Please enter a name.');
      return;
    }
    if (!newUser.password || newUser.password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    const hashedPassword = hashPassword(newUser.password);
    const user = { id: Date.now(), ...newUser, password: hashedPassword };

    setUsers([...users, user]);
    setNewUser({ name: '', role: 'User', password: '' });
  };

  return (
    <div className="users-container">
      <h1>Users Management (Local)</h1>
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <button onClick={() => setUsers(users.filter((u) => u.id !== user.id))}>Delete</button>
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