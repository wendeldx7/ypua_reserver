import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Biblioteca para realizar requisições HTTP

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
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegação
  const [isOpen, setIsOpen] = useState(true);
  const [avatar, setAvatar] = useState(null); // Estado para o avatar
  useEffect(() => {
    // Função para buscar as informações do usuário
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Recupera o token do localStorage

      if (!token) {
        setError('Usuário não autenticado.');
        setLoading(false);
        return;
      }

      try {
        // Envia o token como parte do cabeçalho da requisição
        const response = await axios.get('http://localhost:3333/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Token enviado no cabeçalho
          },
        });

        setUserData(response.data); // Armazena os dados do usuário no estado
        setLoading(false); // Finaliza o carregamento
      } catch (err) {
        setError('Erro ao carregar as informações do usuário.');
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchUserData(); // Chama a função de busca
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token do localStorage
    navigate('/login'); // Redireciona o usuário para a página de login
  };

  if (loading) {
    return <div>Carregando...</div>;
  }
  
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
console.log(userData)
  return (
    <>
    <Header/>
    <button onClick={handleLogout}>Sair</button>
      <WelcomeContainer>
        
        <WelcomeTitle>Boas Vindas</WelcomeTitle>
        <UserDetailsContainer>
          <EmailContainer>
            <EmailText>Email</EmailText>
            <EmailValue>{userData.email}</EmailValue>
          </EmailContainer>
          <CargoContainer>
            <CargoText>Cargo</CargoText>
            <CargoValue>{userData.cargo}</CargoValue>
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
                value={userData.nome}
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
                value={userData.nomeExibicao}
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
                value={userData.email}
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
                value={userData.telefone}
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
                value={userData.endereco}
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
                value={new Date(userData.dataNascimento).toISOString().split('T')[0]}
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
                value={userData.cpf}
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
                value={userData.genero}
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
