import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { axiosMovieIdCast } from '../../Api';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);

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
            <h1>Cast</h1>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                cast && (
                    cast.cast.map(cas => (
                        <li key={cas.id}>
                            <img src={`https://image.tmdb.org/t/p/w200${cas.profile_path}`} alt="img" />
                            <p>{cas.name}</p>
                        </li>
                    )
                
                    ))
            )
            }
        </div>
    );
};