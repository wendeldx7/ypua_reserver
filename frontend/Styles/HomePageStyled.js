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

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  position: absolute;
`;

export const Button = styled.img`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 29px;
  height: 54px;
  cursor: pointer;

  ${({ direction }) =>
    direction === "next"
      ? "right: 15px;"
      : "left: 15px;"}
`;

export const TituloImg = styled.h1`
  font-size: 36px;
  color: white;
  font-weight: 500;
  font-style: italic;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -80%);
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const Aspas = styled.h1`
  font-size: 100px;
  color: #d2ae6d;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  &.inicio {
    left: -5%; // Posiciona a aspa inicial
    transform: translate(-40%, -95%);
  }

  &.fim {
    right: 10%; // Posiciona a aspa final
    transform: translate(-180%, 20%);
  }
`;

export const BottomButton = styled.button`
  width: 200px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  color: white;
  font-size: 24px;
  right: 70px;
  bottom: 70px;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  font-weight: 300;
  overflow: hidden;
  position: relative;

  &:focus {
    outline: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    transition: width 0.3s, height 0.3s, opacity 0.6s;
  }

  &:active::after {
    width: 0;
    height: 0;
    opacity: 1;
    transition: width 0.3s, height 0.3s, opacity 0.6s;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: black;
  }
`;

// Container para as bolinhas
// Container para as bolinhas (indicadores) que ficam abaixo das imagens do carrossel
export const IndicatorContainer = styled.div`
  position: absolute;             // Posiciona o container de forma absoluta, para que ele fique sobreposto à imagem
  bottom: 20px;                   // Alinha o container a 20px da parte inferior da tela
  left: 50%;                      // Alinha o container ao centro horizontal da tela
  transform: translateX(-50%);    // Ajusta o container para garantir que ele esteja perfeitamente centrado
  display: flex;                  // Define o container como flexível para que os itens dentro dele (as bolinhas) fiquem alinhados horizontalmente
  justify-content: center;        // Centraliza as bolinhas dentro do container
  gap: 10px;                      // Adiciona um espaço de 10px entre cada bolinha
  z-index: 100;                   // Define um valor de z-index para garantir que o container fique acima das imagens (se necessário)
`;

// Estilo para as bolinhas (indicadores) que mostram a imagem ativa
export const Indicator = styled.div`
  width: 20px;                    // Define a largura da bolinha como 12px
  height: 20px;                   // Define a altura da bolinha como 12px
  background-color: ${({ isActive }) => (isActive ? "#7E2726" : "#fff")};  // A cor de fundo da bolinha depende da propriedade 'isActive'. Se for ativa, será vermelha (#FF0000), senão será branca (#fff)
  border-radius: 50%;             // Define a borda da bolinha como arredondada, criando um círculo
  transition: background-color 0.3s;  // Aplica uma transição suave de 0.3 segundos quando a cor da bolinha mudar
`;
