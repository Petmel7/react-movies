
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosMovieId } from '../../Api';
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { useLocation } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

import styles from './MovieDetailsPage.module.css';

export const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    console.log('MovieDetailsPage location', location)

// const [searchParams, setSearchParams] = useSearchParams();

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

    return (
        
        <div className={styles.MovieDetailsPage}>
            {loading ? (
                <h3>Loading...</h3>
            ) : (
                movie && (
                    <>
                        <div>
                                
                            <div className={styles.Back}>
                                <button className={styles.BackButton}>
                                    <Link className={styles.BackLink} to={`/movies`} state={{from: location}}>
                                        <AiOutlineArrowLeft className={styles.BackAiOutlineArrowLeft} />
                                    </Link>
                                </button>
                            </div>
                            <div className={styles.PosterPath}>
                                <img
                                    className={styles.ImgPosterPath}
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt="Poster"
                                />
                            </div>
                            
                            <div className={styles.CastReviews}>
                                <div className={styles.CastReviewsBlock}>
                                    <Link
                                        className={styles.CastReviewsLink}
                                        to={`/movies/${movieId}/cast`}
                                    >
                                        Cast
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={styles.CastReviewsLink}
                                        to={`/movies/${movieId}/reviews`}
                                    >
                                        Reviews
                                    </Link>
                                </div>
                            </div>
                        </div>
                            
                        <div>
                            <div className={styles.ReleaseDate}>
                                <h1 className={styles.ReleaseDateTitle}>{movie.title}
                                    ({new Date(movie.release_date).getFullYear()})</h1>
                            </div>
                            <div className={styles.Title}>
                                <div className={styles.TitleList}>
                                    <span className={styles.OriginalTitle}>Original title:</span>
                                    <span className={styles.MovieOriginalTitle}>{movie.original_title}</span>
                                </div>

                                <div className={styles.TitleList}>
                                    <span className={styles.OriginalTitle}>Runtime:</span>
                                    <span className={styles.MovieRunTimeTitle}>{movie.runtime}</span>
                                    <span className={styles.MovieOriginalTitle}>min.</span>
                                </div>

                                <div className={styles.TitleList}>
                                    <span className={styles.OriginalTitle}>Vote average:</span>
                                    <span className={styles.MovieRunTimeTitle}>{movie.vote_average.toFixed(1)}</span>
                                </div>

                                <div className={styles.TitleList}>
                                    <span className={styles.OriginalTitle}>Budget:</span>
                                    <span className={styles.MovieRunTimeTitle}>{movie.budget}</span>
                                </div>
                            </div>
                                
                            <h3 className={styles.Genres}>Genres</h3>
                            <ul className={styles.GenresList}>
                                {movie.genres.map((genre) => (
                                    <li className={styles.GenresListItem} key={genre.id}>
                                        {genre.name}
                                    </li>
                                ))}
                            </ul>

                            <h3 className={styles.Genres}>Overview</h3>
                            <div className={styles.Overview}>
                                <span className={styles.MovieOriginalTitle}>{movie.overview}</span>
                            </div>

                            <h3 className={styles.Genres}>
                                Production countries
                            </h3>
                            <ul className={styles.GenresList}>
                                {movie.production_countries.map((product) => (
                                    <li className={styles.GenresListItem} key={product.iso_3166_1}>
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