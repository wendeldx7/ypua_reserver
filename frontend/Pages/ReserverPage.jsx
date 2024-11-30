import React from "react";
import NavBar from "../Components/NavBar.jsx";

import {
    TituloAcomodacao,
    TituloH3,
    ReseverContainer,
    NomeEntrada,
    InputEntrada,
    NomeSaida,
    InputSaida,
    InputContainer,
    NomeNome,
    InputNome,
    NomeCPF,
    InputCPF,
    NomeTelefone,
    InputTelefone,
    NomeHospedes,
    InputHospedes,
    ResumoContainer,
    BotaoReservar,
    FormRow,
    FormColumn,
    NomeResumo,
    TituloFotoAcomodacao,
    FotoAcomodacao,
    AcomodacaoContainer,
    ContainerPage,
    ContainerTitulos,
    DescricaoAcomodacao,
    DescricaoAcomodacao02,
    ValorAcomodacao,
    TituloComodidades,
    ContainerComodidades,
    ImageComodidades,
    NomeComotidades,
    Resumo
} from "../Styles/ReserverStyled";
import foto02 from "../Image/FOTO02.png";
import CamaImg from "../Image/Frame4.png";
import WifiImg from "../Image/WIFI.png"
import ArCondicionadoimg from "../Image/GELO.png"
import TVimg from "../Image/TV.png"
import Banheiroimg from "../Image/PAPEL.png"
import Duchaimg from "../Image/CHUVEIRO.png"
import Cosinhaimg from "../Image/TALHERES.png"
import Cafeimg from "../Image/CAFE.png"

const ReserverPage = () => {
    return (
        <>
            <TituloAcomodacao>Nome Acomodação</TituloAcomodacao>
            <ContainerTitulos>
                <TituloH3>Reservar</TituloH3>
                <TituloFotoAcomodacao>Foto acomodação</TituloFotoAcomodacao>
            </ContainerTitulos>
            <ContainerPage>
                <ReseverContainer>
                    <FormColumn>
                        <FormRow>
                            <InputContainer>
                                <NomeEntrada>Entrada</NomeEntrada>
                                <InputEntrada />
                            </InputContainer>
                            <InputContainer>
                                <NomeSaida>Saída</NomeSaida>
                                <InputSaida />
                            </InputContainer>
                        </FormRow>

                        <InputContainer>
                            <NomeNome>Nome</NomeNome>
                            <InputNome />
                        </InputContainer>

                        <InputContainer>
                            <NomeCPF>CPF</NomeCPF>
                            <InputCPF />
                        </InputContainer>

                        <InputContainer>
                            <NomeTelefone>Telefone</NomeTelefone>
                            <InputTelefone />
                        </InputContainer>

                        <FormRow>
                            <InputContainer>
                                <NomeHospedes>Hóspedes</NomeHospedes>
                                <InputHospedes />
                            </InputContainer>
                            <div style={{ flex: 1 }}>
                                <NomeResumo>Resumo</NomeResumo>
                                <ResumoContainer>
                                    <Resumo>Data de entrada: 10/09/2024</Resumo>
                                    <p>Data de saída: 11/09/2024</p>
                                    <p>Qtd. hóspedes: 1</p>
                                    <p>Valor diária: R$300</p>
                                </ResumoContainer>
                            </div>
                        </FormRow>
                    </FormColumn>
                    <BotaoReservar>Reservar</BotaoReservar>
                </ReseverContainer>

                <AcomodacaoContainer>

                    <FotoAcomodacao src={foto02} />
                    <DescricaoAcomodacao>Laguna, Santa catarina</DescricaoAcomodacao>
                    <DescricaoAcomodacao02>1 quarto, 1 cozinha, 1 banheiro </DescricaoAcomodacao02>
                    <ValorAcomodacao>R$300/dia</ValorAcomodacao>
                    <TituloComodidades>Comodidades populares</TituloComodidades>
                    <ContainerComodidades>
                        <ImageComodidades src={CamaImg} />
                        <NomeComotidades>1 cama Casal</NomeComotidades>
                        <ImageComodidades src={WifiImg} />
                        <NomeComotidades>wifi</NomeComotidades>
                        <ImageComodidades src={ArCondicionadoimg} />
                        <NomeComotidades>Ar Condicionado</NomeComotidades>
                        <ImageComodidades src={TVimg} />
                        <NomeComotidades>Tv</NomeComotidades>
                        <ImageComodidades src={Banheiroimg} />
                        <NomeComotidades>1 Banheiro</NomeComotidades>
                        <ImageComodidades src={Duchaimg} />
                        <NomeComotidades>Ducha</NomeComotidades>
                        <ImageComodidades src={Cosinhaimg} />
                        <NomeComotidades>1 Cozinha</NomeComotidades>
                        <ImageComodidades src={Cafeimg} />
                        <NomeComotidades>Café</NomeComotidades>
                    </ContainerComodidades>
                </AcomodacaoContainer>
            </ContainerPage>
        </>
    );
};

export default ReserverPage;
