import React, { useEffect, useState } from "react";
import axios from "axios";
import imagensQuartos from "../utils/imagensQuartos";
import { useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import Foto02 from "../Image/FOTO02.png";
import Cafe from "../Image/CAFE.png";
import ArCondicionado from "../Image/GELO.png";
import TV from "../Image/TV.png";
import Wifi from "../Image/WIFI.png";
import {
  Container,
  ContainerTitulo,
  Section,
  ContainerQuarto,
  ContainerFacilidades,
  CardTitle,
  CardPrice,
  CardFacilities,
  ContainerImagem,
  Imagem,
  ContainerBotao,
  Button,
  Container1,
  Input,
  ContainerInput,
  Label,
  BotaoPesquisar,
  BotaoFiltrar,
  MenuDropdown,
  Contador,
  LabelContador,
  DescricaoContador,
  Controles,
  BotaoControle,
  BotaoConfirmar,
  ContainerTexto,
  BarraLateral,
  ContainerFiltro,
} from "../Styles/AcomodacaoStyled";

const icones = {
  WiFi: Wifi,
  ArCondicionado: ArCondicionado,
  Tv: TV,
  Café: Cafe,
};

const AcomodacaoPage = () => {
  const [acomodacoes, setAcomodacoes] = useState([]);
  const [dataEntrada, setDataEntrada] = useState("");
  const [dataSaida, setDataSaida] = useState("");
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [adultos, setAdultos] = useState(1);
  const [criancas, setCriancas] = useState(0);
  const [bebes, setBebes] = useState(0);
  const [quartosFiltrados, setQuartosFiltrados] = useState([]); // Novo estado para armazenar os quartos filtrados
  const navigate = useNavigate(); // Inicializa o useNavigate

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3333/quartos");
        setAcomodacoes(response.data.quartos);
        setQuartosFiltrados(response.data.quartos); // Inicializa os quartos filtrados com todos os quartos
      } catch (error) {
        console.error("Erro ao buscar acomodações:", error);
      }
    };

    fetch();
  }, []);

  const handleReservar = (quartoId) => {
    navigate(`/check/${quartoId}`); // Redireciona para a página do quarto
  };

  const alternarDropdown = () => setDropdownAberto(!dropdownAberto);

  const ResumoPassageiros = () => {
    let resumo = `${adultos} Adulto${adultos > 1 ? "s" : ""}`;
    if (criancas > 0)
      resumo += `, ${criancas} Criança${criancas > 1 ? "s" : ""}`;
    if (bebes > 0) resumo += `, ${bebes} Bebê${bebes > 1 ? "s" : ""}`;
    return resumo;
  };

  const handleConfirmar = () => {
    setDropdownAberto(false);
    console.log("Passageiros confirmados:", ResumoPassageiros());
    filtrarQuartos();
  };

  const handlePesquisar = () => {
    console.log("Data de entrada:", dataEntrada);
    console.log("Data de saída:", dataSaida);
    console.log("Passageiros:", ResumoPassageiros());
    filtrarQuartos();
  };

  // Função para filtrar os quartos de acordo com a capacidade
  const filtrarQuartos = () => {
    const numeroHospedes = adultos + criancas + bebes;
    const quartosFiltrados = acomodacoes.filter(
      (quarto) => quarto.capacidade >= numeroHospedes
    );
    setQuartosFiltrados(quartosFiltrados);
  };

  return (
    <Container>
      <ContainerTitulo>
        <h2
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            margin: 0,
          }}
        >
          Escolha as Acomodações
        </h2>
      </ContainerTitulo>

      <Container1>
        <ContainerFiltro>
          <ContainerInput>
            <Label htmlFor="">ENTRADA</Label>
            <Input
              type="date"
              value={dataEntrada}
              onChange={(e) => setDataEntrada(e.target.value)}
            />
          </ContainerInput>
          <BarraLateral />
          <ContainerInput>
            <Label htmlFor="">SAÍDA</Label>
            <Input
              type="date"
              value={dataSaida}
              onChange={(e) => setDataSaida(e.target.value)}
            />
          </ContainerInput>
          <BarraLateral />
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

                <BotaoConfirmar onClick={handleConfirmar}>
                  Confirmar
                </BotaoConfirmar>
              </MenuDropdown>
            )}
          </div>
        </ContainerFiltro>
        <BotaoPesquisar onClick={handlePesquisar}>Pesquisar</BotaoPesquisar>
      </Container1>

      <Section>
        {quartosFiltrados.map((acomodacao) => (
          <ContainerQuarto key={acomodacao.quartoId}>
            <ContainerImagem>
              <Imagem
                src={
                  imagensQuartos[`foto${acomodacao.caminhoImagem.slice(-1)}`] ||
                  imagensQuartos.foto1
                }
              />
            </ContainerImagem>
            <ContainerFacilidades>
              <CardTitle>{acomodacao.quarto}</CardTitle>
              <CardFacilities>
                {Object.keys(acomodacao.facilidades).map(
                  (key) =>
                    acomodacao.facilidades[key] && (
                      <li key={key}>
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1")}
                      </li>
                    )
                )}
              </CardFacilities>
            </ContainerFacilidades>
            <ContainerBotao>
              <h6>à partir de: </h6>
              <CardPrice>R$ {acomodacao.precoPorNoite}</CardPrice>
              <Button onClick={() => handleReservar(acomodacao.quartoId)}>
                Reservar
              </Button>
            </ContainerBotao>
          </ContainerQuarto>
        ))}
      </Section>
    </Container>
  );
};

export default AcomodacaoPage;
