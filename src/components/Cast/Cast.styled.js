import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
`;

export const CastItem = styled.li`
  width: 220px;
  background-color: rgb(160, 160, 87);
  border-radius: 10px;
`;

export const CastImg = styled.img`
  display: block;
  width: 220px;
  height: 250px;
  border-radius: 10px;
`;

export const CastDesr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  color: rgb(240, 240, 191);
`;
