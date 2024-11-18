import React, { useState } from "react";
import { 
  ContainerPagina, 
  Titulo, 
  MiniNavbar, 
  CampoEntrada, 
  Label, 
  Input, 
  BotaoPesquisar 
} from "../Styles/CheckinStyled.js";

const PaginaCheckIn = () => {
  const [dataEntrada, setDataEntrada] = useState("");
  const [dataSaida, setDataSaida] = useState("");

  const handlePesquisar = () => {
    console.log("Data de entrada:", dataEntrada);
    console.log("Data de saída:", dataSaida);
  };

  return (
    <ContainerPagina>
      <Titulo>Escolha as acomodações</Titulo>
      <MiniNavbar>
        <CampoEntrada>
          <Label>Entrada</Label>
          <Input
            type="date"
            value={dataEntrada}
            onChange={(e) => setDataEntrada(e.target.value)}
          />
        </CampoEntrada>
        <CampoEntrada>
          <Label>Saída</Label>
          <Input
            type="date"
            value={dataSaida}
            onChange={(e) => setDataSaida(e.target.value)}
          />
        </CampoEntrada>
        <BotaoPesquisar onClick={handlePesquisar}>Pesquisar</BotaoPesquisar>
      </MiniNavbar>
    </ContainerPagina>
  );
};

export default PaginaCheckIn;
