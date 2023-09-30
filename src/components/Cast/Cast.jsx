import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { axiosMovieIdCast } from '../../Api';
import { Back } from '../Back/Back';
import styles from './Cast.module.css';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getActors() {
            try {
                setLoading(true)
                const actors = await axiosMovieIdCast(movieId);
                setCast(actors)
            } catch (error) {
            } finally {
                setLoading(false)
            }
        }
        getActors()
    }, [movieId]);

    return (
        <div>
            <Back movieId={movieId} />

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