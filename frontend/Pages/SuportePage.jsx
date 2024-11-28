import React from 'react';
import { FaQuestion,FaLock, FaPen } from 'react-icons/fa'; // Importe o ícone de interrogação
import {
  ContainerCentral,
  InnerContainer,
  Title,
  AdditionalContainer,
  SectionTitle,
  InnerAdditionalContainer,
  Box,
  BoxTitle,
  BoxSubtitle,
  BoxIcon, // BoxIcon foi adicionado no styled-components
} from "../Styles/SuporteStyled.js";

const CentralDeAjuda = () => {
  return (
    <>
      <ContainerCentral>
        <InnerContainer>
          <Title>Como podemos te ajudar?</Title>
        </InnerContainer>
      </ContainerCentral>
      <AdditionalContainer>
        <SectionTitle>Principais dúvidas</SectionTitle>
        <InnerAdditionalContainer>
          <Box>
            <BoxIcon>
              <FaQuestion size={25} color="#461615" />
            </BoxIcon>
            <BoxTitle>Como funciona?</BoxTitle>
            <BoxSubtitle>Aprenda como utilizar nossa aplicação</BoxSubtitle>
          </Box>
          <Box>
            <BoxIcon>
              <FaLock size={25} color="#461615" />
            </BoxIcon>
            <BoxTitle>Como recuperar minha senha?</BoxTitle>
            <BoxSubtitle>Orientações sobre como redefinir a senha</BoxSubtitle>
          </Box>
          <Box>
            <BoxIcon>
              <FaPen size={25} color="#461615" />
            </BoxIcon>
            <BoxTitle>Atualizar informações pessoais</BoxTitle>
            <BoxSubtitle>Detalhes como editar o perfil do usuário</BoxSubtitle>
          </Box>
        </InnerAdditionalContainer>
      </AdditionalContainer>
    </>
  );
};

export default CentralDeAjuda;
