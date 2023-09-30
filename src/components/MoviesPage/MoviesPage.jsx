
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import { axiosMoviesSearch } from '../../Api';
import { useSearchParams, useLocation } from "react-router-dom";
import styles from './MoviesPage.module.css';

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    console.log('FormikLocation', location)

    const [searchParams, setSearchParams] = useSearchParams();
    console.log('FormikSearchParams', searchParams)
    const movieName = searchParams.get('movieName');
    console.log('FormikMovieName', movieName)

    const handleSearch = async (values, { resetForm }) => {
        const movieName = values.movieName.trim();
        if (movieName) {
            try {
                setLoading(true)
                const movieResults = await axiosMoviesSearch(movieName);
                setMovies(movieResults);
                setSearchParams({ movieName: movieName });
                resetForm()
            } catch (error) {
                console.error('Error searching for movies:', error);
            } finally {
                setLoading(false)
            }
        }
    };

    return (
        <div>
            <Formik
                className={styles.MoviesPageFormik}
                initialValues={{ movieName: '' }}
                onSubmit={handleSearch}>
                <Form className={styles.MoviesPageForm}>
                    <Field className={styles.MoviesPageInput}
                        type="text"
                        name="movieName"
                        placeholder="Search movies..."
                    />
                    <button className={styles.MoviesPageButton} type="submit">Search</button>
                </Form>
            </Formik>

            {loading ? (
                <h3>Loading...</h3>
            ) : (
                <ul className={styles.MoviesPage}>
                    {movies.map((movie) => (
                        <li className={styles.MoviesPagelist}
                            key={movie.id}>
                            <Link
                                className={styles.MoviesPageLink}
                                to={`/movies/${movie.id}`}
                                state={{ from: location }}
                            >
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
