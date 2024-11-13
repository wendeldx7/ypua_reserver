// HomePage.jsx
import React, { useState } from "react";
import {
  Title,
  ImageContainer,
  Image,
  Button,
  TituloImg,
} from "../Styles/HomePageStyled.js";

// Importando as imagens do carrossel
import Img1 from "../Image/CarrosselHome/background1.png";
import Img2 from "../Image/CarrosselHome/background2.png";
import Img3 from "../Image/CarrosselHome/background3.png";

// Importando as setas como imagens
import SetasEsquerda from "../Image/SetasCarrossel/Esquerda.png";
import SetasDireita from "../Image/SetasCarrossel/Direita.png";

const imagens = [Img1, Img2, Img3];

const HomePage = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  // Função para passar para a próxima imagem
  const passarImagem = () => {
    setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % imagens.length);
  };

  // Função para voltar para a imagem anterior
  const voltarImagem = () => {
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === 0 ? imagens.length - 1 : indiceAnterior - 1
    );
  };

  return (
    <>
      <Title>Bem vindo ao sistema de reservas Ypuã</Title>
      <ImageContainer>
        {/* Título sobreposto à imagem */}
        <TituloImg>
          Descubra o refúgio perfeito: <br/>
          conforto, tranquilidade e natureza em
          harmonia. Bem-vindo à sua nova casa longe de casa.
        </TituloImg>

        {/* Imagem de fundo */}
        <Image src={imagens[indiceAtual]} alt="Imagem do sistema Ypuã" />

        {/* Botões de navegação */}
        <Button
          src={SetasEsquerda}
          alt="Voltar"
          direction="prev"
          onClick={voltarImagem}
        />
        <Button
          src={SetasDireita}
          alt="Passar"
          direction="next"
          onClick={passarImagem}
        />
      </ImageContainer>
    </>
  );
};

export default HomePage;
