import { Link, useLocation } from "react-router-dom";
import styles from './NavPage.module.css';

export const NavPage = ({ movieId }) => {
    const location = useLocation();
    console.log('location', location)
    return (
        <ul className={styles.CastReviews}>
            <li className={styles.CastReviewsBlock}>
                <Link
                    className={styles.CastReviewsLink}
                    to={`/movies/${movieId}/cast`}
                >
                    Cast
                </Link>
                {/* <Outlet /> */}
            </li>
            <li>
                <Link
                    className={styles.CastReviewsLink}
                    to={`/movies/${movieId}/reviews`}
                >
                    Reviews
                </Link>
            </li>
        </ul>
    );
};