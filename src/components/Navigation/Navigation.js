import { NavLink } from 'react-router-dom';
import s from '../../style/Navigation.module.css';

function Navigation() {
    return (
        <nav className={s.headerNav}>
            <NavLink
                exact="true"
                to='/'
                className={({isActive}) => (isActive ? s.activeLink : s.link)}
            >
                Home page
            </NavLink>
            <NavLink
                to='/dragon'
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Dragon 1
            </NavLink>
            <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Log In
            </NavLink>
            <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Register
            </NavLink>
        </nav>
    )
}

export default Navigation;