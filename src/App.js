
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { MoviesPage } from './components/MoviesPage/MoviesPage';
import { MovieDetailsPage } from './components/MovieDetailsPage/MovieDetailsPage';
import { Cast } from './components/Cast/Cast';
import { Reviews } from './components/Reviews/Reviews';
import { AppLayout } from './appLayout/AppLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />} >
        <Route index element={<HomePage />} />
        <Route path='movies' element={<MoviesPage />} />
        <Route path='movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='movies/:movieId/cast' element={<Cast />} />
        <Route path='movies/:movieId/reviews' element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default App;
