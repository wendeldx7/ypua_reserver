import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  position: sticky;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
`;

export const NavItem = styled.div`
  list-style: none;
`;

export const NavLink = styled.a`
 color: black;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: black;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
    }

    &:hover::before {
        visibility: visible;
        width: 100%;
    }
`;