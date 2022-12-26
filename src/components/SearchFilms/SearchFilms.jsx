import { fetchFilmsByQuery } from 'API/api';
import { useEffect, useState } from 'react';
import { FilmList } from '../FilmList/FilmList';
import { SearchForm } from '../SearchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { List } from 'components/FilmList/FilmList.styled';

const SearchFilms = () => {
  const [films, setFilms] = useState([]);
  const [, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('query') ?? '';

  const onHandleSubmit = req => {
    if (req !== filmName) {
      setFilms([]);
      setSearchParams({ query: req });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!filmName) {
      return;
    }
    async function fetching() {
      try {
        const response = await fetchFilmsByQuery(filmName);
        if (response.length !== 0) {
          setFilms(response);
        }
        if (response.length === 0) {
          throw new Error('error');
        }
      } catch (error) {
        setError(error);
        alert(error);
      }
    }
    fetching();
  }, [filmName]);

  return (
    <>
      {' '}
      <SearchForm onHandleSubmit={onHandleSubmit} />
      {films.length !== 0 && (
        <List>
          <FilmList response={films} />
        </List>
      )}
    </>
  );
};

export default SearchFilms;
