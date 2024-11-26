import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;

  > svg {
    color: black;
    width: 27px;
    height: 27px;
    margin-left: 35px;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  max-height: 50px; /* Limita a altura da logo */
  margin-left: 250%; /* Ajusta a posição horizontal */
`;
