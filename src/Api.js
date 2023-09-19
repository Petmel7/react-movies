import axios from "axios";

export const axiosMovies = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
    },
  });
          
  return response.data;
};

export const axiosMoviesId = async () => {
  const response = await axios.get()
}

// export const fetchMovies = async () => {
//     const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
//         params: {
//             include_adult: 'false',
//             include_video: 'false',
//             language: 'en-US',
//             page: '1',
//             sort_by: 'popularity.desc',
//         },
//         headers: {
//             accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
//         }
//     });
//     return response.data;
// }
