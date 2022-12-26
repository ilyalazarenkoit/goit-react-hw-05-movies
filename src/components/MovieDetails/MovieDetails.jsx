import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'API/api';
import { useEffect, useState, Suspense } from 'react';
import {
  SectionMD,
  DetailsWrapper,
  ImgDetails,
  Container,
  DetailsTitle,
  StyledLink,
  LinkWrapper,
  GoBackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { filmId } = useParams();
  const [movie, setMovieDetails] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchById = async () => {
      try {
        const response = await fetchMovieById(filmId);
        if (response) {
          setMovieDetails(response);
        }
      } catch (error) {
        alert(error);
      }
    };
    fetchById();
  }, [filmId]);
  const { original_title, release_date, overview, poster_path, vote_average } =
    movie;
  return (
    <>
      <GoBackLink to={backLinkHref}>Go Back</GoBackLink>
      <SectionMD>
        <h2>{original_title}</h2>
        <Container>
          <ImgDetails
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : ''
            }
            alt={original_title}
          />
          <DetailsWrapper>
            <DetailsTitle>Vote Avarage: </DetailsTitle>
            <DetailsTitle>{vote_average} </DetailsTitle>
            <DetailsTitle>
              Release Date: <p>{release_date}</p>
            </DetailsTitle>
            <DetailsTitle>
              Overview: <p>{overview}</p>
            </DetailsTitle>
          </DetailsWrapper>
        </Container>
        <LinkWrapper>
          <StyledLink to="cast" state={{ from: location.state?.from }}>
            Cast
          </StyledLink>
          <StyledLink to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </StyledLink>
        </LinkWrapper>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </SectionMD>
    </>
  );
};

export default MovieDetails;
