// const [loadedMovies, setLoadedMovies] = useState([]);

// useEffect(() => {
        
//         async function getMovieId() {
//             try {
//                 setLoading(true);

//                 // Перевіряємо, чи фільм вже завантажений
//                 const loadedMovie = loadedMovies.find((loadedMovie) => loadedMovie.id === movieId);

//                 if (loadedMovie) {
//                     // Якщо фільм вже завантажений, використовуємо його зі стану
//                     setMovie(loadedMovie);
//                 } else {
//                     // Якщо фільм ще не завантажений, завантажуємо його з сервера
//                     const axiosMovie = await axiosMovieId(movieId);
            
//                     // Оновлюємо стан loadedMovies, додаючи новий фільм до попереднього стану
//                     setLoadedMovies(prevLoadedMovies => [...prevLoadedMovies, axiosMovie]);
            
//                     // Встановлюємо фільм у стан
//                     setMovie(axiosMovie);
//                 }
//             } catch (error) {
//                 console.log('ПОМИЛКА', error);
//             } finally {
//                 setLoading(false);
//             }
//         }


//         if (movieId && !movie) {
//             getMovieId();
//         }
//     }, [movieId, movie, loadedMovies]);
