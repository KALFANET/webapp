import React, { useState } from 'react';
import '../styles/Users.css';

const initialUsers = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
  { id: 3, name: 'Bob Viewer', role: 'Viewer' },
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({ name: '', role: 'User' });

  const handleAddUser = () => {
    if (!newUser.name) return;
    const user = { id: Date.now(), ...newUser };
    setUsers([...users, user]);
    setNewUser({ name: '', role: 'User' });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users">
      <h2>Manage Users</h2>

      {/* פריסה מבוססת גריד */}
      <div className="users-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* טופס הוספת משתמש */}
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
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default Users;
