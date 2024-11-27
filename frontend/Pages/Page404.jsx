import styled from "styled-components"
import Gif from "../Image/bg.gif"
import { Link } from "react-router-dom"

const Container = styled.div`
height:100vh;
width:100%;
background-color:#ffffff;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background: ('../Image/bg.gif');
`
const ContainerGif = styled.div`
height:80vh;
width:60%;

`
const LinkVoltar = styled(Link)`
height:70px;
width:170px;
text-decoration:none;
background-color:#461615;
display:flex;
align-items:center;
justify-content:center;
color:#FFFFFF;
border-radius:10px;
position:absolute;
bottom:160px;

`

const H1 = styled.h1`
font-size:30px;
top:200px;
position:absolute;
font-family:'Montserrant, Sans-serif';
weight:400;
font-size:80px;
color:#461615;
`
const H2 = styled.h2`
font-size:30px;
bottom:280px;
position:absolute;
font-family:'Montserrant, Sans-serif';
weight:400;
`
const H5 = styled.h4`
bottom:250px;
position:absolute;
font-family:' Montserrant, sans-serif';

`


const Page404 = () => {
    return (

        <Container>
              <H1>404</H1>
                <img src={Gif} alt="" />
                <H2>Parece que você está perdido</H2>
                <H5>A página que você procura não está disponível</H5>
      
       <LinkVoltar to="/">Volte para o início</LinkVoltar>
        </Container>

    )
}

export default Page404