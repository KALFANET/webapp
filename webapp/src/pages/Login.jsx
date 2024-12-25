import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // שליחת בקשת התחברות לשרת
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // שמירת הטוקן
      localStorage.setItem('token', response.data.token);

      // מעבר לדף הראשי (Dashboard)
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;