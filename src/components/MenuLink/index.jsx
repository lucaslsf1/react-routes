import { NavLink } from "react-router-dom";
import styles from './MenuLink.module.css';


export default function MenuLink({ children, to}) {
    return (
        <nav id="sidebar">
            <NavLink to={to} className={({ isActive }) => `${styles.link} ${isActive ? styles.linkDestacado : ''}`} end>
                {children}
            </NavLink>
        </nav>
    )
}