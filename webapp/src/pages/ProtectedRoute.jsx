import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token'); // בדיקת אם יש טוקן
    if (!isAuthenticated) {
        alert('You are not authorized to access this page. Please log in.');
    }
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;