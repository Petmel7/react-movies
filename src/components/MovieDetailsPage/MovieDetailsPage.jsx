
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { axiosMovieId } from '../../Api';
import { Link } from "react-router-dom";
import { Cast } from '../Cast/Cast';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        async function getMovieId() {
            try {
                setLoading(true)
                const axiosMovie = await axiosMovieId(movieId);
                setMovie(axiosMovie)
                // console.log('М-УСПІХ', axiosMovie)
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
                        <h2>{movie.title} ({movie.release_date})</h2>
                            
                        <li>
                            <Link to={`/movies/${movieId}/cast`} state={{ from: location }}>Cast</Link>
                        </li>
                        <li>
                            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
                        </li>
                            
                        <h3>Original title:</h3>
                        <li>
                            {movie.original_title}
                        </li>
                            
                        <h3>Genres</h3>
                        {movie.genres.map(genre => (
                            <li key={genre.id}>
                                {genre.name}
                            </li>
                        ))}
                            
                        <h3>Runtime:</h3>
                        <li>
                            {movie.runtime} min.
                        </li>
                            
                        <h3>Vote average:</h3>
                        <li>
                            {movie.vote_average}
                        </li>
                            
                        <h3>Budget:</h3>
                        <li>
                            {movie.budget}
                        </li>
                            
                        <h3>Overview</h3>
                        <li>
                            <p>{movie.overview}</p>
                        </li>
                            
                        <h3>Production countries</h3>
                        {movie.production_countries.map(product => (
                            <li key={product.iso_3166_1}>
                                {product.name}
                            </li>
                        ))}
                    </ul>
                )
            )}
        </div>
    );
};