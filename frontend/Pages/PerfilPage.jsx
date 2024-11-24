import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarButton,
  NavLinks,
  NavItem,
  NavIcon,
  LineSeparator,
  NavText,
  LogoImage,
  RightIconsContainer,
  IconImage,
  WelcomeContainer,
  WelcomeTitle,
  EmailText,
  EmailValue,
  EmailContainer,
  CargoContainer,
  CargoText,
  CargoValue,
  UserDetailsContainer,
  AvatarContainer,
  AvatarImage
} from "../Styles/PerfilStyled.js";
import Logo from "../Image/logo.png";
import Icon1 from "../Image/NavbarPerfil/ajuda.png";
import Icon2 from "../Image/NavbarPerfil/calendario.png";
import Icon3 from "../Image/NavbarPerfil/grafico.png";
import Icon4 from "../Image/NavbarPerfil/local.png";
import Icon5 from "../Image/NavbarPerfil/sair.png";
import NotificationIcon from "../Image/notificacao.png";
import ProfileIcon from "../Image/perfil.png";

const NavbarLateral = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [avatar, setAvatar] = useState(null); // Estado para o avatar

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Função para alterar o avatar
  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result); // Atualiza o avatar com a nova imagem
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <NavbarContainer isOpen={isOpen}>
        <NavbarButton onClick={toggleNavbar}>☰</NavbarButton>
        <NavLinks>
          <NavItem isOpen={isOpen}>
            <NavIcon src={Icon1} alt="Link 1" />
            <NavText isOpen={isOpen}>A</NavText>
          </NavItem>
          <NavItem isOpen={isOpen}>
            <NavIcon src={Icon2} alt="Link 2" />
            <NavText isOpen={isOpen}>C</NavText>
          </NavItem>
          <NavItem isOpen={isOpen}>
            <NavIcon src={Icon3} alt="Link 3" />
            <NavText isOpen={isOpen}>G</NavText>
          </NavItem>
          <NavItem isOpen={isOpen}>
            <NavIcon src={Icon4} alt="Link 4" />
            <NavText isOpen={isOpen}>L</NavText>
          </NavItem>
          <NavItem isOpen={isOpen}>
            <NavIcon src={Icon5} alt="Link 5" />
            <NavText isOpen={isOpen}>S</NavText>
          </NavItem>
        </NavLinks>
      </NavbarContainer>

      <LineSeparator>
        <LogoImage src={Logo} alt="Logo" isOpen={isOpen} />
      </LineSeparator>

      <RightIconsContainer>
        <IconImage src={ProfileIcon} alt="Foto de Perfil" />
        <IconImage src={NotificationIcon} alt="Notificação" />
      </RightIconsContainer>

      <WelcomeContainer>
        <WelcomeTitle>Boas Vindas</WelcomeTitle>
        <UserDetailsContainer>
          <EmailContainer>
            <EmailText>Email</EmailText>
            <EmailValue>exemploemail@dominio.com</EmailValue>
          </EmailContainer>
          <CargoContainer>
            <CargoText>Cargo</CargoText>
            <CargoValue>Desenvolvedor</CargoValue>
          </CargoContainer>

          {/* Avatar Section */}
          <AvatarContainer>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="avatarInput"
              onChange={handleAvatarChange}
            />
            <label htmlFor="avatarInput">
              <AvatarImage
                src={avatar || "/placeholder-avatar.png"} // Exibe o avatar ou imagem padrão
                alt="Avatar"
              />
            </label>
          </AvatarContainer>
        </UserDetailsContainer>
      </WelcomeContainer>
    </>
  );
};

export default NavbarLateral;
 
