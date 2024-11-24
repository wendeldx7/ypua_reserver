import React, { useState } from 'react';
import axios from 'axios';
import {
  LoginContainer,
  LoginForm,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  BtnEntrar,
  WineContainer
} from '../Styles/loginStyled';  // Importando os estilos

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
        
      <LoginForm>
        <h2>Faça login</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu e-mail"
            />
          </FormGroup>
          <FormGroup>
            <Label>Senha:</Label>
            <Input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Digite sua senha"
            />
          </FormGroup>
          {erro && <ErrorMessage>{erro}</ErrorMessage>}
          <BtnEntrar type="submit">Entrar</BtnEntrar>
        </form>
      </LoginForm>
      <WineContainer>
          <h3>Bem-vindo ao nosso portal!</h3>
          <p>Entre para acessar suas informações.</p>
        </WineContainer>
    </LoginContainer>
  );
};

export default Login;
