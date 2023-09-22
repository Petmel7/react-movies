import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { axiosMovieIdCast } from '../../Api';
// import { useLocation } from "react-router-dom";

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
            <h1>Cast</h1>
            
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                cast && (
                    <ul>
                        {cast.cast.map(cas => (
                            cas.profile_path && (
                                <li key={cas.id}>
                                    <img src={`https://image.tmdb.org/t/p/w200${cas.profile_path}`} alt="img" />
                                    <p>{cas.name}</p>
                                </li>
                            )
                        ))}
                    </ul>
                )
            )}

        </div>
    );
};

// Компонент Cast.jsx
// import { useEffect, useState } from 'react';
// // import { useLocation } from 'react-router-dom';
// import { axiosMovieIdCast } from '../../Api';

// export const Cast = ({movieId}) => {
// //   const location = useLocation();
// //   const movieId = location.pathname.split('/').pop(); // Отримуємо movieId з шляху
//   const [cast, setCast] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function getActors() {
//       try {
//         setLoading(true)
//         const actors = await axiosMovieIdCast(movieId);
//         setCast(actors)
//       } catch (error) {
//         console.log('ERROR', error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     getActors()
//   }, [movieId]);

//       return (
//         <div>
//             <h1>Cast</h1>
            
//             {loading ? (
//                 <h3>Loading...</h3>
//             ) : (
//                 cast && (
//                     <ul>
//                         {cast.cast.map(cas => (
//                             cas.profile_path && (
//                                 <li key={cas.id}>
//                                     <img src={`https://image.tmdb.org/t/p/w200${cas.profile_path}`} alt="img" />
//                                     <p>{cas.name}</p>
//                                 </li>
//                             )
//                         ))}
//                     </ul>
//                 )
//             )}

//         </div>
//     );
// };