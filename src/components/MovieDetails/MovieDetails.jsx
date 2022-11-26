import { fetchMovieById } from 'services/API';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import css from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById(id).then(response => setMovie(response));
  }, [id]);

  const getGenresList = arr => {
    const list = [];
    arr.map(obj => list.push(obj.name));

    return list;
  };

  return (
    <div className={css.MovieDetailsSection}>
      <Link to={backLinkHref}>
        <button type="button" className={css.button}>
          Go back
        </button>
      </Link>
      {movie && (
        <div>
          <div className={css.MovieDetails}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
              width="350"
            />
            <div>
              <h2>{movie.original_title}</h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{getGenresList(movie.genres).join(' ')}</p>
            </div>
          </div>
          <div>
            <h2>Additional information</h2>
            <Link className="navigation__item" to="cast">
              Cast
            </Link>
            <Link className="navigation__item" to="reviews">
              Reviews
            </Link>
          </div>
        </div>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
