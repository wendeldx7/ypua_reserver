import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  NavbarContainer,
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

import Header from "../Components/header/index.jsx";

const NavbarLateral = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('Usuário não autenticado.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:3333/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar as informações do usuário.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);


  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return (
      <div>
        <Header />
        <div style={{ textAlign: "center", marginTop: "20px", color: "red" }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
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
                value={new Date(userData.dataNascimento)
                  .toISOString()
                  .split("T")[0]}
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
