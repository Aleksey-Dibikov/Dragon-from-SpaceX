import { NavLink } from 'react-router-dom';
import AuthSelector from '../hooks/authSelector';
import s from '../style/Navigation.module.css';

function Navigation() {
    const { isAuth } = AuthSelector();
    
    return (
        <nav>
            {!isAuth
            ? <NavLink 
                to="/"
                className={({isActive}) => (isActive ? s.activeLink : s.link)}
            >
                Home page
            </NavLink>
            : <NavLink
                to="/dragon"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Dragon 1
            </NavLink>}
        </nav>
    )
}

export default Navigation;