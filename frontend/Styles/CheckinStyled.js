import styled from "styled-components";

export const ContainerPagina = styled.div`
  padding: 0 20px;
`;

export const Titulo = styled.h1`
  color: #000;
  font-size: 25px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const MiniNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  height: 70px;
  margin: 20px auto;
  padding: 0 10px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
    gap: 10px;
  }
`;

export const CampoEntrada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 28%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LinhaVertical = styled.div`
  width: 2px;
  height: 100%;
  background-color: #ccc;
  margin: 0 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BotaoPesquisar = styled.button`
  height: 60px;
  width: 200px;
  padding: 0 20px;
  background-color: #461615;
  color: #fff;
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 88%;
  font-weight: 400;

  &:hover {
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
