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
  AvatarImage,
  LargeContainer,
  Title,
  Heading,
  InnerContainer,
  LeftContainer,
  RightContainer,
  DataContainer,
  DataLabel,
  InputField,
  EditButton,
} from "../Styles/PerfilStyled.js";
import Logo from "../Image/logo.png";
import Icon1 from "../Image/NavbarPerfil/ajuda.png";
import Icon2 from "../Image/NavbarPerfil/calendario.png";
import Icon3 from "../Image/NavbarPerfil/grafico.png";
import Icon4 from "../Image/NavbarPerfil/local.png";
import Icon5 from "../Image/NavbarPerfil/sair.png";
import NotificationIcon from "../Image/notificacao.png";
import ProfileIcon from "../Image/perfil.png";

import Header from "../Components/header/index.jsx";

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
    <Header/>
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
        </UserDetailsContainer>
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
              src={avatar || "/placeholder-avatar.png"}
              alt="Avatar"
            />
          </label>
        </AvatarContainer>
      </WelcomeContainer>

      <LargeContainer>
        <Title>Conta</Title>
        <Heading>Dados Pessoais</Heading>
        <InnerContainer>
          <LeftContainer>
            <DataContainer>
              <InputField
                id="nome"
                type="text"
                value="João Silva"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="nome">Nome</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>

            <DataContainer>
              <InputField
                id="nomeExibicao"
                type="text"
                value="João"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="nomeExibicao">Nome de Exibição</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>

            <DataContainer>
              <InputField
                id="email"
                type="email"
                value="joao@email.com"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="email">Email</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>

            <DataContainer>
              <InputField
                id="telefone"
                type="tel"
                value="123-456-7890"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="telefone">Telefone</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>

            <DataContainer>
              <InputField
                id="endereco"
                type="text"
                value="Rua XYZ, 123"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="endereco">Endereço</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>
          </LeftContainer>

          <RightContainer>
            <DataContainer>
              <InputField
                id="dataNascimento"
                type="date"
                value="1990-01-01"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="dataNascimento">Data de Nascimento</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>

            <DataContainer>
              <InputField
                id="cpf"
                type="text"
                value="123.456.789-00"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="cpf">CPF</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>

            <DataContainer>
              <InputField
                id="genero"
                type="text"
                value="Masculino"
                placeholder=" "
                readOnly
              />
              <DataLabel htmlFor="genero">Gênero</DataLabel>
              <EditButton>Editar</EditButton>
            </DataContainer>
          </RightContainer>
        </InnerContainer>
      </LargeContainer>
    </>
  );
};

export default NavbarLateral;
