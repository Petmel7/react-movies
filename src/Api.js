import axios from "axios";

export const axiosMovies = async () => {
  const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
    },
  });
          
  return response.data;
};

// export const axiosMoviesSearch = async value => {
//   const response = await axios.get(`https://api.themoviedb.org/3/search/movie/?${value}`, {
//     // params: {include_adult: 'false', language: 'en-US', page: '1'},
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
//     },
//   });
          
//   return response.data;
// };

// export const axiosMoviesSearch = async (movieName) => {
//   const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
//     params: {
//       query: movieName, // Зміна параметра query для пошуку
//       // include_adult: 'false',
//       // language: 'en-US',
//       // page: '1',
//     },
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
//     },
//   });

//   return response.data;
// };

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/search/movie',
//   params: {include_adult: 'false', language: 'en-US', page: '1'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
//   }
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log('', response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export const axiosMovieId = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
    },
  });
          
  return response.data;
};

export const axiosMovieIdCast = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
    },
  });
          
  return response.data;
};

export const axiosMovieIdReviews = async movieId => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
    },
  });
          
  return response.data;
};