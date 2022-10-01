import { NavLink } from "react-router-dom";
import s from '../../style/Navigation.module.css';

function AllDragons() {
    return (
        <nav>
            <NavLink
                to="/dragon"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Dragon 1
            </NavLink>
            <NavLink
                to="/dragon2"
                className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Dragon 2
            </NavLink>
        </nav>
    )
}

export default AllDragons;