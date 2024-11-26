import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  font-size: 16px;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: 3px solid #D8E2E8;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    border: 3px solid #461615;
    transition: 0.3s;
  }
`;

