import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosMovieIdReviews } from '../../Api';

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
        <h1>Reviews</h1>
        {loading ? (
            <h3>Loading...</h3>
        ) : reviews && reviews.results.length > 0 ? (
            <ul>
                {reviews.results.map(result => (
                    <li key={result.id}>
                        <p>Author: {result.author}</p>
                        <p>{result.content}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No comments</p>
        )}
    </div>
);

};