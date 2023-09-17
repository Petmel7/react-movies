import { useState, useEffect } from 'react';
import { fetchMovies } from '../../Api';

export const MoviesPage = () => {
    const [movieItems, setMovieItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true)
                const movieItems = await fetchMovies();
                console.log('movieItem', movieItems)
                setMovieItems(movieItems)
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
                <div>Loading...</div>
            ) : (
                <ul>
                    <h1>MoviesPage</h1>
                    {movieItems.map(item => (
                        <li key={item.id}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};