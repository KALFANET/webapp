import React from "react";

const Users = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.role}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default Users;