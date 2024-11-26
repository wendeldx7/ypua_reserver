import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 77vh;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const ContainerCheckIn = styled.div`
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LinhaTabela = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const CabecalhoTabela = styled(LinhaTabela)`
  font-weight: bold;
`;

export const Informacoes = styled.div`
  flex: ${({ flex }) => flex || 1};
  padding: 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Mensagem = styled.p`
  text-align: center;
  color: red;
`;

export const ContainerFiltro = styled.div`
  height: 100px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

export const Entrada = styled.input`
  width: 15%;
  font-size: 14px;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;