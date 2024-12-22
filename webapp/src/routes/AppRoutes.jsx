import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Alerts from '../pages/Alerts';
import Processing from '../pages/Processing';
import Library from '../pages/Library';
import Results from '../pages/Results';
import Users from '../pages/Users';
import Login from '../pages/Login';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/library" element={<Library />} />
            <Route path="/results" element={<Results />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};

export default AppRoutes;
