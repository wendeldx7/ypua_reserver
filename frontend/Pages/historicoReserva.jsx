import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, CheckInContainer, Table, TableHeader, TableRow, TableHeaderCell, TableCell, Title, Message } from "../Styles/historicoStyled";

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
              <tr>
                <TableHeaderCell>Data de Entrada</TableHeaderCell>
                <TableHeaderCell>Data de Saída</TableHeaderCell>
                <TableHeaderCell>Nome</TableHeaderCell>
                <TableHeaderCell>Quarto</TableHeaderCell> 
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Preço Total</TableHeaderCell> 
              </tr>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>{formatDate(checkIn.checkInData)}</TableCell>
                <TableCell>{formatDate(checkIn.checkOutData)}</TableCell>
                <TableCell>{checkIn.nome}</TableCell>
                <TableCell>{checkIn.quarto?.quarto}</TableCell>
                <TableCell>{checkIn.status}</TableCell>
                <TableCell>{checkIn.precoTotal}</TableCell> 
              </TableRow>
            </tbody>
          </Table>
        </CheckInContainer>
      ))}
    </Container>
  );
};

export default HistoricoDeReservas;
