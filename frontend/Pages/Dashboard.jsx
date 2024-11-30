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
  acom1: 30,
  acom2: 28, 
  acom3: 35,
  acom4: 40,
  acom5: 32,
  acom6: 25,
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
  font-size:30px;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;

  `;
const MiniCard = styled.div`
  height: 16%;
  width: 48%;
  background-color: #ffffff;
  border-radius: 10px;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  flex-direction:column;
  color:#FFFFFF;
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
    appearance: none; 
    background-color: #461615;
    border-radius: 50%; 
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

const H1 = styled.h1`
font-size:40px;
`



const Dashboard = () => {
  const [metric, setMetric] = useState('taxaOcupacao');

  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], 
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
  const dataPizza = {
    labels: ['Acom1', 'Acom2', 'Acom3', 'Acom4', 'Acom5', 'Acom6'], 
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
        backgroundColor: ['#461615', '#2A3D66', '#F4A300', '#4F9D8B', '#D1B26F', '#C4A3D1'], 
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Section1>
        <Card  style={{backgroundColor:"#461615", color:"#FFFFFF"}}><h3>Faturamento do mês:</h3> <H1>R${dadosExemplo.faturamento[0]}</H1> </Card>
        <Card  style={{color:"#461615"}}><h3>Taxa de ocupação:</h3> <H1>35%</H1></Card>
        <Grafico>
          <Line data={data} />
        </Grafico>
        <ContainerOpcoes>
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
          <Doughnut data={dataPizza} />
          <img
            src={Logo} 
            alt="Logo"
            style={{
              position: 'absolute',
              marginTop:'50px',
              marginRight:'10px',
              width: '80px', 
              height: '80px',
              zIndex: 10,
            }}
          />
          
        </GraficoPizza>
        <MiniCard style={{backgroundColor:"#461615"}}><h3>Total Adultos</h3> <H1>3432</H1></MiniCard>
        <MiniCard style={{color:"#461615"}}><h3>Total Reservas</h3> <H1>2473</H1></MiniCard>
        <MiniCard style={{color:"#461615"}}><h3>Total Crianças</h3> <H1>674</H1></MiniCard>
        <MiniCard style={{color:"#461615"}}><h3>Total funcionários</h3> <H1>24</H1></MiniCard>
      </Section2>
    </Container>
  );
};

export default Dashboard;
