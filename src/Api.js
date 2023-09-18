// import axios from "axios";

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
//   }
// };

// axios.defaults.baseURL = `https://api.themoviedb.org/3/eb4ad2dbf591c1e36f713d73c2092c42${options}`

// export const fetchMovies = async () => {
//     const response = await axios.get('/movies');
//     return response.data;
// }

// import axios from "axios";

// // Встановлюємо заголовки для всіх запитів
// axios.defaults.headers.common["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA9MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48';

// // Встановлюємо базовий URL
// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3/eb4ad2dbf591c1e36f713d73c2092c42",
// });

// export const fetchMovies = async () => {
//   try {
//     const response = await api.get("/movies", {
//       params: {
//         // тут можна додати додаткові параметри запиту, якщо вони потрібні
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Помилка при отриманні фільмів:", error);
//     throw error; // Кидаємо помилку, щоб обробити її вище, якщо потрібно
//   }
// };


import axios from 'axios';

const options = {
  
  url: 'https://api.themoviedb.org/3/discover/movie',
  params: {
    
    language: 'en-US',
    page: '1',
    
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRhZDJkYmY1OTFjMWUzNmY3MTNkNzNjMjA5MmM0MiIsInN1YiI6IjY1MDZlODlmM2NkMTJjMDEyZGU3ZmEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R26ObZZn8eNnjk4cSDh5BZY8D3wGyztliY6hEkVyn48'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  export const fetchMovies = async () => {
    const response = await axios.get('/movies');
    return response.data;
}