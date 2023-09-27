import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosMovieIdReviews } from '../../Api';
import styles from './Reviews.module.css';

export const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getReviews() {
            try {
                setLoading(true)
                const reviews = await axiosMovieIdReviews(movieId)
                console.log(reviews)
                setReviews(reviews)
            } catch (error) {
                console.log('reviews', error)
            } finally {
                setLoading(false)
            }
        }
        getReviews()
    }, [movieId]);

    return (
    <div>
        <h1 className={styles.Reviews}>Reviews</h1>
        {loading ? (
            <h3>Loading...</h3>
        ) : reviews && reviews.results.length > 0 ? (
            <ul className={styles.Author}>
                {reviews.results.map(result => (
                    <li className={styles.AuthorList} key={result.id}>
                        <span className={styles.AuthorTitle}>Author:
                            <span className={styles.AuthorName}>
                                {result.author}
                            </span>
                        </span>
                        <p className={styles.AuthorContent}>{result.content}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p className={styles.NoComments}>No comments</p>
        )}
    </div>
);

};