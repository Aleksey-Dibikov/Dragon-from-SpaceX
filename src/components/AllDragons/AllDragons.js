import { NavLink } from "react-router-dom";
import s from '../../style/Navigation.module.css';

function AllDragons() {
    return (
        <nav>
            <NavLink
                to="/dragon"
                activeClassName={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Dragon 1
            </NavLink>
            <NavLink
                to="/dragon2"
                activeClassName={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
                Dragon 2
            </NavLink>
        </nav>
    )
}

export default AllDragons;