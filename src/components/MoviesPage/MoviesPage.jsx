
import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import styles from './MoviesPage.module.css';

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48';

    const handleSearch = async (values) => {
        const movieName = values.movieName.trim(); // Видалити пробіли з початку і кінця рядка
        if (movieName) {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/movie?query=${movieName}`,

                    {
                        params: { language: 'en-US' },
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                        },
                    }
                );
                const movieResults = response.data.results;
                setMovies(movieResults);
            } catch (error) {
                console.error('Error searching for movies:', error);
            }
        }
    };

    return (
        <div>
            <Formik className={styles.MoviesPageFormik} initialValues={{ movieName: '' }} onSubmit={handleSearch}>
                <Form className={styles.MoviesPageForm}>
                    <Field className={styles.MoviesPageInput}
                        type="text"
                        name="movieName"
                        placeholder="Search movies..."
                    />
                    <button className={styles.MoviesPageButton} type="submit">Search</button>
                </Form>
            </Formik>

            <ul className={styles.MoviesPage}>
                {movies.map((movie) => (
                    <li className={styles.MoviesPagelist} key={movie.id}>
                        <Link className={styles.MoviesPageLink} to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};