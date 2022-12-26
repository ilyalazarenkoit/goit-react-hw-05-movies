import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ButtonSearch = styled.button`
  background-color: rgb(96, 96, 24);
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition-duration: 0.7s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const InputSearch = styled.input`
  height: 30px;
  width: 400px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
  color: rgb(96, 96, 24);
  font-weight: 500;
  font-size: 20px;
  background-color: rgb(240, 240, 191);
`;
