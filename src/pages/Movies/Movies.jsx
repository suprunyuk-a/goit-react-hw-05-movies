import css from '../Movies/Movies.module.css';
import { BsSearch } from 'react-icons/bs';

import { SearchingMoviesList } from 'components/SearchingMoviesList/SearchingMoviesList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleSubmit = event => {
    event.preventDefault();

    const inputValue = event.currentTarget.elements.searchQuery.value;

    if (inputValue === '') {
      return;
    }
    setSearchParams({ query: inputValue });

    event.currentTarget.reset();
  };

  return (
    <div className={css.moviesSection}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
      {query && <SearchingMoviesList query={query} />}
    </div>
  );
};

export default Movies;
