import { Link, useLocation } from 'react-router-dom';
import { Item, Image, FilmName } from './FilmList.styled';
import PropTypes from 'prop-types';

export const FilmList = ({ response }) => {
  const location = useLocation();

  return (
    <>
      {response.map(({ id, name, original_title, poster_path }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`} key={`${id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={original_title}
              />
              <FilmName>{original_title || name}</FilmName>
            </Link>
          </Item>
        );
      })}
    </>
  );
};
export default FilmList;
FilmList.propTypes = {
  response: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
    })
  ),
};
