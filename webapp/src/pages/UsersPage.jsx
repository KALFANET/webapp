import React, { useState, useEffect } from "react";
import Users from "../components/Users";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users Page</h2>
      <Users users={users} />
    </div>
  );
};

export default UsersPage;