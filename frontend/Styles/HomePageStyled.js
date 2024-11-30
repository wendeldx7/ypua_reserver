import styled from "styled-components";

// Estilo para o título (h1)
export const Title = styled.h1`
  color: #7e2726;
  text-align: center;
  margin-top: 40px;
  font-size: 25px;
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
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  position: absolute;
`;

export const SetaImg = styled.img`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 19px;
  height: 34px;
  cursor: pointer;

  ${({ direction }) =>
    direction === "next"
      ? "right: 15px;"
      : "left: 15px;"}
`;

export const TextoComAspasContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 42%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const TituloImg = styled.h1`
  font-size: 26px;
  color: white;
  font-weight: 300;
  font-style: italic;
  z-index: 10;
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
    transform: translate(-40%, -110%);
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
  color: white;
  font-size: 24px;
  position: absolute;
  right: 70px;
  bottom: 70px;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden; //*faaz com oq o efeito não saia do botão
  transition: all 0.3s ease-in-out;
  font-weight: 300;

  //* hover de onda
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    transform: translateX(-100%); 
    transition: transform 0.4s ease-in-out;
    z-index: 0;
  }

  &:hover::before {
    transform: translateX(0); 
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: black;
  }
  z-index: 999;
`;

export const IndicatorContainer = styled.div`
  position: absolute;             
  bottom: 20px;                   
  left: 50%;                     
  transform: translateX(-50%);   
  display: flex;                 
  justify-content: center;       
  gap: 10px;                     
  z-index: 100;                   
`;

export const Indicator = styled.div`
  width: 15px;               
  height: 15px;               
  background-color: ${({ $isActive }) => ($isActive ? "#7E2726" : "#fff")};  
  border-radius: 50%;            
  transition: background-color 0.3s; 
`;
  