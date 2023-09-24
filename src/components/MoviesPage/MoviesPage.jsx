// export const MoviesPage = () => {
//     return <h1>MoviesPage</h1>
// };

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form, useField, useFormikContext } from 'formik';
// // import './styles.css';

// async function fetchNewTextC(a, b) {
//     await new Promise((r) => setTimeout(r, 500));
//     return `textA: ${a}, textB: ${b}`;
// }

// export const MoviesPage = (props) => {
//     const {
//         values: { textA, textB },
//         setFieldValue,
//     } = useFormikContext();
//     const [field, meta] = useField(props);

//     React.useEffect(() => {
//         let isCurrent = true;
//         // your business logic around when to fetch goes here.
//         if (textA.trim() !== '' && textB.trim() !== '') {
//             fetchNewTextC(textA, textB).then((textC) => {
//                 if (!!isCurrent) {
//                     // prevent setting old values
//                     setFieldValue(props.name, textC);
//                 }
//             });
//         }
//         return () => {
//             isCurrent = false;
//         };
//     }, [textB, textA, setFieldValue, props.name]);

//     return (
//         <>
//             <input {...props} {...field} />
//             {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
//         </>
//     );
// };
// function App() {
//     const initialValues = { textA: '', textB: '', textC: '' };

//     return (
//         <div className="App">
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
//             >
//                 <div className="section">
//                     <h1>Dependent Formik fields with Async Request</h1>
//                     <p style={{ color: '#555' }}>
//                         This is an example of a complex dependent field in Formik v2. In
//                         this example, textC's value is set by making an async API request
//                         based on the current values of fields textA and textB.
//                     </p>
//                     <div>
//                         <small>
//                             <em>
//                                 Instructions: enter values for textA, and textB, and then watch
//                                 textC
//                             </em>
//                         </small>
//                     </div>
//                     <Form>
//                         <label>
//                             textA
//                             <Field name="textA" />
//                         </label>
//                         <label>
//                             textB
//                             <Field name="textB" />
//                         </label>
//                         <label>
//                             textC
//                             <MoviesPage name="textC" />
//                             <small>
//                                 (the result of <code>fetchNewTextC(textA, textB))</code>
//                             </small>
//                         </label>
//                         <button type="submit">Submit</button>
//                     </Form>
//                 </div>
//             </Formik>
//         </div>
//     );
// }

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

// import React from 'react';
// // import ReactDOM from 'react-dom';
// // import { createRoot } from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import { Formik, Field, Form } from 'formik';
// import { axiosMoviesSearch } from '../../Api';

// export const MoviesPage = () => (

//     <div>
//         <h1>MoviesPage</h1>
//         <Formik
//             initialValues={{
//                 movieName: '',
//             }}
//             onSubmit={async (movieName) => {
//                 // await new Promise((r) => setTimeout(r, 500));
//                 // alert(JSON.stringify(values, null, 2));
//                 // try {
//                 //     const search = await axiosMoviesSearch(movieName);
//                 //     console.log('search', search);
//                 //     // alert(JSON.stringify(values, null, 2));
//                 //     console.log('values', movieName)
//                 // } catch (error) {
//                 //     console.log('Error Search', error);
//                 // }
//             }}
//         >
//             <Form>
//                 <label htmlFor="movieName"></label>
//                 <Field id="movieName" name="movieName" placeholder="Search movies" />

//                 <button type="submit">Submit</button>
//             </Form>
//         </Formik>
//     </div>
// );

// // ReactDOM.render(<MoviesPage />, document.getElementById('root'));

// const root = document.getElementById('root');
// const reactRoot = createRoot(root);

// reactRoot.render(<MoviesPage />);

import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48';

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${query}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            const movieResults = response.data.results;
            console.log(movieResults)
            setMovies(movieResults);
        } catch (error) {
            console.error('Error searching for movies:', error);
        }
    };

    return (
        <div>
            <h1>Movies Page</h1>
            <Formik initialValues={{ movieName: '' }} onSubmit={handleSearch}>
                <Form>
                    <Field
                        type="text"
                        name="movieName"
                        placeholder="Search movies..."
                    />
                    <button type="submit">Search</button>
                </Form>
            </Formik>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};






// import { useState, useEffect } from 'react';
// // import axios from 'axios';
// import { Formik, Form, Field } from 'formik';
// import { axiosMoviesSearch } from '../../Api';

// export const MoviesPage = () => {
//     const [movies, setMovies] = useState([]);
//     // const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48';

//     useEffect(() => {
//         const handleSearch = async () => {
//         try {
//             // const response = await axios.get(
//             //     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${values.movieName}`
//             // );

//             // const response = await axios.get(
//             //     `https://api.themoviedb.org/3/search/movie?query=${value}`,
//             //     {
//             //         headers: {
//             //             Authorization: `Bearer ${apiKey}`,
//             //         },
//             //     }
//             // );
//             const movieResults = await axiosMoviesSearch(value);
//             console.log(movieResults)
//             setMovies(movieResults);
//         } catch (error) {
//             console.error('Error searching for movies:', error);
//         }
//         };
//         handleSearch()
//     }, []);

//     return (
//         <div>
//             <h1>Movies Page</h1>
//             <Formik initialValues={{ movieName: '' }} onSubmit={handleSearch}>
//                 <Form>
//                     <Field
//                         type="text"
//                         name="movieName"
//                         placeholder="Search movies..."
//                     />
//                     <button type="submit">Search</button>
//                 </Form>
//             </Formik>

//             <ul>
//                 {movies.map((movie) => (
//                     <li key={movie.id}>{movie.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };