import { NavLink } from 'react-router-dom';
import AuthSelector from '../hooks/authSelector';
import AllDragons from './AllDragons/AllDragons';
import s from '../style/Navigation.module.css';

function Navigation() {
    const { isAuth } = AuthSelector();
    
    return (
        <nav>
            {!isAuth
                ? <NavLink
                    to="/home"
                    className={({ isActive }) => (isActive ? s.activeLink : s.link)}
                >
                    Home page
                </NavLink>
                : <AllDragons />}
        </nav>
    );
}

export default Navigation;