import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledNavLink, Wrapper, Section } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <StyledNavLink key={`/`} to="/">
            Home
          </StyledNavLink>
          <StyledNavLink key={'movies'} to="/movies">
            Movies
          </StyledNavLink>
        </Wrapper>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};
