import { Link } from "react-router-dom";
import styles from'./Nav.module.css';

export const Nav = () => {
    return (
        <nav>
            <ul className={styles.Nav}>
                <li>
                    <Link className={styles.NavList} to='/'>Home</Link>
                </li>
                <li>
                    <Link className={styles.NavList} to='/movies'>Movies</Link>
                </li>
            </ul>
        </nav>
    );
};