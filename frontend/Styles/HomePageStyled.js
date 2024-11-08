// HomePageStyled.js
import styled from "styled-components";

// Estilo para o título (h1)
export const Title = styled.h1`
  color: #7E2726; // Define a cor do texto
  text-align: center; // Centraliza o texto horizontalmente
  margin-top: 35px; // Adiciona um espaço de 35px acima do título (entre a navbar e o título)
  font-size: 30px; // Define o tamanho da fonte (opcional, pode ser ajustado conforme necessário)
`;

// Estilo para o container da imagem (sem position: relative para não sobrepor a navbar)
export const ImageContainer = styled.div`
  width: 1300px; // Define a largura do container da imagem
  height: 730px; // Define a altura do container da imagem
  margin: 35px auto 0; // Centraliza o container horizontalmente e adiciona 35px de margem superior
`;


export const Image = styled.img`
  width: 100%; 
  height: 100%; 
    display: block;
    
`;

// Estilo para os botões de navegação (as setas)
export const Button = styled.img`
  position: absolute; // Posiciona o botão de forma absoluta dentro do container
  top: 100%; // Posiciona o botão no meio da altura do container
  width: 29px; // Define o tamanho da seta (botão)
  height: 54px; // Define a altura da seta (botão)
  cursor: pointer; // Muda o cursor para uma mãozinha ao passar o mouse sobre o botão

  ${({ direction }) =>
        direction === "next"
            ? "right: 60px;" // Posiciona o botão à direita (para o próximo)
            : "left: 60px;"} // Posiciona o botão à esquerda (para o anterior)
`;

