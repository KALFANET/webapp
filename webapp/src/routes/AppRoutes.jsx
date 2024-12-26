import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Alerts from '../pages/Alerts';
import Processing from '../pages/Processing';
import Library from '../pages/Library';
import Results from '../pages/Results';
import Users from '../pages/Users'; // ייבוא העמוד המעודכן
import Login from '../pages/Login';
import Upload from '../components/UploadFile';
import ProtectedRoute from '../pages/ProtectedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* נתיב ברירת מחדל */}
            <Route path="/" element={<Login />} />

            {/* נתיבים מוגנים */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/alerts"
                element={
                    <ProtectedRoute>
                        <Alerts />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/processing"
                element={
                    <ProtectedRoute>
                        <Processing />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/library"
                element={
                    <ProtectedRoute>
                        <Library />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/results"
                element={
                    <ProtectedRoute>
                        <Results />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/users"
                element={
                    <ProtectedRoute>
                        <Users />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/upload"
                element={
                    <ProtectedRoute>
                        <Upload />
                    </ProtectedRoute>
                }
            />

            {/* נתיב 404 */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;