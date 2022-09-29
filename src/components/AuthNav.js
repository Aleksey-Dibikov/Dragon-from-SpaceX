import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../style/Navigation.module.css';

function AuthNav() {
    return (
        <div>
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Log In
            </NavLink>
            <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Sign Up
            </NavLink>
        </div>
    );
};

export default AuthNav;