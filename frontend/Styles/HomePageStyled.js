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
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
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
  background-color: ${({ isActive }) => (isActive ? "#7E2726" : "#fff")};  
  border-radius: 50%;            
  transition: background-color 0.3s; 
`;
