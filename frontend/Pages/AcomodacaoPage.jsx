import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Container } from "../Styles/AcomodacoesStyled.js";
import Filtragem from "../Components/Filtragem.jsx";
import NavBar from "../Components/NavBar.jsx";
import Foto02 from "../Image/FOTO02.png"
import Cafe from "../Image/Icones/CAFE.png"
import Chuveiro from "../Image/Icones/CHUVEIRO.png"
import Cama from "../Image/Icones/Frame4.png"
import ArCondicionado from "../Image/Icones/GELO.png"
import TV from "../Image/Icones/TV.png"
import Wifi from "../Image/Icones/WIFI.png"


const icones = {
    WiFi: Wifi,
    ArCondicionado: ArCondicionado,
    Tv: TV,
    Café: Cafe,
  };


// "wifi": true,
//     "arCondicionado": true,
//     "tv": true,
//     "frigobar": true,
//     "servicoDeQuarto": true

export const ContainerTitulo = styled.div`
height:auto;
width:100%;
display:flex;
align-items:center;
justify-content:center;
padding-top: 70px; 
padding-bottom: 70px; 
`

const Section = styled.section`
width:90%;
height:100%;
display: grid;
  grid-template-columns: repeat(3, 1fr); // 2 colunas
  gap: 20px;
  padding: 20px;
  margin-top:90px;
`

const ContainerQuarto = styled.div`
  display: flex;
  width:300px;
  height: 600px;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ContainerFacilidades = styled.div`
width: 100%;
padding: 15px;
height: 40%;
display: flex;
flex-direction: column;
justify-content: flex-start;

`;

const CardTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardFacilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  display: flex;
  flex-direction:column;
  justify-content:start;

  li {
    margin-bottom: 5px;
  }
`;

const ContainerImagem = styled.div`
width:100%;
height:40%;
`

const Imagem = styled.img`
width:100%;
height:100%;
`

const ContainerBotao = styled.div`
height:19%;
width:90%;
`

const Button = styled.div`
display:flex;
width:100%;
height:45%;
background-color:#461615;
color:#FFFFFF;
border-radius:7px;
align-items:center;
justify-content:center;
`

const AcomodacaoPage = () => {

    const [acomodacoes, setAcomodacoes] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('http://localhost:3333/quartos');
                setAcomodacoes(response.data.quartos);
            } catch (error) {
                console.error("Erro ao buscar acomodações:", error);
            }
        };

        fetch();
    }, []);

    return (
        <Container>
            <NavBar />
            <ContainerTitulo>
                <h2>ESCOLHA AS ACOMODAÇÕES</h2>
            </ContainerTitulo>
            <Filtragem />
            <Section>
                {acomodacoes.map((acomodacao) => (
                    <ContainerQuarto key={acomodacao.quartoId}>
                        <ContainerImagem>
                            <Imagem src={Foto02} />
                        </ContainerImagem>
                        <ContainerFacilidades>
                            <CardTitle>{acomodacao.quarto}</CardTitle>
                            <CardFacilities>
                                {Object.keys(acomodacao.facilidades).map(
                                    (key) =>
                                        acomodacao.facilidades[key] && (
                                            <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</li>
                                        )
                                )}
                            </CardFacilities>
                        </ContainerFacilidades>
                        <ContainerBotao>
                            <h6>à partir de: </h6>
                            <CardPrice>R$ {acomodacao.precoPorNoite}</CardPrice>
                            <Button>Reservar</Button>
                        </ContainerBotao>
                    </ContainerQuarto>
                ))}
            </Section>
        </Container>
    )
}

export default AcomodacaoPage