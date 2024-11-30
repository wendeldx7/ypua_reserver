import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  background-color: #ffffff;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  top: 0px;
  left: 0px;
  width: 190px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: black;
    width: 30px;
    height: 30px;
    margin-top: 25px;
    margin-left: 35px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 180px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 80px;


  > div {
    margin-bottom: 30px; /* Espaçamento entre os itens */
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove o sublinhado */
  color: inherit;        /* Mantém a cor do texto inalterada */
`;