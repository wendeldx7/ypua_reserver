import React from 'react';
import { Container, Content, StyledLink } from './styles';
import { FaTimes } from 'react-icons/fa';

import CheckIcon from '../../Image/NavbarPerfil/local.png';
import HistoricoIcon from '../../Image/NavbarPerfil/calendario.png';
import GraficoIcon from '../../Image/NavbarPerfil/grafico.png';
import AjudaIcon from '../../Image/NavbarPerfil/ajuda.png';
import SairIcon from '../../Image/NavbarPerfil/sair.png';

import SidebarItem from '../sidebaritem';

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <StyledLink to="/checkin">
          <SidebarItem Icon={CheckIcon} Text="Check-In" />
        </StyledLink>
        <StyledLink to="/historico">
          <SidebarItem Icon={HistoricoIcon} Text="Histórico" />
        </StyledLink>
        <StyledLink to="/painel">
          <SidebarItem Icon={GraficoIcon} Text="Painel" />
        </StyledLink>
        <StyledLink to="/ajuda">
          <SidebarItem Icon={AjudaIcon} Text="Ajuda" />
        </StyledLink>
        <StyledLink to="/sair">
          <SidebarItem Icon={SairIcon} Text="Sair" />
        </StyledLink>

      </Content>
    </Container>
  );
};

export default Sidebar;
