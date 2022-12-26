import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 20px 0 20px 0;
`;

export const Item = styled.li`
  background: rgb(240, 240, 191);
  display: flex;
  width: 340px;
  height: 460px;
  border-radius: 10px;
  transition-duration: 0.7s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  display: block;
  width: 340px;
  height: 400px;
  border-radius: 10px;
`;

export const FilmName = styled.p`
  display: block;
  color: rgb(96, 96, 24);
  font-size: 20px;
  padding: 10px;
`;
