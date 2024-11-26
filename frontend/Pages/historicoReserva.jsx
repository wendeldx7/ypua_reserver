import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import {
  Container,
  ContainerCheckIn,
  Section,
  LinhaTabela,
  CabecalhoTabela,
  Informacoes,
  Titulo,
  Mensagem,
  ContainerFiltro,
  Entrada
} from "../Styles/historicoStyled.js";

const estilosPersonalizados = {
  control: (provided) => ({
    ...provided,
    width: '100%',
    innerHeight: '100px',
    padding: '5px',
    borderRadius: '8px',
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#461615',
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '10px',
    backgroundColor: state.isSelected ? '#461615' : state.isFocused ? '#e9f0f7' : '#fff',
    color: state.isSelected ? '#fff' : '#333333',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#461615',
      color: "#FFFFFF"
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'black',
  }),
};

const HistoricoDeReservas = () => {
  const [checkIns, setCheckIns] = useState([]);
  const [erro, setErro] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [nomesDosQuartos, setNomesDosQuartos] = useState([]);
  const [quartoSelecionado, setQuartoSelecionado] = useState(null);

  useEffect(() => {
    const buscarNomesDosQuartos = async () => {
      try {
        const resposta = await fetch("http://localhost:3333/quartos");
        const dados = await resposta.json();

        const nomes = dados.quartos.map((quarto) => ({
          value: quarto.quarto,
          label: quarto.quarto,
        }));
        setNomesDosQuartos(nomes);
      } catch (erro) {
        console.error("Erro ao buscar os nomes dos quartos:", erro);
      }
    };

    buscarNomesDosQuartos();
  }, []);

  useEffect(() => {
    const buscarCheckIns = async () => {
      try {
        const resposta = await axios.get("http://localhost:3333/check/");
        setCheckIns(resposta.data);
      } catch (erro) {
        setErro("Erro ao carregar os dados.");
      }
    };

    buscarCheckIns();
  }, []);

  const filtrarReservas = () => {
    let filtrado = checkIns;

    if (dataInicio && dataFim) {
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);

      filtrado = filtrado.filter((checkIn) => {
        const dataCheckIn = new Date(checkIn.checkInData);
        return dataCheckIn >= inicio && dataCheckIn <= fim;
      });
    }

    if (quartoSelecionado) {
      filtrado = filtrado.filter((checkIn) => checkIn.quarto?.quarto === quartoSelecionado.value);
    }

    return filtrado;
  };

  const checkInsFiltrados = filtrarReservas();

  const formatarData = (data) => {
    const opcoes = { day: "numeric", month: "short", year: "numeric" };
    return new Date(data).toLocaleDateString("pt-BR", opcoes);
  };

  return (
    <Container>
      <Titulo>Histórico de Reservas</Titulo>
      {erro && <Mensagem>{erro}</Mensagem>}
      <ContainerFiltro>
        <Entrada
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
        />
        <Entrada
          type="date"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
        />
        <Select
          options={nomesDosQuartos}
          value={quartoSelecionado}
          onChange={setQuartoSelecionado} ar
          placeholder="Filtrar por acomodação"
          isClearable
          isSearchable={false}
          styles={estilosPersonalizados}
        />
      </ContainerFiltro>
      {checkInsFiltrados.map((checkIn) => (
        <ContainerCheckIn key={checkIn.checkId}>
          <Section>
            <CabecalhoTabela>
              <Informacoes flex="2">Data de Entrada</Informacoes>
              <Informacoes flex="2">Data de Saída</Informacoes>
              <Informacoes flex="3">Nome</Informacoes>
              <Informacoes flex="2">Quarto</Informacoes>
              <Informacoes flex="2">Status</Informacoes>
              <Informacoes flex="2">Preço Total</Informacoes>
            </CabecalhoTabela>
            <LinhaTabela>
              <Informacoes flex="2">{formatarData(checkIn.checkInData)}</Informacoes>
              <Informacoes flex="2">{formatarData(checkIn.checkOutData)}</Informacoes>
              <Informacoes flex="3">{checkIn.nome}</Informacoes>
              <Informacoes flex="2">{checkIn.quarto?.quarto}</Informacoes>
              <Informacoes flex="2">{checkIn.status}</Informacoes>
              <Informacoes flex="2">R$ {checkIn.precoTotal}</Informacoes>
            </LinhaTabela>
          </Section>
        </ContainerCheckIn>
      ))}
    </Container>
  );
};

export default HistoricoDeReservas;
