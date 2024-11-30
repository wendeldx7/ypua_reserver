import styled from 'styled-components';
import ImagemDeFundo from '../Image/CarrosselHome/background1.png'; // Substitua pelo caminho correto da sua imagem


export const ContainerCentral = styled.div`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(
      rgba(255, 0, 0, 0.2), /* Tom vermelho suave com opacidade baixa */
      rgba(255, 0, 0, 0.2) /* Adiciona o tom vermelho ao fundo com menos intensidade */
    ),
    url(${ImagemDeFundo}); /* Imagem de fundo */
  background-size: cover;
  opacity: 90%;
  background-position: center;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInterno = styled.div`
  text-align: center;
  width: 40%;
  height: 40%;
  border-radius: 8px;
  display: flex;
  flex-direction: column; /* Mudança para coluna */
  justify-content: center;
  align-items: center;
`;


export const Titulo = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: white;
`;

export const ContainerAdicional = styled.div`
  width: 100%;
  height: 400px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TituloSecao = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

export const ContainerInternoAdicional = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

export const Caixa = styled.div`
  width: 30%;
  height: 200px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 20px;
`;

export const IconeCaixa = styled.div`
  margin-bottom: 10px;
`;

export const TituloCaixa = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const SubtituloCaixa = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

export const ContainerContato = styled.div`
  margin-top: 40px;
  text-align: center;
`;
export const BotaoContato = styled.button`
  padding: 10px 20px;
  background-color: #461615;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`;

export const SobreposicaoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ConteudoModal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CampoTexto = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const AreaTexto = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
`;

export const BotaoEnviar = styled.button`
  padding: 10px 20px;
  background-color: #461615;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #555;
  cursor: pointer;

  &:hover {
    opacity: 80%;
    transition: 0.3s;
  }
`;
export const ImagemContatoStyled = styled.img`
  width: 300px;
  height: auto; /* Mantém a proporção da imagem */
  margin-top: 20px;
  border-radius: 8px;
`;


export const H1ModelObrigado = styled.h1`
  font-size: 24px;
  color: #333;
`;
export const SubtituloSuporte = styled.h2`
  font-size: 19px;
  font-weight: 500;
  color: white;
  margin-top: 10px; /* Ajuste o espaço entre o título e o subtítulo */
  text-align: center;
  display: block; /* Garante que o subtítulo vai para a linha abaixo */
`;