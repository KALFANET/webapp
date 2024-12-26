import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('token'); // בדיקת אם יש טוקן

    return (
        <nav className="navbar">
            <h1>OCR Forms</h1>
            <ul>
                {isAuthenticated ? (
                    <>
                        <li>
                            <NavLink to="/dashboard" activeClassName="active">
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/alerts" activeClassName="active">
                                Alerts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/processing" activeClassName="active">
                                Processing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/library" activeClassName="active">
                                Library
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/results" activeClassName="active">
                                Results
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" activeClassName="active">
                                Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" onClick={() => localStorage.removeItem('token')}>
                                Logout
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <li>
                        <NavLink to="/">Login</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;