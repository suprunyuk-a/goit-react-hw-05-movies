import css from '../TrandingGallery/TrandingGallery.module.css';

import { MovieCard } from 'components/MovieCard/MovieCard';

import { fetchTrandingMovies } from 'services/API';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const TrandingGallery = () => {
  const [trandingMoviesList, setTrandingMoviesList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetchTrandingMovies().then(data => setTrandingMoviesList(data.results));
  }, []);

  return (
    <div className={css.TrandingGallery}>
      {trandingMoviesList &&
        trandingMoviesList.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} state={{ from: location }} />
          </div>
        ))}
    </div>
  );
};
