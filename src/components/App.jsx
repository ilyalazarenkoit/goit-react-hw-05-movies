import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, lazy } from 'react';
import { fetchTrendingFilms } from 'API/api';
import { Layout } from './Layout/Layout';
import { List } from './FilmList/FilmList.styled';
import { MainTitle } from './App.styled';

const FilmList = lazy(() => import('./FilmList/FilmList'));
const SearchFilms = lazy(() => import('./SearchFilms/SearchFilms'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const addTrending = async () => {
      setResponse(await fetchTrendingFilms());
    };
    addTrending();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path="/"
          element={
            <>
              <MainTitle>Trending Films</MainTitle>
              <List>
                <FilmList response={response} />
              </List>
            </>
          }
        />
        <Route path="movies" element={<SearchFilms />} />
        <Route path="movies/:filmId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<MainTitle>Page Not Found</MainTitle>} />
      </Route>
    </Routes>
  );
};
