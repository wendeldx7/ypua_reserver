// HomePageStyled.js
import styled from "styled-components";

// Estilo para o título (h1)
export const Title = styled.h1`
  color: #7e2726;
  text-align: center;
  margin-top: 35px;
  font-size: 30px;
`;

// Estilo para o container da imagem
export const ImageContainer = styled.div`
  width: 96vw; // 90% da largura da tela
  max-width: 2300px; // Limite máximo ampliado para telas grandes
  height: 96vh; // 90% da altura da tela
  max-height: 1500px; // Limite máximo ampliado para telas grandes
  min-width: 700px; // Limite mínimo para garantir uma visualização adequada
  min-height: 500px; // Limite mínimo proporcional
  margin: 35px auto 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 92vw;
    height: 80vh;
  }

  @media (max-width: 768px) {
    width: 95vw;
    height: 70vh;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 60vh;
  }
`;



// Estilo para a imagem principal
export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

// Estilo para os botões de navegação (setas)
export const Button = styled.img`
  position: absolute;
  top: 60%;
  transform: translateY(-50%); // Centraliza o botão verticalmente
  width: 29px;
  height: 54px;
  cursor: pointer;

  ${({ direction }) =>
    direction === "next"
      ? "right: 15px;" // Posiciona o botão à direita com uma margem de 30px
      : "left: 15px;"}// Posiciona o botão à esquerda com uma margem de 30px
`;



export const TituloImg = styled.h1`
  font-size: 36px;
  color: white;
  font-weight: 500; // Semi-bold
  font-style: italic; // Itálico
  position: absolute; // Permite que o título fique sobreposto à imagem
  top: 50%; // Posiciona o título no meio da imagem verticalmente
  left: 50%; // Posiciona o título no meio da imagem horizontalmente
  transform: translate(-80%, -80%); // Centraliza o título
  z-index: 10; // Garante que o título fique acima da imagem
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); // Adiciona uma sombra para melhorar a visibilidade
`;