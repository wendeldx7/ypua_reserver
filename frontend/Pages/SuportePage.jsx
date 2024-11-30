import React, { useState } from 'react';
import { FaQuestion, FaLock, FaPen, FaTimes } from 'react-icons/fa';
import {
  ContainerCentral,
  ContainerInterno,
  Titulo,
  ContainerAdicional,
  TituloSecao,
  ContainerInternoAdicional,
  Caixa,
  TituloCaixa,
  SubtituloCaixa,
  IconeCaixa,
  ContainerContato,
  BotaoContato,
  SobreposicaoModal,
  ConteudoModal,
  BotaoFechar,
  Formulario,
  CampoTexto,
  AreaTexto,
  BotaoEnviar,
  ImagemContatoStyled,
  H1ModelObrigado,
  SubtituloSuporte
} from "../Styles/SuporteStyled.js";
import ImagemContato from '../Image/modelSuporte/envelope.png';

const CentralDeAjuda = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [dadosFormulario, setDadosFormulario] = useState({
    nome: '',
    email: '',
    telefone: '',
    problema: '',
  });

  const [erros, setErros] = useState({});
  const [formularioEnviado, setFormularioEnviado] = useState(false); // Estado para controlar a exibição da mensagem

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => {
    setModalAberto(false);
    setDadosFormulario({ nome: '', email: '', telefone: '', problema: '' });
    setErros({});
    setFormularioEnviado(false); // Resetando o estado do envio ao fechar o modal
  };

  const alterarCampo = (e) => {
    const { name, value } = e.target;
    setDadosFormulario((prev) => ({ ...prev, [name]: value }));
  };

  const validarFormulario = () => {
    const novosErros = {};
    if (!dadosFormulario.nome.trim()) novosErros.nome = "O nome é obrigatório.";
    if (!dadosFormulario.email.trim() || !/\S+@\S+\.\S+/.test(dadosFormulario.email))
      novosErros.email = "Insira um e-mail válido.";
    if (!dadosFormulario.telefone.trim() || !/^\d+$/.test(dadosFormulario.telefone))
      novosErros.telefone = "Insira um número de telefone válido.";
    if (!dadosFormulario.problema.trim()) novosErros.problema = "Descreva seu problema.";
    return novosErros;
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    const novosErros = validarFormulario();
    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }
    // Não vamos usar alert aqui. Apenas marcamos que o formulário foi enviado
    setFormularioEnviado(true); // Atualiza o estado para mostrar a mensagem após o envio
  };

  return (
    <>
<ContainerCentral>
  <ContainerInterno>
    <Titulo>Como podemos te ajudar?</Titulo>
    <SubtituloSuporte>Encontre conselhos e respostas rapidamente entrando em contato conosco</SubtituloSuporte>
  </ContainerInterno>
</ContainerCentral>
      <ContainerAdicional>
        <TituloSecao>Principais dúvidas</TituloSecao>
        <ContainerInternoAdicional>
          <Caixa>
            <IconeCaixa>
              <FaQuestion size={25} color="#461615" />
            </IconeCaixa>
            <TituloCaixa>Como funciona?</TituloCaixa>
            <SubtituloCaixa>Aprenda como utilizar nossa aplicação</SubtituloCaixa>
          </Caixa>
          <Caixa>
            <IconeCaixa>
              <FaLock size={25} color="#461615" />
            </IconeCaixa>
            <TituloCaixa>Como recuperar minha senha?</TituloCaixa>
            <SubtituloCaixa>Orientações sobre como redefinir a senha</SubtituloCaixa>
          </Caixa>
          <Caixa>
            <IconeCaixa>
              <FaPen size={25} color="#461615" />
            </IconeCaixa>
            <TituloCaixa>Atualizar informações pessoais</TituloCaixa>
            <SubtituloCaixa>Detalhes como editar o perfil do usuário</SubtituloCaixa>
          </Caixa>
        </ContainerInternoAdicional>
        <ContainerContato>
          <h1 style={{fontSize:'24px', color: '#333', marginBottom: '20px'}} >Deseja entrar em contato conosco?</h1 >
          <BotaoContato onClick={abrirModal}>Entrar em contato</BotaoContato>
        </ContainerContato>
      </ContainerAdicional>
      {modalAberto && (
        <SobreposicaoModal onClick={fecharModal}>
          <ConteudoModal onClick={(e) => e.stopPropagation()}>
            <BotaoFechar onClick={fecharModal}>
              <FaTimes size={20} />
            </BotaoFechar>
            {formularioEnviado ? (
              <>
              <H1ModelObrigado>Obrigado por entrar em contato conosco!</H1ModelObrigado> 
              <ImagemContatoStyled src={ImagemContato} alt="Imagem de Contato" />          
              </>
            ) : (
              <>
                <h2>Envie sua dúvida</h2>
                <Formulario onSubmit={enviarFormulario}>
                  <CampoTexto
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={dadosFormulario.nome}
                    onChange={alterarCampo}
                  />
                  {erros.nome && <span>{erros.nome}</span>}
                  <CampoTexto
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={dadosFormulario.email}
                    onChange={alterarCampo}
                  />
                  {erros.email && <span>{erros.email}</span>}
                  <CampoTexto
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    value={dadosFormulario.telefone}
                    onChange={alterarCampo}
                  />
                  {erros.telefone && <span>{erros.telefone}</span>}
                  <AreaTexto
                    name="problema"
                    placeholder="Descreva seu problema"
                    rows="4"
                    value={dadosFormulario.problema}
                    onChange={alterarCampo}
                  />
                  {erros.problema && <span>{erros.problema}</span>}
                  <BotaoEnviar type="submit">Enviar</BotaoEnviar>
                </Formulario>
              </>
            )}
          </ConteudoModal>
        </SobreposicaoModal>
      )}
    </>
  );
};

export default CentralDeAjuda;
