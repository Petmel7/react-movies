
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { MoviesPage } from './components/MoviesPage/MoviesPage';
import { MovieDetailsPage } from './components/MovieDetailsPage/MovieDetailsPage';
import { Cast } from './components/Cast/Cast';
import { Reviews } from './components/Reviews/Reviews';
import { Nav } from './Nav/Nav';
// import { AppLayout } from './appLayout/AppLayout';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Nav />
      <div className={styles.Container}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
          <Route path='/movies/:movieId/cast' element={<Cast />} />
          <Route path='/movies/:movieId/reviews' element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
