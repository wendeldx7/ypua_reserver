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
// Estilo para o container da imagem principal
export const ImageContainer = styled.div`
  width: 96vw;
  max-width: 2300px;
  height: 96vh;
  max-height: 1500px;
  min-width: 700px;
  min-height: 500px;
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

// Estilo para a imagem principal com transição
export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)}; // Controla visibilidade
  transition: opacity 1s ease-in-out; // Suaviza a transição
  position: absolute; // Para sobrepor imagens
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

export const Aspas = styled.h1`
  font-size: 100px;
  color: #D2AE6D;
  position: absolute; // Permite que o título fique sobreposto à imagem
  top: 50%; // Posiciona o título no meio da imagem verticalmente
  left: 50%; // Posiciona o título no meio da imagem horizontalmente
  transform: translate(-80%, -80%); // Centraliza o título
  z-index: 10; // Garante que o título fique acima da imagem
`


export const BottomButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7); // Preto com transparência
  position: absolute;
  color: white; // Texto branco
  font-size: 24px; // Tamanho da fonte
  right: 70px; // Distância da parte direita
  bottom: 70px; // Distância da parte inferior
  border: 2px solid white; // Bordas brancas
  padding: 10px 20px; // Espaçamento interno
  border-radius: 5px; // Bordas arredondadas
  cursor: pointer; // Muda o cursor para "pointer" ao passar o mouse
  transition: all 0.3s ease-in-out; // Transição suave para o hover
  z-index: 999;
  font-weight: 300;
  overflow: hidden; // Garante que o ripple não ultrapasse os limites do botão
  position: relative; // Necessário para posicionar o efeito ripple

  &:focus {
    outline: none; // Remove o contorno de foco
  }

  // Efeito ripple
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.5); // Cor do ripple
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none; // Garante que o ripple não interfira em outros elementos
    transition: width 0.3s, height 0.3s, opacity 0.6s;
  }

  &:active::after {
    width: 0;
    height: 0;
    opacity: 1; // O ripple aparece ao clicar
    transition: width 0.3s, height 0.3s, opacity 0.6s;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); // Transparência maior ao passar o mouse
    color: black; // Texto preto no hover
  }
`;
