import React from "react";
import NavBar from "../Components/NavBar.jsx"; // Se você tiver uma barra de navegação
import {
  Container,
  LadoEsquerdo,
  LadoDireito,
  Titulo,
  LinkVoltar,
  Botao,
  TextoCadastro,
  BotaoCadastro,
  EsqueciSenha,
  Formulario,
  CampoInput
} from "./../Styles/LoginStyled.js"; // Importando os estilos separados

const PaginaLogin = () => {
  return (
    <>
      <NavBar />
      <Container>
        <LadoEsquerdo>
          <LinkVoltar href="#">Voltar</LinkVoltar>
          <Titulo>Faça login</Titulo>
          <Formulario>
            <CampoInput tipo="email" placeholder="Email" />
            <CampoInput tipo="password" placeholder="Senha" />
            <EsqueciSenha href="#">esqueci a senha</EsqueciSenha>
            <Botao>Entrar</Botao>
          </Formulario>
        </LadoEsquerdo>
        <LadoDireito>
          <TextoCadastro>
            Não tem uma conta? Faça o registro para ter acesso
          </TextoCadastro>
          <BotaoCadastro>Cadastrar</BotaoCadastro>
        </LadoDireito>
      </Container>
    </>
  );
};

export default PaginaLogin;
