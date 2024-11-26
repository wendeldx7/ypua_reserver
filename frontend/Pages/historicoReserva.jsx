import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const CheckInContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const TableHeader = styled(TableRow)`
  font-weight: bold;
 
`;

export const TableCell = styled.div`
  flex: ${({ flex }) => flex || 1}; /* Ajustar a largura proporcional */
  padding: 8px;
  text-align: left;
  white-space: nowrap; /* Evitar quebra de linha */
  overflow: hidden;
  text-overflow: ellipsis; /* Adicionar "..." para textos longos */
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  text-align: center;
  color: red;
`;

const HistoricoDeReservas = () => {
  const [checkIns, setCheckIns] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchCheckIns = async () => {
      try {
        const response = await axios.get("http://localhost:3333/check/");
        setCheckIns(response.data);
      } catch (err) {
        setErro("Erro ao carregar os dados.");
      }
    };

    fetchCheckIns();
  }, []);

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Date(date).toLocaleDateString("pt-BR", options);
    return formattedDate;
  };

  return (
    <Container>
      <Title>Histórico de Reservas</Title>
      {erro && <Message>{erro}</Message>}
      {checkIns.map((checkIn) => (
        <CheckInContainer key={checkIn.checkId}>
          <Table>
            <TableHeader>
              <TableCell flex="2">Data de Entrada</TableCell>
              <TableCell flex="2">Data de Saída</TableCell>
              <TableCell flex="3">Nome</TableCell>
              <TableCell flex="2">Quarto</TableCell>
              <TableCell flex="2">Status</TableCell>
              <TableCell flex="2">Preço Total</TableCell>
            </TableHeader>
            <TableRow>
              <TableCell flex="2">{formatDate(checkIn.checkInData)}</TableCell>
              <TableCell flex="2">{formatDate(checkIn.checkOutData)}</TableCell>
              <TableCell flex="3">{checkIn.nome}</TableCell>
              <TableCell flex="2">{checkIn.quarto?.quarto}</TableCell>
              <TableCell flex="2">{checkIn.status}</TableCell>
              <TableCell flex="2">R$ {checkIn.precoTotal}</TableCell>
            </TableRow>
          </Table>
        </CheckInContainer>
      ))}
    </Container>
  );
};

export default HistoricoDeReservas;
