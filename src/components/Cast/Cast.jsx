import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { axiosMovieIdCast } from '../../Api';
// import { useLocation } from "react-router-dom";
import styles from './Cast.module.css';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);
    // const location = useLocation();
    // const movieId = location.pathname.split('/').pop(); // Отримуємо movieId з шляху

    useEffect(() => {
        async function getActors() {
            try {
                setLoading(true)
                const actors = await axiosMovieIdCast(movieId);
                console.log('actors', actors)
                setCast(actors)
            } catch (error) {
                console.log('ERROR', error)
            } finally {
                setLoading(false)
            }
        }
        getActors()
    }, [movieId]);

    return (
        <div>
            <h1 className={styles.CastTitle}>Cast</h1>
            
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                cast && (
                    <ul className={styles.Cast}>
                        {cast.cast.map(cas => (
                            cas.profile_path && (
                                <li className={styles.CastList} key={cas.id}>
                                    <img className={styles.CastImg} src={`https://image.tmdb.org/t/p/w200${cas.profile_path}`} alt="img" />
                                    <p className={styles.CastName}>{cas.name}</p>
                                </li>
                            )
                        ))}
                    </ul>
                )
            )}

        </div>
    );
};