
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosMovieId } from '../../Api';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovieId() {
            try {
                setLoading(true)
                const axiosMovie = await axiosMovieId(movieId);
                setMovie(axiosMovie)
                console.log('М-УСПІХ', axiosMovie)
            } catch (error) {
                console.log('ПОМИЛКА', error)
            } finally {
                setLoading(false)
            }
        }
        getMovieId()
    }, [movieId]);

    return (
        <div>
            <h1>MovieDetailsPage</h1>
            
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                movie && (
                    <ul>
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='Poster' />
                        </li>
                        <li>
                            <h2>{movie.title}</h2>
                        </li>
                        <li>budget:
                            {movie.budget}
                        </li>
                        <ul>
                            <h3>Genres</h3>
                            {movie.genres.map(genre => (
                                <li key={genre.id}>
                                    {genre.name}
                                </li>
                            ))}
                        </ul>
                        <li>
                            <p>{movie.overview}</p>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                    
                    </ul>
                )
            )}
        </div>
    );
};