import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import s from '../style/Navigation.module.css';

function AuthNav(props) {
    const animateForm = { opacity: 0, y: -40 };
    const animateTo = { opacity: 1, y: 0 };

    return (
        <motion.nav
            className={s.mobileMenu}
            initial={animateForm}
            animate={animateTo}
        >
            <NavLink
                to="/login"
                onClick={()=>props.isMobile && props.closeMobileMenu()}
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Log In
            </NavLink>
            <NavLink
                to="/register"
                onClick={()=>props.isMobile && props.closeMobileMenu()}
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Sign Up
            </NavLink>
        </motion.nav>
    );
};

export default AuthNav;