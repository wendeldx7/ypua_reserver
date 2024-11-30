import React, { useState } from 'react';
import axios from 'axios';
import {
  CadastroContainer,
  CadastroWrapper,
  CadastroForm,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  BtnEntrar,
  WineContainer,
  NomeCadastro,
  Form,
} from '../Styles/CadastroStyled'; // Usando os estilos específicos de cadastro

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nomeExibicao: '',
    email: '',
    senha: '',
    cpf: '',
    telefone: '',
    cargo: '',
    genero: '',
    endereco: '',
    dataNascimento: '',
  });

  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/cadastro', formData);
      setSucesso('Usuário cadastrado com sucesso!');
      setErro('');
    } catch (err) {
      setErro('Erro ao cadastrar. Verifique os campos e tente novamente.');
      setSucesso('');
    }
  };

  return (
    <CadastroContainer>
      <CadastroWrapper>
        <CadastroForm>
          <NomeCadastro>Cadastro</NomeCadastro>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome Completo:</Label>
              <Input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Nome de Exibição:</Label>
              <Input
                type="text"
                name="nomeExibicao"
                value={formData.nomeExibicao}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email:</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Senha:</Label>
              <Input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>CPF:</Label>
              <Input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Telefone:</Label>
              <Input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Cargo:</Label>
              <Input
                as="select"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="funcionario">Funcionário</option>
                <option value="adm">Administrador</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Gênero:</Label>
              <Input
                as="select"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Endereço:</Label>
              <Input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento:</Label>
              <Input
                type="date"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </FormGroup>
            {erro && <ErrorMessage>{erro}</ErrorMessage>}
            {sucesso && <p style={{ color: 'green' }}>{sucesso}</p>}
            <BtnEntrar type="submit">Cadastrar</BtnEntrar>
          </Form>
        </CadastroForm>
        <WineContainer></WineContainer>
      </CadastroWrapper>
    </CadastroContainer>
  );
};

export default Cadastro;
