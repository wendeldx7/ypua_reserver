import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import { Container, Content, StyledLink } from './styles';
import { FaTimes } from 'react-icons/fa';

import CheckIcon from '../../Image/NavbarPerfil/local.png';
import HistoricoIcon from '../../Image/NavbarPerfil/calendario.png';
import GraficoIcon from '../../Image/NavbarPerfil/grafico.png';
import AjudaIcon from '../../Image/NavbarPerfil/ajuda.png';
import SairIcon from '../../Image/NavbarPerfil/sair.png';

import SidebarItem from '../sidebaritem';

const Sidebar = ({ active }) => {
  const navigate = useNavigate(); // Hook para redirecionamento

  const closeSidebar = () => {
    active(false);
  };

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    navigate('/login'); // Redireciona para a página de login
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
        {/* Substitua o StyledLink por um botão com a função handleLogout */}
        <button onClick={handleLogout} style={{ all: 'unset', cursor: 'pointer' }}>
          <SidebarItem Icon={SairIcon} Text="Sair" />
        </button>
      </Content>
    </Container>
  );
};

export default Sidebar;
