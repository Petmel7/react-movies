
import { useState, useEffect } from 'react';
import { axiosMovies } from '../../Api';
import { Link } from "react-router-dom";
import styles from './HomePage.module.css';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true)
                const movies = await axiosMovies();
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
                <ul className={styles.HomePage}>
                    {movies.results ? (
                        movies.results.map(movie => (
                            <li className={styles.HomePageList} key={movie.id}>
                                <Link className={styles.HomePageLink} to={`/movies/${movie.id}`}>
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