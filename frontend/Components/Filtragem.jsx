// import styled from "styled-components";
// import { useState } from "react";
// import {
//     Container1,
//     Input,
//     ContainerInput,
//     Label,
//     BotaoPesquisar,
//     BotaoFiltrar,
//     MenuDropdown,
//     Contador,
//     LabelContador,
//     DescricaoContador,
//     Controles,
//     BotaoControle,
//     BotaoConfirmar,
//     ContainerTexto,
//     BarraLateral,
//     ContainerFiltro
//   } from "../Styles/AcomodacaoStyled"



// const Filtragem = () => {
//   const [dataEntrada, setDataEntrada] = useState("");
//   const [dataSaida, setDataSaida] = useState("");

//   const [dropdownAberto, setDropdownAberto] = useState(false);
//   const [adultos, setAdultos] = useState(1);
//   const [criancas, setCriancas] = useState(0);
//   const [bebes, setBebes] = useState(0);

 
//   const alternarDropdown = () => setDropdownAberto(!dropdownAberto);

//   const ResumoPassageiros = () => {
//     let resumo = `${adultos} Adulto${adultos > 1 ? "s" : ""}`;
//     if (criancas > 0) resumo += `, ${criancas} Criança${criancas > 1 ? "s" : ""}`;
//     if (bebes > 0) resumo += `, ${bebes} Bebê${bebes > 1 ? "s" : ""}`;
//     return resumo;
//   };


//   const handleConfirmar = () => {
//     setDropdownAberto(false); 
//     console.log("Passageiros confirmados:", ResumoPassageiros());
//   };


//   const handlePesquisar = () => {
//     console.log("Data de entrada:", dataEntrada);
//     console.log("Data de saída:", dataSaida);
//     console.log("Passageiros:", ResumoPassageiros());
//   };

//   return (
//     <Container1>
//         <ContainerFiltro>
//       <ContainerInput>
//         <Label htmlFor="">ENTRADA</Label>
//         <Input
//           type="date"
//           value={dataEntrada}
//           onChange={(e) => setDataEntrada(e.target.value)}
//         />
//       </ContainerInput>
// <BarraLateral/>
//       <ContainerInput>
//         <Label htmlFor="">SAÍDA</Label>
//         <Input
//           type="date"
//           value={dataSaida}
//           onChange={(e) => setDataSaida(e.target.value)}
//         />
//       </ContainerInput>
//      <BarraLateral/>
//       <div style={{ position: "relative" }}>
//         <BotaoFiltrar onClick={alternarDropdown}>
//             <p>Selecione os Hóspedes</p>
//           {ResumoPassageiros()}
//         </BotaoFiltrar>

//         {dropdownAberto && (
//           <MenuDropdown>
//             {/* Adultos */}
//             <Contador>
//                <ContainerTexto>
//               <LabelContador>Adultos</LabelContador>
//               <DescricaoContador>A partir de 12 anos</DescricaoContador>
//               </ContainerTexto>
//               <Controles>
//                 <BotaoControle
//                   onClick={() => setAdultos(adultos - 1)}
//                   disabled={adultos <= 1}
//                 >
//                   -
//                 </BotaoControle>
//                 <span>{adultos}</span>
//                 <BotaoControle onClick={() => setAdultos(adultos + 1)}>
//                   +
//                 </BotaoControle>
//               </Controles>
          
//             </Contador>

//             {/* Crianças */}
//             <Contador>
//             <ContainerTexto>
//               <LabelContador>Crianças</LabelContador>
//               <DescricaoContador>2 a 11 anos</DescricaoContador>
//               </ContainerTexto>
//               <Controles>
//                 <BotaoControle
//                   onClick={() => setCriancas(criancas - 1)}
//                   disabled={criancas <= 0}
//                 >
//                   -
//                 </BotaoControle>
//                 <span>{criancas}</span>
//                 <BotaoControle onClick={() => setCriancas(criancas + 1)}>
//                   +
//                 </BotaoControle>
//               </Controles>
//             </Contador>

//             {/* Bebês */}
//             <Contador>
//             <ContainerTexto>
//               <LabelContador>Bebês</LabelContador>
//               <DescricaoContador>0 a 23 meses</DescricaoContador>
//               </ContainerTexto>
//               <Controles>
//                 <BotaoControle
//                   onClick={() => setBebes(bebes - 1)}
//                   disabled={bebes <= 0}
//                 >
//                   -
//                 </BotaoControle>
//                 <span>{bebes}</span>
//                 <BotaoControle onClick={() => setBebes(bebes + 1)}>
//                   +
//                 </BotaoControle>
//               </Controles>
//             </Contador>

//             <BotaoConfirmar onClick={handleConfirmar}>Confirmar</BotaoConfirmar>
//           </MenuDropdown>
//         )}
//       </div>
//       </ContainerFiltro>
//       <BotaoPesquisar onClick={handlePesquisar}>Pesquisar</BotaoPesquisar>
//     </Container1>
//   );
// };

// export default Filtragem;