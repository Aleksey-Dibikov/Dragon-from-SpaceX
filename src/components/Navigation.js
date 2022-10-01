import { NavLink } from 'react-router-dom';
import AuthSelector from '../hooks/authSelector';
import s from '../style/Navigation.module.css';
import AllDragons from './AllDragons/AllDragons';

function Navigation() {
    const { isAuth } = AuthSelector();
    
    return (
        <nav>
            {!isAuth
                ? <NavLink
                    exact
                    to="/"
                    className={({ isActive }) => (isActive ? s.activeLink : s.link)}
                >
                    Home page
                </NavLink>
                : <AllDragons />}
        </nav>
    )
}

export default Navigation;