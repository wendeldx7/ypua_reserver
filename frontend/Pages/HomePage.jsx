import React, { useState, useEffect } from "react";
import {
  Title,
  ImageContainer,
  Image,
  SetaImg,
  TituloImg,
  Aspas,
  BottomButton,
  IndicatorContainer,
  Indicator,
  TextoComAspasContainer
} from "../Styles/HomePageStyled.js";

import Img1 from "../Image/CarrosselHome/background1.png";
import Img2 from "../Image/CarrosselHome/background2.png";
import Img3 from "../Image/CarrosselHome/background3.png";

import SetasEsquerda from "../Image/SetasCarrossel/Esquerda.png";
import SetasDireita from "../Image/SetasCarrossel/Direita.png";

const imagens = [Img1, Img2, Img3];

const HomePage = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [visibilidade, setVisibilidade] = useState(true);


  const passarImagem = () => {
    setVisibilidade(false);
    setTimeout(() => {
      setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % imagens.length);
      setVisibilidade(true);
    }, 1000);
  };


  const voltarImagem = () => {
    setVisibilidade(false);
    setTimeout(() => {
      setIndiceAtual((indiceAnterior) =>
        indiceAnterior === 0 ? imagens.length - 1 : indiceAnterior - 1
      );
      setVisibilidade(true);
    }, 1000);
  };


  useEffect(() => {
    const intervalo = setInterval(passarImagem, 10000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Title>Bem-vindo ao sistema de reservas Ypuã</Title>
      <ImageContainer>
        <TituloImg>
          <TextoComAspasContainer>
            <Aspas className="inicio">"</Aspas>
            Descubra o refúgio perfeito: <br />
            conforto, tranquilidade e natureza em harmonia. Bem-vindo à sua nova casa longe de casa.
            <Aspas className="fim">"</Aspas>
          </TextoComAspasContainer>
        </TituloImg>

        {imagens.map((imagem, index) => (
          <Image
            key={index}
            src={imagem}
            alt={`Imagem ${index + 1}`}
            $isVisible={indiceAtual === index}
          />
        ))}
        <SetaImg
          src={SetasEsquerda}
          alt="Voltar"
          direction="prev"
          onClick={voltarImagem}
        />
        <SetaImg
          src={SetasDireita}
          alt="Passar"
          direction="next"
          onClick={passarImagem}
        />
        <BottomButton>
          Reserve
        </BottomButton>

        <IndicatorContainer>
          {imagens.map((_, index) => (
            <Indicator
              key={index}
              $isActive={indiceAtual === index}
            />
          ))}
        </IndicatorContainer>
      </ImageContainer>
    </>
  );
};

export default HomePage;
