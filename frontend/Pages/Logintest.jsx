import React, { useState } from 'react';
import axios from 'axios';
import {
  LoginContainer,
  LoginWrapper,
  LoginForm,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  BtnEntrar,
  WineContainer,
  NomeLogin,

  Form
} from '../Styles/loginStyled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/login', {
        email,
        senha,
      });


      localStorage.setItem('token', response.data.token);


      window.location.href = '/dashboard';
    } catch (err) {
      setErro('Erro ao realizar o login. Verifique suas credenciais.');
    }
  };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginForm>
          <NomeLogin>Faça login</NomeLogin>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Email:</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required

              />
            </FormGroup>
            <FormGroup>
              <Label>Senha:</Label>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required

              />
            </FormGroup>
            {erro && <ErrorMessage>{erro}</ErrorMessage>}
            <BtnEntrar type="submit">Entrar</BtnEntrar>
          </Form>
        </LoginForm>
        <WineContainer>
        </WineContainer>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
