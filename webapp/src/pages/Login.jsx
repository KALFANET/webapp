import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // עיצוב ייעודי

const Login = () => {
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
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <h2>Login to OCR Forms</h2>
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
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
