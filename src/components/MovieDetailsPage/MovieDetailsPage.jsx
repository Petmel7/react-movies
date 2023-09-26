
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { axiosMovieId } from '../../Api';
import { Link } from "react-router-dom";
// import { Cast } from '../Cast/Cast';
// import { NavPage } from '../../NavPage/NavPage';
import styles from './MovieDetailsPage.module.css';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    // const location = useLocation();

    useEffect(() => {
        async function getMovieId() {
            try {
                setLoading(true)
                const axiosMovie = await axiosMovieId(movieId);
                setMovie(axiosMovie)
            } catch (error) {
                console.log('ПОМИЛКА', error)
            } finally {
                setLoading(false)
            }
        }
        getMovieId()
    }, [movieId]);

    // return (
    //     <div className={styles.MovieDetailsPage}>
    //         {loading ? (
    //             <h3>Loading...</h3>
    //         ) : (
    //             movie && (
                    
    //                     <div className={styles.MovieDetailsPageList}>
    //                         <img className={styles.MovieDetailsPageImgPosterPatch} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt='Poster' />
    //                     </div>
                    
    //                 <div>
    //                         <Link className={styles.MovieDetailsPageLink} to={`/movies/${movieId}/cast`}>Cast</Link>
    //                         <Link className={styles.MovieDetailsPageLink} to={`/movies/${movieId}/reviews`}>Reviews</Link>
    //                     </div>

    //                     <h2 className={styles.MovieDetailsPageTitle}>{movie.title} ({movie.release_date})</h2>
                            
    //                     <h3 className={styles.MovieDetailsPageOriginalTitle}>Original title:</h3>
    //                     <div className={styles}>
    //                         {movie.original_title}
    //                     </div>
                            
    //                     <h3 className={styles}>Genres</h3>
    //                     <ul>
    //                     {movie.genres.map(genre => (
    //                         <li className={styles} key={genre.id}>
    //                             {genre.name}
    //                         </li>
    //                     ))}
    //                     </ul>
                            
    //                     <h3 className={styles}>Runtime:</h3>
    //                     <div className={styles}>
    //                         {movie.runtime} min.
    //                     </div>
                            
    //                     <h3 className={styles}>Vote average:</h3>
    //                     <div className={styles}>
    //                         {movie.vote_average}
    //                     </div>
                            
    //                     <h3 className={styles}>Budget:</h3>
    //                     <div className={styles}>
    //                         {movie.budget}
    //                     </div>
                            
    //                     <h3 className={styles}>Overview</h3>
    //                     <div className={styles}>
    //                         <p className={styles}>{movie.overview}</p>
    //                     </div>
                            
    //                     <h3 className={styles}>Production countries</h3>
    //                     <ul>
    //                     {movie.production_countries.map(product => (
    //                         <li className={styles} key={product.iso_3166_1}>
    //                             {product.name}
    //                         </li>
    //                     ))}
    //                             </ul>
    //             )
    //         )}
    //     </div>
    // );

    return (
        
        <div className={styles.MovieDetailsPage}>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                movie && (
                    <>
                        <div>
                            <div className={styles.MovieDetailsPageList}>
                                <img
                                    className={styles.MovieDetailsPageImgPosterPath}
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt="Poster"
                                />
                            </div>

                            <div>
                                <Link
                                    className={styles.MovieDetailsPageLink}
                                    to={`/movies/${movieId}/cast`}
                                >
                                    Cast
                                    </Link>
                                    </div>
                                    <div>
                                <Link
                                    className={styles.MovieDetailsPageLink}
                                    to={`/movies/${movieId}/reviews`}
                                >
                                    Reviews
                                </Link>
                            </div>
                        </div>
                            
                        <div>
                            <h1 className={styles.MovieDetailsPageTitle}>
                                {movie.title} ({movie.release_date})
                            </h1>

                            <div className={styles.MovieDetailsPageText}>
                                <span className={styles.MovieDetailsPageOriginalTitle}>Original title:</span>
                                <span>{movie.original_title}</span>
                            </div>

                            <h3 className={styles.MovieDetailsPageSection}>Genres</h3>
                            <ul className={styles.MovieDetailsPageList}>
                                {movie.genres.map((genre) => (
                                    <li className={styles.MovieDetailsPageListItem} key={genre.id}>
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.MovieDetailsPageText}>
                                <span className={styles.MovieDetailsPageSection}>Runtime:</span>
                                <span>{movie.runtime}</span><span>min.</span>
                            </div>

                            <div className={styles.MovieDetailsPageText}>
                                <span className={styles.MovieDetailsPageSection}>Vote average:</span>
                                <span>{movie.vote_average}</span>
                            </div>

                            <div className={styles.MovieDetailsPageText}>
                                <span className={styles.MovieDetailsPageSection}>Budget:</span>
                                <span>{movie.budget}</span>
                            </div>

                            <h3 className={styles.MovieDetailsPageSection}>Overview</h3>
                            <div className={styles.MovieDetailsPageText}>
                                <p>{movie.overview}</p>
                            </div>

                            <h3 className={styles.MovieDetailsPageSection}>
                                Production countries
                            </h3>
                            <ul className={styles.MovieDetailsPageList}>
                                {movie.production_countries.map((product) => (
                                    <li className={styles.MovieDetailsPageListItem} key={product.iso_3166_1}>
                                        {product.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </>
                )
            )}
        </div>
    );
};