import React from "react";
import {
  NavbarContainer,
  NavItem,
  NavLink,
  Divlink,
  LogoLink,
  PerfilLink,
  NotificacaoLink,
  LupaLink,
  OpcoesLink,
} from "../Styles/NavbarStyled.js";
import Logo from "../Image/logo.png"; 
import Lupa from "../Image/lupa.png";
import Perfil from "../Image/perfil.png";
import Notificacao from "../Image/notificacao.png";

const NavBar = () => {
  return (
    <NavbarContainer>
      <LogoLink to="/"> {/* Não aninhe mais Links */}
        <img src={Logo} alt="Logo" />
      </LogoLink>
      <Divlink>
        <NavItem>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            INÍCIO
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/checkIn" className={({ isActive }) => (isActive ? "active" : "")}>
            CHECK-IN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/historico" className={({ isActive }) => (isActive ? "active" : "")}>
            RESERVAS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
            PAINEL
          </NavLink>
        </NavItem>
      </Divlink>
      <OpcoesLink>
        <LupaLink to="/">
          <img src={Lupa} alt="Lupa" />
        </LupaLink>
        <PerfilLink to="/perfil"> 
          <img src={Perfil} alt="Perfil" />
        </PerfilLink>
        <NotificacaoLink to="/">
          <img src={Notificacao} alt="Notificacao" />
        </NotificacaoLink>
      </OpcoesLink>
    </NavbarContainer>
  );
};

export default NavBar;
