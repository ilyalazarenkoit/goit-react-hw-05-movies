import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 30px;
  margin-top: 10px;
`;
export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  color: rgb(96, 96, 24);
  font-weight: 500;
  font-size: 30px;

  &.active {
    background-color: rgb(96, 96, 24);
    color: rgb(240, 240, 191);
    border: none;
    border-radius: 5%;
  }
`;
