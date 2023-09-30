import { Link, useLocation } from "react-router-dom";
import styles from './NavPage.module.css';

export const NavPage = ({ movieId }) => {
    const location = useLocation();
    console.log('NavPageLocation', location)
    return (
        <ul className={styles.CastReviews}>
            <li className={styles.CastReviewsBlock}>
                <Link
                    className={styles.CastReviewsLink}
                    to={`/movies/${movieId}/cast`}
                >
                    Cast
                </Link>
            </li>
            <li className={styles.CastReviewsBlock}>
                <Link
                    className={styles.CastReviewsLink}
                    to={`/movies/${movieId}/reviews`}
                >
                    Reviews
                </Link>
            </li>
            <li>
                <Link
                    className={styles.CastReviewsLink}
                    to={`/movies/${movieId}/video`}
                >
                    Video
                </Link>
            </li>
        </ul>
    );
};