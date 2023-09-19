
import { useState, useEffect } from 'react';
import { axiosMovies } from '../../Api';
import { Link } from "react-router-dom"

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true)
                const movies = await axiosMovies();
                // console.log('movies', movies)
                setMovies(movies)
            } catch (error) {
                console.log('ERROR', error)
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, []);

    return (
        <div>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <ul>
                    {movies.results ? (
                        movies.results.map(movie => (
                            <li key={movie.id}>
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <li>No movies found.</li>
                    )}
                </ul>
            )}
        </div>
    );
};