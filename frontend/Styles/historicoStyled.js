import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const CheckInContainer = styled.div`
  margin-bottom: 20px; /* Espaço entre os check-ins */
  padding: 10px;
  border-radius: 8px;
  background-color: #f9f9f9; /* Fundo claro */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const Table = styled.table`
  width: 100%;
  
`;

export const TableHeader = styled.thead`
  color: #000000;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 8px;
  text-align: left;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  text-align: center;
  color: red;
`;
