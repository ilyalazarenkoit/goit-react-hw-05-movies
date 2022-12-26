import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const SectionMD = styled.section`
  margin-top: 20px;
  padding: 25px;
  color: rgb(96, 96, 24);
  background-color: rgb(240, 240, 191);
  border-radius: 10px;
`;
export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  heigth: 100%;
  margin-left: 20px;
`;

export const ImgDetails = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 10px;
`;

export const DetailsTitle = styled.h3`
  margin-bottom: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: rgb(96, 96, 24);
  font-size: 20px;

  &.active {
    background-color: rgb(96, 96, 24);
    color: rgb(240, 240, 191);
    border-radius: 10%;
    padding: 5px;
  }
`;

export const GoBackLink = styled(Link)`
  display: block;
  width: 70px;
  background-color: rgb(96, 96, 24);
  color: rgb(240, 240, 191);
  border-radius: 5px;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
