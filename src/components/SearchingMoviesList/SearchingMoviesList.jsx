import PropTypes from 'prop-types';

import css from '../SearchingMoviesList/SearchingMoviesList.module.css';

import { fetchMovieByQuery } from '../../services/API';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const SearchingMoviesList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovieByQuery(query).then(response => setMovies(response.results));
  }, [query]);

  return (
    <div className={css.moviesList}>
      {movies.length > 0 &&
        movies.map(movie => (
          <div key={movie.id}>
            <MovieCard movie={movie} state={{ from: location }} />
          </div>
        ))}
    </div>
  );
};

MovieCard.propTypes = {
  query: PropTypes.string,
};
