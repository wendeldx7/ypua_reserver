import styled from "styled-components";

export const Container= styled.div`

  height: auto;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;



export const Container1 = styled.div`
  height: 80px;
  width: 80%;
  background-color: #ffffff;
  box-shadow: 5px 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0 28px 0 28px;
`;
    
export const Input = styled.input`
  height: 100%;
  width: 22vh;
  display: flex;
  align-items: center;
  font-size: 17px;
  border: none;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
 
`;

export const ContainerInput = styled.div`
  height: 60px;
  width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

`;

export const Label = styled.label`
  font-size: 15px;
    font-weight: 400;
    

`;

export const BotaoPesquisar = styled.button`
  height: 60px;
  width: 20%;
  padding: 0 20px;
  color:#FFFFFF;
  background-color: #461615;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: 88%;
  font-weight: 400;

  &:hover {
    transition: 0.3s;
  }
`;
export const BotaoFiltrar = styled.button`
  height: 60px;
  width: 270px;
  padding: 0 20px;  
  background-color: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0.2, 0.2, 0.2, 0.2);
  font-size: 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-weight: 400;

  &:hover {
    transition: 0.3s;
  }
`;

export const MenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 230px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 10;
 
`;

export const Contador = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  justify-content: space-between;
  
`;

export const LabelContador = styled.div`
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

`;

export const DescricaoContador = styled.div`
  font-size: 14px;
  color: #777;
  font-family: "Montserrat", sans-serif;
  line-height: 1.2;
`;

export const Controles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  justify-content: space-around;
  width: 100px;

`;

export const BotaoControle = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #461615;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  color: #461615;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const BotaoConfirmar = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #461615;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

export const ContainerTexto = styled.div`
height:100%;
width: 40%;
  h2 {
    font-size: 25px; /* Define o tamanho da fonte */
    font-weight: bold; /* Opcional: ajuste do peso da fonte */
    text-align: center; /* Centraliza o texto */
    margin: 0; /* Remove margens padrão, se necessário */
  }

`
export const BarraLateral = styled.div`
height:100%;
border: 1px solid #D0D0D0;
`
export const ContainerFiltro = styled.div`
height:100%;
width:65%;
display:flex;
align-items:center;
justify-content:space-around;
`

export const ContainerTitulo = styled.div`
  color: #7e2726;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 25px;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center; /* Centraliza os itens */
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha */
  gap: 30px; /* Espaçamento entre os itens */
  padding: 0 20px; /* Adiciona o padding nas laterais */
  box-sizing: border-box;
`;

export const ContainerQuarto = styled.div`
margin-top: 50px;
  display: flex;
  width: 300px; /* Faz com que 3 itens se alinhem por linha */
  height: 600px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px; /* Adiciona espaçamento entre as linhas */

  @media (max-width: 900px) {
    width: calc(50% - 20px); /* Para telas menores, coloca 2 itens por linha */
  }

  @media (max-width: 600px) {
    width: 100%; /* Para telas muito pequenas, coloca 1 item por linha */
  }
`;

export const ContainerFacilidades = styled.div`
  width: 100%;
  padding: 15px;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CardTitle = styled.h1`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CardFacilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: start;

  li {
    margin-bottom: 5px;
  }
`;

export const ContainerImagem = styled.div`
  width: 100%;
  height: 40%;
`;

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContainerBotao = styled.div`
  height: 19%;
  width: 90%;
`;

export const Button = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  background-color: #461615;
  color: #ffffff;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* Adiciona um cursor para indicar clique */
`;
