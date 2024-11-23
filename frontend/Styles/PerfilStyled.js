import styled from "styled-components";

export const ContainerSuperior = styled.div`
  width: 100%;
  max-width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D8E2E8;
  padding: 0 20px;
  background-color: white;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const IconesDireita = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const FotoPerfil = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const BotaoNotificacao = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const NavbarLateral = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ aberta }) => (aberta ? "200px" : "60px")};
  background-color: white;
  border-right: 1px solid #D8E2E8;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: ${({ aberta }) => (aberta ? "flex-start" : "center")};
  padding: 10px 0;
  z-index: 1000;
`;

export const BotaoToggle = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #666;
  }
`;

export const ItemLink = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
    margin-right: ${({ aberta }) => (aberta ? "10px" : "0")};
  }
`;

export const NomeLink = styled.span`
  font-size: 14px;
  color: #D8E2E8;
  transition: opacity 0.3s ease;
  margin-left:10px
`;

export const Separador = styled.div`
  width: 80%;
  height: 3px;
  background-color: #D8E2E8;
  margin: 10px auto;
`;
