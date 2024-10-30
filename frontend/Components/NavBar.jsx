import styled from "styled-components";
import { NavbarContainer, NavItem, NavLink } from "../Styles/NavbarStyled.js";

const NavBar = () => {
  return (
    <>
      <NavbarContainer>
        <NavItem>
          <NavLink href="/INÍCIO">INÍCIO</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">CHECK-IN</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/services">RESERVAS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">PAINEL</NavLink>
        </NavItem>
      </NavbarContainer>
    </>
  );
};
export default NavBar
