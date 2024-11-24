import styled from "styled-components";
import { useState } from "react";

export const Container = styled.div`
  height: 10vh;
  width: 90%;
  background-color: #ffffff;
  box-shadow: 5px 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0 28px 0 28px;
`;

export const Input = styled.input`
  height: 100%;
  width: 22vh;
  display: flex;
  align-items: center;
  font-size: 17px;
  border: none;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
 
`;

export const ContainerInput = styled.div`
  height: 100%;
  width: 22vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  border: none;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

export const BotaoPesquisar = styled.button`
  height: 65px;
  width: 272px;
  padding: 0 20px;
  color:#FFFFFF;
  background-color: #461615;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 88%;
  font-weight: 400;

  &:hover {
    transition: 0.3s;
  }
`;
export const BotaoFiltrar = styled.button`
  height: 50px;
  width: 272px;
  padding: 0 20px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 88%;
  font-weight: 400;

  &:hover {
    transition: 0.3s;
  }
`;

const MenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 230px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 10;
 
`;

const Contador = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: space-between;
  
`;

const LabelContador = styled.div`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

`;

const DescricaoContador = styled.div`
  font-size: 14px;
  color: #777;
  font-family: "Montserrat", sans-serif;
  line-height: 1.2;
`;

const Controles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: space-around;
  width: 100px;

`;

const BotaoControle = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #461615;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  color: #461615;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const BotaoConfirmar = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #461615;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const ContainerTexto = styled.div`
height:100%;
width: 40%;

`
const BarraLateral = styled.div`
height:100%;
border: 1px solid #D0D0D0;
`
const ContainerFiltro = styled.div`
height:100%;
width:65%;
display:flex;
align-items:center;
justify-content:space-around;
`



const Filtragem = () => {
  const [dataEntrada, setDataEntrada] = useState("");
  const [dataSaida, setDataSaida] = useState("");

  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [adultos, setAdultos] = useState(1);
  const [criancas, setCriancas] = useState(0);
  const [bebes, setBebes] = useState(0);

 
  const alternarDropdown = () => setDropdownAberto(!dropdownAberto);

  const ResumoPassageiros = () => {
    let resumo = `${adultos} Adulto${adultos > 1 ? "s" : ""}`;
    if (criancas > 0) resumo += `, ${criancas} Criança${criancas > 1 ? "s" : ""}`;
    if (bebes > 0) resumo += `, ${bebes} Bebê${bebes > 1 ? "s" : ""}`;
    return resumo;
  };


  const handleConfirmar = () => {
    setDropdownAberto(false); 
    console.log("Passageiros confirmados:", ResumoPassageiros());
  };


  const handlePesquisar = () => {
    console.log("Data de entrada:", dataEntrada);
    console.log("Data de saída:", dataSaida);
    console.log("Passageiros:", ResumoPassageiros());
  };

  return (
    <Container>
        <ContainerFiltro>
      <ContainerInput>
        <Label htmlFor="">ENTRADA</Label>
        <Input
          type="date"
          value={dataEntrada}
          onChange={(e) => setDataEntrada(e.target.value)}
        />
      </ContainerInput>
<BarraLateral/>
      <ContainerInput>
        <Label htmlFor="">SAÍDA</Label>
        <Input
          type="date"
          value={dataSaida}
          onChange={(e) => setDataSaida(e.target.value)}
        />
      </ContainerInput>
     <BarraLateral/>
      <div style={{ position: "relative" }}>
        <BotaoFiltrar onClick={alternarDropdown}>
            <p>Selecione os Hóspedes</p>
          {ResumoPassageiros()}
        </BotaoFiltrar>

        {dropdownAberto && (
          <MenuDropdown>
            {/* Adultos */}
            <Contador>
               <ContainerTexto>
              <LabelContador>Adultos</LabelContador>
              <DescricaoContador>A partir de 12 anos</DescricaoContador>
              </ContainerTexto>
              <Controles>
                <BotaoControle
                  onClick={() => setAdultos(adultos - 1)}
                  disabled={adultos <= 1}
                >
                  -
                </BotaoControle>
                <span>{adultos}</span>
                <BotaoControle onClick={() => setAdultos(adultos + 1)}>
                  +
                </BotaoControle>
              </Controles>
          
            </Contador>

            {/* Crianças */}
            <Contador>
            <ContainerTexto>
              <LabelContador>Crianças</LabelContador>
              <DescricaoContador>2 a 11 anos</DescricaoContador>
              </ContainerTexto>
              <Controles>
                <BotaoControle
                  onClick={() => setCriancas(criancas - 1)}
                  disabled={criancas <= 0}
                >
                  -
                </BotaoControle>
                <span>{criancas}</span>
                <BotaoControle onClick={() => setCriancas(criancas + 1)}>
                  +
                </BotaoControle>
              </Controles>
            </Contador>

            {/* Bebês */}
            <Contador>
            <ContainerTexto>
              <LabelContador>Bebês</LabelContador>
              <DescricaoContador>0 a 23 meses</DescricaoContador>
              </ContainerTexto>
              <Controles>
                <BotaoControle
                  onClick={() => setBebes(bebes - 1)}
                  disabled={bebes <= 0}
                >
                  -
                </BotaoControle>
                <span>{bebes}</span>
                <BotaoControle onClick={() => setBebes(bebes + 1)}>
                  +
                </BotaoControle>
              </Controles>
            </Contador>

            <BotaoConfirmar onClick={handleConfirmar}>Confirmar</BotaoConfirmar>
          </MenuDropdown>
        )}
      </div>
      </ContainerFiltro>
      <BotaoPesquisar onClick={handlePesquisar}>Pesquisar</BotaoPesquisar>
    </Container>
  );
};

export default Filtragem;