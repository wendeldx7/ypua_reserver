import React from "react";
import {
  NavbarContainer,
  NavItem,
  NavLink,
  Divlink,
  LogoLink,
} from "../Styles/NavbarStyled.js";
import Logo from "../Image/logo.png"; // Caminho correto para a logo
import Lupa from "../Image/lupa.png"
import Perfil from "../Image/perfil.png"
import Notificacao from "../Image/notificacao.png"

const NavBar = () => {
  return (
    <NavbarContainer>
      {/* Logo como Link */}
      <LogoLink to="/">
        <img src={Logo} alt="Logo" />
      </LogoLink>

      {/* Links de Navegação */}
      <Divlink>
        <NavItem>
          <NavLink to="/INÍCIO" activeClassName="active">
            INÍCIO
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" activeClassName="active">
            CHECK-IN
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/services" activeClassName="active">
            RESERVAS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active">
            PAINEL
          </NavLink>
        </NavItem>
      </Divlink>
      <NavItem> 
          

      </NavItem>
    </NavbarContainer>
  );
};

export default NavBar;
