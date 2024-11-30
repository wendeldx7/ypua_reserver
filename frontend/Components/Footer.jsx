import React from "react";
import { ContainerFooter, FooterLogo, FooterSectionLeft, FooterSectionRight, FooterText } from "../Styles/FooterStyled";
import LogoFooter from "../Image/Footer/logoBranca.png";

const Footer = () => {
  return (
    <ContainerFooter>
      <FooterSectionLeft>
        <FooterText>Estrada Ipua, nº 6 Laguna - SC  | 88790-000</FooterText>
        <FooterText>© Ypuã reserver 2024 | Todos os direitos reservados</FooterText>
      </FooterSectionLeft>
      
      <FooterLogo src={LogoFooter} alt="Logo do Footer" />
      
      <FooterSectionRight>
        <FooterText>Central de ajuda</FooterText>
        <FooterText>Condições de uso</FooterText>
      </FooterSectionRight>
    </ContainerFooter>
  );
};

export default Footer;
