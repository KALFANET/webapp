import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // ייבוא הקובץ המעוצב

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === '1234') {
            localStorage.setItem('token', 'fake-token');
            navigate('/dashboard');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            {/* כותרת */}
            <h1 className="title">OCR Forms - Panel Admin</h1>

            {/* הודעת ברכה */}
            <div className="welcome-section">
                <h2>Welcome!</h2>
                <p>Please login to access the system</p>
                <div className="secure-box">
                    <div className="secure-icon"></div>
                    <div>
                        <h3>Secure Login</h3>
                        <p>Enter your credentials below</p>
                        <span className="security-note">For security reasons, please log in to continue.</span>
                    </div>
                </div>
            </div>

            {/* טופס התחברות */}
            <form onSubmit={handleLogin} className="login-form">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="login-button">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>

            {/* שחזור סיסמה */}
            <div className="forgot-password">
                <h3>Forgot Password?</h3>
                <p>Click here to reset your password</p>
                <button className="reset-button">Reset</button>
            </div>

            {/* שאלת אבטחה */}
            <div className="security-question">
                <div className="icon"></div>
                <p>Answer a security question to reset your password</p>
            </div>

            {/* פרטי משתמש לדוגמה */}
            <div className="admin-user">
                <div className="user-icon"></div>
                <div>
                    <h4>John Doe</h4>
                    <p>Admin User</p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;