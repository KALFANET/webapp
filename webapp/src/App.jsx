import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import './styles/global.css'; // עיצוב גלובלי
import Alerts from './pages/Alerts';
const App = () => {
    return (
        <Router>
            <Navbar />
            <AppRoutes />
        </Router>
    );
};

export default App;
