import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #461615;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
  z-index: 1000;
  margin-top: auto; /* Faz com que o footer sempre fique no final da página */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 400px;
`;

export const FooterLogo = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
`;

export const FooterSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha à esquerda */
  justify-content: center;
  width: 27%;
  padding: 0 10px;
`;

export const FooterSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Alinha à direita */
  justify-content: center;
  width: 27%;
  padding: 0 10px;
`;

export const FooterText = styled.p`
  margin: 5px 0;
  font-weight: 200;
`;
