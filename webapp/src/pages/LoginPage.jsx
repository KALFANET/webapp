import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config/apiConfig'; // שימוש בקובץ apiConfig
import '../styles/Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // מניעת רענון דף
    try {
      // שליחת בקשת POST לשרת
      const response = await axios.post(`${API_URL}/users/login`, {
        username,
        password,
      });

      // שמירת הטוקן ב-LocalStorage
      localStorage.setItem('token', response.data.token);

      // הודעת הצלחה וניתוב לדשבורד
      setMessage('Login successful!');
      window.location.href = '/dashboard';
    } catch (error) {
      // טיפול בשגיאות וחיווי למשתמש
      setMessage('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
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
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {message && <p className="error">{message}</p>}
    </div>
  );
};

export default LoginPage;