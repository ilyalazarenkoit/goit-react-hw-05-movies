import { useEffect, useState } from 'react';
import { fetchCast } from 'API/api';
import { useParams } from 'react-router-dom';
import { CastDesr, CastImg, CastItem, CastList } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    async function getCast() {
      try {
        const response = await fetchCast(filmId);
        if (response.length) {
          setCast(response.slice(0, 10));
        }
      } catch (error) {
        alert(error);
      }
    }
    getCast();
  }, [filmId]);
  return (
    <CastList>
      {cast.length
        ? cast.map(({ id, name, character, profile_path }) => {
            return (
              <CastItem key={id}>
                {profile_path ? (
                  <CastImg
                    width="100"
                    height="130"
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                  />
                ) : (
                  'NO PHOTO'
                )}
                <CastDesr>
                  <h3>Actor: {name}</h3>
                  <h3>Role: {character}</h3>
                </CastDesr>
              </CastItem>
            );
          })
        : 'No Cast Found'}
    </CastList>
  );
};
export default Cast;
