import React, { useState } from 'react';
import styled from 'styled-components';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Logo from "../Image/logo.png";


ChartJS.register(ArcElement,CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);


const dadosExemplo = {
  taxaOcupacao: [80, 70, 85, 90, 75, 60, 65, 70, 80, 85, 95, 100],
  faturamento: [20000, 18000, 22000, 25000, 21000, 17000, 19000, 23000, 24000, 25000, 26000, 27000],
  reservas: [30, 28, 35, 40, 32, 25, 27, 33, 37, 39, 42, 45],
  cancelamentos: [2, 1, 3, 2, 2, 4, 3, 2, 1, 3, 2, 1]
};

const dadosExemplos = {
  acom1: 30, // Número de reservas para a acomodação 1
  acom2: 28, // Número de reservas para a acomodação 2
  acom3: 35, // Número de reservas para a acomodação 3
  acom4: 40, // Número de reservas para a acomodação 4
  acom5: 32, // Número de reservas para a acomodação 5
  acom6: 25, // Número de reservas para a acomodação 6
};

const Container = styled.div`
  min-height: 92vh;
  width: 100%;

  display: flex;
  margin: 0;
`;

const Section1 = styled.section`
  min-height: 90vh;
  width: 70%;
 
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-between;
`;

const Card = styled.div`
  height: 20%;
  width: 48%;
  background-color: #ffffff;
  border-radius: 10px;
  font-size:20px;
`;
const MiniCard = styled.div`
  height: 16%;
  width: 48%;
  background-color: #ffffff;
  border-radius: 10px;
`;

const Section2 = styled.section`
  min-height: 90vh;
  width: 30%;

  
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-between;
`;

const Grafico = styled.div`
  height: 60%;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GraficoPizza = styled.div`
  height: 60%;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerOpcoes = styled.section`
  height: 12%;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


const Input = styled.input`
  transform: scale(1.5);
  margin-right: 10px; 
  cursor: pointer; 

  &:checked {
    appearance: none; /* Remove o estilo padrão */
    background-color: #461615; /* Cor de fundo quando selecionado */
    border-radius: 50%; /* Mantém o formato circular */
    width: 13px; 
    height: 13px;
    display: inline-block;
    position: relative;
  }
`;


const Label = styled.label`
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
`



const Dashboard = () => {
  const [metric, setMetric] = useState('taxaOcupacao'); // Métrica selecionada

  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], // Meses
    datasets: [
      {
        label: `Métrica: ${metric}`,
        data: dadosExemplo[metric],
        borderColor: '#461615',
        backgroundColor: '#461615',
        fill: true,
      },
    ],
  };
  // Dados para o gráfico de rosca (doughnut chart)
  const dataPizza = {
    labels: ['Acom1', 'Acom2', 'Acom3', 'Acom4', 'Acom5', 'Acom6'], // Nomes das acomodações
    datasets: [
      {
        data: [
          dadosExemplos.acom1,
          dadosExemplos.acom2,
          dadosExemplos.acom3,
          dadosExemplos.acom4,
          dadosExemplos.acom5,
          dadosExemplos.acom6,
        ],
        backgroundColor: ['#461615', '#2A3D66', '#F4A300', '#4F9D8B', '#D1B26F', '#C4A3D1'], // Cores neutras e viva
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Section1>
        <Card  style={{backgroundColor:"#461615", color:"#FFFFFF"}}>Faturamento do mês: R${dadosExemplo.faturamento[0]}</Card>
        <Card></Card>
        <Grafico>
          {/* Gráfico de linha */}
          <Line data={data} />
        </Grafico>
        <ContainerOpcoes>
          {/* Botões de seleção */}
          <Label>
            <Input
              type="radio"
              name="metric"
              value="taxaOcupacao"
              checked={metric === 'taxaOcupacao'}
              onChange={() => setMetric('taxaOcupacao')}
            />
            Taxa de Ocupação
          </Label>
          <Label>
            <Input
              type="radio"
              name="metric"
              value="faturamento"
              checked={metric === 'faturamento'}
              onChange={() => setMetric('faturamento')}
            />
            Faturamento
          </Label>
          <Label>
            <Input
              type="radio"
              name="metric"
              value="reservas"
              checked={metric === 'reservas'}
              onChange={() => setMetric('reservas')}
            />
            Reservas
          </Label>
          <Label>
            <Input
              type="radio"
              name="metric"
              value="cancelamentos"
              checked={metric === 'cancelamentos'}
              onChange={() => setMetric('cancelamentos')}
            />
            Cancelamentos
          </Label>
        </ContainerOpcoes>
      </Section1>
      <Section2>
      <GraficoPizza>
          {/* Gráfico de rosca com imagem no centro */}
          <Doughnut data={dataPizza} />
          {/* Imagem centralizada no gráfico */}
          <img
            src={Logo} // Substitua com a URL da sua imagem
            alt="Logo"
            style={{
              position: 'absolute',
              marginTop:'50px',
              marginRight:'10px',
              width: '80px', // Tamanho da imagem
              height: '80px', // Tamanho da imagem
              zIndex: 10,
              // Para garantir que a imagem fique acima do gráfico
            }}
          />
          
        </GraficoPizza>
        <MiniCard style={{backgroundColor:"#461615"}}></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
      </Section2>
    </Container>
  );
};

export default Dashboard;
