import styled from 'styled-components';
import BackgroundImage from '../Image/CarrosselHome/background1.png'; // Substitua pelo caminho correto da sua imagem

export const ContainerCentral = styled.div`
  width: 100%;
  height: 400px;
  background-image: linear-gradient(
      rgba(255, 0, 0, 0.2), /* Tom vermelho suave com opacidade baixa */
      rgba(255, 0, 0, 0.2) /* Adiciona o tom vermelho ao fundo com menos intensidade */
    ),
    url(${BackgroundImage}); /* Imagem de fundo */
  background-size: cover;
  opacity: 90%;
  background-position: center;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  text-align: center;
  width: 40%;
  height: 40%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: white;
`;

export const AdditionalContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 40px 0; /* Espaçamento maior para ajustar o alinhamento */
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 40px; /* Espaçamento maior entre o título e os boxes */
`;

export const InnerAdditionalContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 30%; /* Cada box ocupa 30% da largura total */
  height: 200px; /* Altura fixa */
  background-color: white; /* Fundo claro */
  border: 1px solid #ddd; /* Bordas sutis */
  border-radius: 8px; /* Bordas arredondadas */
  display: flex;
  flex-direction: column; /* Alinha os itens na vertical */
  justify-content: center;
  align-items: center; /* Centraliza o conteúdo dentro dos boxes */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra melhorada */
  text-align: center;
  padding: 20px;
`;

export const BoxIcon = styled.div`
  margin-bottom: 10px; /* Espaçamento entre o ícone e o título */
`;

export const BoxTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const BoxSubtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0; /* Remove margem padrão do parágrafo */
`;
