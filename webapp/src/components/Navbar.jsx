import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // עיצוב ייעודי

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>OCR Forms</h1>
            <ul>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/alerts">Alerts</NavLink>
                </li>
                <li>
                    <NavLink to="/processing">Processing</NavLink>
                </li>
                <li>
                    <NavLink to="/library">Library</NavLink>
                </li>
                <li>
                    <NavLink to="/results">Results</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
