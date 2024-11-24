
import styled from "styled-components";

// Container da Navbar: o tamanho varia dependendo do estado 'isOpen', que pode ser 200px ou 100px.
// Também aplica a borda direita e um estilo de altura 100vh (ocupa toda a altura da tela),
// com flexbox para alinhar os itens da navbar.
export const NavbarContainer = styled.div`
    width: ${({ isOpen }) => (isOpen ? "200px" : "100px")};  // Largura baseada no estado 'isOpen'
    border-right: 3px solid #d8e2e8;  // Borda à direita da navbar
    height: 100vh;  // Altura ocupando 100% da tela
    display: flex;  // Usando Flexbox para o layout
    flex-direction: column;  // Itens na navbar ficam empilhados verticalmente
    align-items: center;  // Centraliza os itens horizontalmente
    padding: 10px 0;  // Padding no topo e fundo
    transition: width 0.3s ease;  // Transição suave para mudanças na largura
    z-index: 999;
  `;

// Botão para abrir/fechar a navbar (representado pelo símbolo ☰)
export const NavbarButton = styled.button`
    background: none;  // Sem fundo
    border: none;  // Sem borda
    font-size: 18px;  // Tamanho da fonte
    cursor: pointer;  // Muda o cursor para indicar que é clicável
    margin-bottom: 20px;  // Espaçamento inferior
    z-index: 1;  // Garante que o botão fique acima da linha
  `;

// Lista de links da navbar
export const NavLinks = styled.ul`
    list-style: none;  // Remove marcadores
    padding: 0;  // Remove padding
    margin: 0;  // Remove margin
    display: flex;  // Exibe os itens como flexbox
    flex-direction: column;  // Empilha os itens verticalmente
    margin-top: 30px;  // Espaço no topo
    gap: 30px;  // Espaço entre os itens
    
  `;

// Cada item de link dentro da navbar
export const NavItem = styled.li`
    display: flex;  // Exibe cada item como flexbox
    flex-direction: row;  // Mantém os ícones e o texto alinhados horizontalmente
    align-items: center;  // Alinha ícone e texto no centro verticalmente
    justify-content: ${({ isOpen }) => (isOpen ? "flex-start" : "center")};  // Alinha os itens à esquerda ou no centro, dependendo do estado 'isOpen'
    gap: 10px;  // Espaço entre ícone e texto
    width: 100%;  // Ocupa toda a largura disponível
    padding: 5px 10px;  // Padding interno
    border-radius: 5px;  // Bordas arredondadas
    transition: background-color 0.3s ease, transform 0.3s ease;  // Transições suaves para as mudanças de fundo e escala

    &:hover {
      background-color: #f0f4f7;  // Cor de fundo ao passar o mouse
      transform: scale(1.05);  // Escala o item levemente
    }
  `;

// Ícones que representam cada item de link
export const NavIcon = styled.img`
    width: 30px;  // Largura do ícone
    height: 30px;  // Altura do ícone
    transition: transform 0.3s ease;  // Transição suave para a transformação do ícone

    ${NavItem}:hover & {
      transform: scale(1.1);  // Ao passar o mouse, o ícone aumenta de tamanho
    }
  `;

// Texto dentro dos itens da navbar
export const NavText = styled.span`
    font-size: 14px;  // Tamanho da fonte
    color: #333;  // Cor do texto
    white-space: nowrap;  // Impede que o texto quebre para a próxima linha
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};  // Aparece se a navbar estiver aberta, desaparece quando estiver fechada
    transition: opacity 0.3s ease, transform 0.3s ease;  // Transições suaves para opacidade e transformação
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-20px)")};  // Desloca o texto quando a navbar está fechada

    ${NavItem}:hover & {
      color: #2b439c;  // Muda a cor do texto ao passar o mouse
    }
  `;

// Linha separadora entre a navbar e os itens da página
// Linha separadora entre a navbar e os itens da página
export const LineSeparator = styled.div`
    width: 100vw;  // Largura máxima da tela
    height: 58px;  // Altura da linha
    border-bottom: 3px solid #d8e2e8;  // Borda inferior
    background-color: transparent;  // Fundo transparente
    position: absolute;  // Posicionamento absoluto
    top: 0;  // Ajusta a linha para o topo da tela
    left: 0;  // Alinha à esquerda
    z-index: 0;  // Linha atrás de outros elementos
    display: flex;  // Usa flexbox
    align-items: center;  // Alinha verticalmente a logo
    justify-content: flex-start;  // Alinha a logo à esquerda, mas com espaçamento adequado
    padding-left: 20px;  // Adiciona um pequeno espaçamento à esquerda para afastar da borda
  `;

// A logo dentro da linha separadora
// A logo dentro da linha separadora
export const LogoImage = styled.img`
    height: 40px;  // Ajusta a altura da logo
    width: auto;  // Mantém a proporção da imagem
    margin-left: ${({ isOpen }) => (isOpen ? "230px" : "130px")};  // Ajusta o espaço à esquerda da logo com base no estado da navbar
    transition: margin-left 0.3s ease;  // Adiciona transição suave para o deslocamento da logo
  `;

export const RightIconsContainer = styled.div`
    position: absolute;  // Para posicionar as imagens de forma fixa na tela
    top: 15px;  // Distância do topo (ajuste conforme necessário)
    right: 100px;  // Distância da direita da página
    display: flex;  // Para alinhar as imagens lado a lado
    gap: 30px;  // Espaço entre as imagens
    z-index: 1;  // Garante que as imagens fiquem acima de outros elementos
  `;

// Estilo para cada imagem (notificação e foto de perfil)
export const IconImage = styled.img`
    width: 30px;  // Tamanho da imagem
    height: 30px;  // Tamanho da imagem
    border-radius: 50%;  // Torna a imagem redonda
    object-fit: cover;  // Faz com que a imagem se ajuste sem distorcer
    cursor: pointer;  // Indica que a imagem é clicável
    transition: transform 0.3s ease;  // Transição suave para interação

    &:hover {
      transform: scale(1.1);  // Aumenta o tamanho da imagem quando passa o mouse
    }
  `;

// Estilo para o WelcomeContainer
export const WelcomeContainer = styled.div`
  position: absolute;
  width: 75%;
  height: 300px;
  top: 50%;  // Centraliza verticalmente
  left: 265px;

  transform: translateY(-50%);  // Ajusta para centralizar perfeitamente
  display: flex;
  flex-direction: column;
  align-items: flex-start;  // Alinha o conteúdo à esquerda
  justify-content: flex-start;  // Alinha o conteúdo para o topo
  padding-left: 20px;  // Adiciona um pouco de espaço à esquerda
  background-color: green;
`;

// Estilo para o h1 dentro do WelcomeContainer
export const WelcomeTitle = styled.h1`
  font-size: 50px;  // Tamanho da fonte
  color: #000000;  // Cor do texto
  align-self: flex-start;  // Garante que o texto fique alinhado à esquerda
  font-weight: 500;
`;



// Container que agrupa o título "Email" e o valor do email
export const EmailContainer = styled.div`
  display: flex;          // Usa flexbox para layout
  flex-direction: column; // Empilha os itens verticalmente
  align-items: flex-start; // Alinha os itens à esquerda`;

// Estilo para o texto "Email"
export const EmailText = styled.p`
  font-size: 18px;  // Tamanho da fonte
  color: gray;  // Cor cinza
`;

// Estilo para o valor do email
export const EmailValue = styled.p`
  font-size: 18px;  // Tamanho da fonte
  color: black;  // Cor preta
`;

// Container que agrupa o título "Cargo" e o valor do cargo
export const CargoContainer = styled.div`
  display: flex;          // Usa flexbox para layout
  flex-direction: column; // Empilha os itens verticalmente
  align-items: flex-start; // Alinha os itens à esquerda
`;

// Estilo para o título do cargo
export const CargoText = styled.p`
  font-size: 18px;  // Tamanho da fonte
  color: gray;      // Cor cinza
`;

// Estilo para o valor do cargo
export const CargoValue = styled.p`
  font-size: 18px;  // Tamanho da fonte
  color: black;     // Cor preta
`;
// Container para alinhar o EmailContainer e o CargoContainer horizontalmente
export const UserDetailsContainer = styled.div`
  display: flex;          // Flexbox para layout
  flex-direction: row;    // Itens alinhados horizontalmente
  justify-content: flex-start; // Alinha os itens à esquerda
  align-items: center;    // Alinha verticalmente ao centro
  gap: 40px;              // Espaço entre os containers
  margin-top: 20px;       // Distância do conteúdo acima
  background-color: pink;
`;
export const FotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px; // Ajuste a posição lateral

`;

// Estilo do círculo que contém a foto
export const FotoUsuario = styled.div`
  width: 80px;  // Largura do círculo
  height: 80px; // Altura do círculo
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #D8E2E8; // Borda clara
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4; // Cor de fundo caso não haja imagem
  cursor: pointer;
`;

// Estilo para a imagem dentro do círculo
export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
// Estilo para o container da imagem do avatar
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px; // Tamanho do círculo
  height: 190px; // Tamanho do círculo
  border-radius: 50%; // Forma circular
  background-color: #FF690F; // Cor de fundo quando não houver imagem
  overflow: hidden; // Para garantir que a imagem não ultrapasse os limites do círculo
  border: 2px solid #d8e2e8; // Borda do círculo
  cursor: pointer; // O cursor se torna uma mão ao passar sobre a imagem
`;

// Estilo para a imagem do avatar
export const AvatarImage = styled.img`
  width: 100%; // A imagem vai ocupar toda a área do contêiner
  height: 100%; // A imagem vai ocupar toda a área do contêiner
  object-fit: cover; // Faz a imagem preencher o círculo sem distorcer
  border-radius: 50%; // As bordas da imagem também são arredondadas
`;
