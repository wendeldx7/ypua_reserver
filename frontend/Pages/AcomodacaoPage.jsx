import styled from "styled-components";

import { Container } from "../Styles/AcomodacoesStyled.js";
import Filtragem from "../Components/Filtragem.jsx";

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
width:100%;
height:80%;
border:1px solid black;
`

const AcomodacaoPage = ()=>{

    
return(
    <Container>
        <ContainerTitulo>
    <h2>ESCOLHA AS ACOMODAÇÕES</h2>
        </ContainerTitulo>
        <Filtragem/>
        <Section>
            
        </Section>
    </Container>
)
}

export default AcomodacaoPage