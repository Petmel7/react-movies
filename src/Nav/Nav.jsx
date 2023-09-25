import { Link } from "react-router-dom";
// import '../Nav/Nav.components.css';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link className='Nav' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='Nav' to='/movies'>Movies</Link>
                </li>
            </ul>
        </nav>
    );
};