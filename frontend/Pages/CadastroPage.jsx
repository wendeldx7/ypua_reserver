import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importar os estilos
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
} from '../Styles/CadastroStyled';

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateFields = () => {
    const { email, cpf, senha } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{11}$/;

    if (!emailRegex.test(email)) {
      setErro('Email inválido!');
      return false;
    }

    if (!cpfRegex.test(cpf)) {
      setErro('CPF deve conter 11 números.');
      return false;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    setLoading(true);
    setErro('');

    try {
      await axios.post('http://localhost:3333/register', formData);
      toast.success('Usuário cadastrado com sucesso!', {
        position: 'top-center',
        autoClose: 3000,
        onClose: () => navigate('/login'), // Redireciona após fechar o pop-up
      });
    } catch (err) {
      if (err.response && err.response.data) {
        setErro(err.response.data.message || 'Erro ao cadastrar. Tente novamente.');
      } else {
        setErro('Erro ao conectar com o servidor.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
              {loading && <p>Carregando...</p>}
              {erro && <ErrorMessage>{erro}</ErrorMessage>}
              <BtnEntrar type="submit" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </BtnEntrar>
            </Form>
          </CadastroForm>
          <WineContainer></WineContainer>
        </CadastroWrapper>
      </CadastroContainer>
      <ToastContainer />
    </>
  );
};

export default Cadastro;
