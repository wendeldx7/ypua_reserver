import styled from 'styled-components';

export const TituloAcomodacao = styled.h1`
    color: black;
    margin-top: 77px;
    margin-left: 100px;
    font-size: 48px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`;

export const TituloH3 = styled.h3`
    color: black;
    margin-top: 52px;
    margin-left: 100px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`;

export const ReseverContainer = styled.div`
    display: flex;
    background-color: white;
    width: 840px;
    border-radius: 15px;
    margin-left: 100px; 
    margin-top: 45px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    padding: 20px;
    flex-direction: column;
`;

export const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const FormRow = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    
`;

export const NomeEntrada = styled.h3`
    color: black;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`;

export const InputEntrada = styled.input.attrs({ type: 'date' })`
    width: 100%;
  height: 40px;
  margin-top: 8px;
  background-color: #D9D9D9;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
  text-indent: 5px;
  
  ::-webkit-calendar-picker-indicator {
    display: none; /* Remove o ícone padrão de data */
  }
`;

export const NomeSaida = styled.h3`
    color: black;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`;

export const InputSaida = styled.input.attrs({ type: 'date' })`
    width: 100%;
    height: 40px;
    margin-top: 8px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    text-indent: 5px;
    
`;

export const NomeNome = styled.h3`
    color: black;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`;

export const InputNome = styled.input`
    width: 100%;
    height: 40px;
    margin-top: 8px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    text-indent: 10px;
`;

export const NomeCPF = styled.h3`
    color: black;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`;

export const InputCPF = styled.input`
    width: 100%;
    height: 40px;
    margin-top: 8px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    text-indent: 10px;
`;

export const NomeTelefone = styled.h3`
    color: black;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`;

export const InputTelefone = styled.input`
    width: 100%;
    height: 40px;
    margin-top: 8px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    text-indent: 10px;
`;

export const NomeHospedes = styled.h3`
    color: black;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`;

export const InputHospedes = styled.input.attrs({ type: 'number', min: 1 })`
    width: 100%;
    height: 40px;
    margin-top: 8px;
    background-color: #D9D9D9;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    text-indent: 10px;
`;

export const NomeResumo = styled.h3`
    color: black;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    margin-bottom: 8px;
    margin-left: 32px;
`;

export const ResumoContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: black;
    padding: 20px;
    margin-left: 20px;
    flex: 1;
`;

export const BotaoReservar = styled.button`
    width: 200px;
    height: 40px;
    background-color: #5C2B29;
    color: white;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    margin: 20px auto;
    cursor: pointer;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
    &:hover {
        background-color: #3d1c1a;
    }
`;

export const AcomodacaoContainer = styled.div`


`;

export const TituloFotoAcomodacao = styled.h3`
    color: black;
    margin-top: 52px;
    margin-left: 789px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`;


export const FotoAcomodacao = styled.img`
    width:379px;
    height:209px;
    margin-left: 21px;
    margin-top: 43px;
    border-radius: 15px;
`

export const ContainerPage = styled.div`
    display: flex;


`

export const ContainerTitulos = styled.div`
    display: flex;


`

export const DescricaoAcomodacao = styled.h5`
    color: black;
    font-size: 24px;
    margin-left: 21px;
    margin-top: 22px;
    font-family: 'Montserrat', sans-serif;
   
`;
export const DescricaoAcomodacao02 = styled.h5`
    color: black;
    font-size: 20px;
    margin-left: 21px;
    margin-top: 26px;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;
`;

export const ValorAcomodacao = styled.h5`
    color: black;
    font-size: 24px;
    margin-left: 21px;
    margin-top: 40px;
    font-family: 'Montserrat', sans-serif;
   
`;

export const TituloComodidades = styled.h3`
    color: black;
    margin-top: 42px;
    margin-left: 21px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`

export const ContainerComodidades = styled.div`
    max-width: 289px;
    max-height: 179px;
    margin-left: 21px;
    margin-top:31px ;
    display: grid;
    grid-template-columns:repeat(4,1fr);
    gap:10px;

    
`

export const ImageComodidades = styled.img`
    max-width: max-content;
    max-height: max-content;
    margin-top: 5px;

`

export const NomeComotidades = styled.h3`
    color: black;
    font-size: 20px;
    margin-left:10px;
    margin-right: 51px;
    margin-top: 5px;
    font-weight: 300;   
    font-family: 'Montserrat', sans-serif;
    white-space:nowrap;
`


export const Resumo = styled.p`
    color: black;
`