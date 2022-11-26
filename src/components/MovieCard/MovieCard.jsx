import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from '../MovieCard/MovieCard.module.css';

export const MovieCard = ({ movie, state }) => {
  return (
    <Link to={`/movies/${movie.id}`} state={state}>
      <div className={css.MovieCard}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
              : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
          }
          alt={movie.title}
          width="200"
          loading="lazy"
          className={css.cardImage}
        />
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p className={css.rate}>{movie.vote_average.toFixed(1)}</p>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};
