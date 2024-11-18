import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom"; 
import { Link } from "react-router-dom"; 

export const NavbarContainer = styled.nav`
  //*Container principal da navbar
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90px;
  position: sticky;
  z-index: 10; 
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
`;

export const LogoLink = styled(Link)`
  //*Link da Logo
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: auto;
    transition: transform 0.3s;
  }
`;

export const LupaLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 60px;

  img {
    height: 25px;
    width: 25px;
    transition: transform 0.3s;
  }
  &:hover {
    opacity: 50%;
    transition: 0.3s;
  }
`;
export const PerfilLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 60px;

  img {
    height: 30px;
    width: 30px;
    transition: transform 0.3s;
  }
  &:hover {
    opacity: 50%;
    transition: 0.3s;
  }
`;
export const NotificacaoLink = styled(Link)`
  display: flex;
  align-items: center;


  img {
    height: 25px;
    width: 25px;
    transition: transform 0.3s;
  }
  &:hover {
    opacity: 50%;
    transition: 0.3s;
  }
`;

export const OpcoesLink = styled(Link)`
  width: 40px;
  display: flex;
  justify-content: center;
  height: auto;
  
`;

export const NavItem = styled.div`
  //* Cada item de navegação seja a logo, os icones ou os links, ela deve encobrir os links
  list-style: none;
`;

export const Divlink = styled.div`
  //* todos os links juntos
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const NavLink = styled(RouterNavLink)`
  //* estilo de cada link (nao colocar a navbar definida como navink)
  color: black;
  font-weight: 500;
  text-decoration: none;

  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 4px;
    bottom: -2px;
    left: 0;
    background-color: #d2ae6d;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    width: 100%;
  }
  &.active {
    &::before {
      visibility: visible;
      width: 100%;
      background-color: #d2ae6d;
    }
  }
`;
