import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: ${({ isOpen }) =>
    isOpen ? "200px" : "100px"}; // Largura baseada no estado 'isOpen'
  border-right: 3px solid #d8e2e8; // Borda à direita da navbar
  height: 100vh; // Altura ocupando 100% da tela
  display: flex; // Usando Flexbox para o layout
  flex-direction: column; // Itens na navbar ficam empilhados verticalmente
  align-items: center; // Centraliza os itens horizontalmente
  padding: 10px 0; // Padding no topo e fundo
  transition: width 0.3s ease; // Transição suave para mudanças na largura
  z-index: 999;
`;

// Botão para abrir/fechar a navbar (representado pelo símbolo ☰)
export const NavbarButton = styled.button`
  background: none; // Sem fundo
  border: none; // Sem borda
  font-size: 18px; // Tamanho da fonte
  cursor: pointer; // Muda o cursor para indicar que é clicável
  margin-bottom: 20px; // Espaçamento inferior
  z-index: 1; // Garante que o botão fique acima da linha
`;

// Lista de links da navbar
export const NavLinks = styled.ul`
  list-style: none; // Remove marcadores
  padding: 0; // Remove padding
  margin: 0; // Remove margin
  display: flex; // Exibe os itens como flexbox
  flex-direction: column; // Empilha os itens verticalmente
  margin-top: 30px; // Espaço no topo
  gap: 30px; // Espaço entre os itens
`;

// Cada item de link dentro da navbar
export const NavItem = styled.li`
  display: flex; // Exibe cada item como flexbox
  flex-direction: row; // Mantém os ícones e o texto alinhados horizontalmente
  align-items: center; // Alinha ícone e texto no centro verticalmente
  justify-content: ${({ isOpen }) =>
    isOpen
      ? "flex-start"
      : "center"}; // Alinha os itens à esquerda ou no centro, dependendo do estado 'isOpen'
  gap: 10px; // Espaço entre ícone e texto
  width: 100%; // Ocupa toda a largura disponível
  padding: 5px 10px; // Padding interno
  border-radius: 5px; // Bordas arredondadas
  transition: background-color 0.3s ease, transform 0.3s ease; // Transições suaves para as mudanças de fundo e escala

  &:hover {
    background-color: #f0f4f7; // Cor de fundo ao passar o mouse
    transform: scale(1.05); // Escala o item levemente
  }
`;

// Ícones que representam cada item de link
export const NavIcon = styled.img`
  width: 30px; // Largura do ícone
  height: 30px; // Altura do ícone
  transition: transform 0.3s ease; // Transição suave para a transformação do ícone

  ${NavItem}:hover & {
    transform: scale(1.1); // Ao passar o mouse, o ícone aumenta de tamanho
  }
`;

// Texto dentro dos itens da navbar
export const NavText = styled.span`
  font-size: 14px; // Tamanho da fonte
  color: #333; // Cor do texto
  white-space: nowrap; // Impede que o texto quebre para a próxima linha
  opacity: ${({ isOpen }) =>
    isOpen
      ? 1
      : 0}; // Aparece se a navbar estiver aberta, desaparece quando estiver fechada
  transition: opacity 0.3s ease, transform 0.3s ease; // Transições suaves para opacidade e transformação
  transform: ${({ isOpen }) =>
    isOpen
      ? "translateX(0)"
      : "translateX(-20px)"}; // Desloca o texto quando a navbar está fechada

  ${NavItem}:hover & {
    color: #2b439c; // Muda a cor do texto ao passar o mouse
  }
`;

// Linha separadora entre a navbar e os itens da página
// Linha separadora entre a navbar e os itens da página
export const LineSeparator = styled.div`
  width: 100vw; // Largura máxima da tela
  height: 58px; // Altura da linha
  border-bottom: 3px solid #d8e2e8; // Borda inferior
  background-color: transparent; // Fundo transparente
  position: absolute; // Posicionamento absoluto
  top: 0; // Ajusta a linha para o topo da tela
  left: 0; // Alinha à esquerda
  z-index: 0; // Linha atrás de outros elementos
  display: flex; // Usa flexbox
  align-items: center; // Alinha verticalmente a logo
  justify-content: flex-start; // Alinha a logo à esquerda, mas com espaçamento adequado
  padding-left: 20px; // Adiciona um pequeno espaçamento à esquerda para afastar da borda
`;

// A logo dentro da linha separadora
// A logo dentro da linha separadora
export const LogoImage = styled.img`
  height: 40px; // Ajusta a altura da logo
  width: auto; // Mantém a proporção da imagem
  margin-left: ${({ isOpen }) =>
    isOpen
      ? "230px"
      : "130px"}; // Ajusta o espaço à esquerda da logo com base no estado da navbar
  transition: margin-left 0.3s ease; // Adiciona transição suave para o deslocamento da logo
`;

export const RightIconsContainer = styled.div`
  position: absolute; // Para posicionar as imagens de forma fixa na tela
  top: 15px; // Distância do topo (ajuste conforme necessário)
  right: 100px; // Distância da direita da página
  display: flex; // Para alinhar as imagens lado a lado
  gap: 30px; // Espaço entre as imagens
  z-index: 1; // Garante que as imagens fiquem acima de outros elementos
`;

// Estilo para cada imagem (notificação e foto de perfil)
export const IconImage = styled.img`
  width: 30px; // Tamanho da imagem
  height: 30px; // Tamanho da imagem
  border-radius: 50%; // Torna a imagem redonda
  object-fit: cover; // Faz com que a imagem se ajuste sem distorcer
  cursor: pointer; // Indica que a imagem é clicável
  transition: transform 0.3s ease; // Transição suave para interação

  &:hover {
    transform: scale(1.1); // Aumenta o tamanho da imagem quando passa o mouse
  }
`;

// Estilo para o WelcomeContainer
export const WelcomeContainer = styled.div`
  position: absolute;
  top: 40%; // Ajusta para subir um pouco mais
  left: 50%; // Centraliza horizontalmente
  transform: translate(-50%, -50%); // Ajusta a posição para garantir que o centro do container esteja no centro da página
  width: 75%;
  height: 250px;
  display: flex; // Ativa o flexbox
  justify-content: space-between; // Coloca o conteúdo nos extremos (esquerda e direita)
  align-self: bottom;
  align-items: center; // Centraliza os itens verticalmente
`;

export const WelcomeTitle = styled.h1`
  position: absolute; // Permite posicionamento manual
  top: 10px; // Define a distância do topo
  left: 10px; // Define a distância da esquerda
  margin: 0; // Remove qualquer margem padrão
  font-size: 50px; // Ajusta o tamanho do texto (opcional)
  font-weight: 600;
  color: #000; // Cor do texto (opcional)
`;

export const AvatarContainer = styled.div`
  display: flex; // Para centralizar o conteúdo
  justify-content: center;
  align-items: center;
  width: 245px; // Define o tamanho do contêiner do avatar
  height: 245px;
  border-radius: 50%; // Torna o contêiner circular
  background-color: #ff690f; // Cor de fundo
  overflow: hidden; // Para imagens que excedam o contêiner
  border: 2px solid #d8e2e8; // Adiciona uma borda
  cursor: pointer; // Exibe o cursor de mão ao passar
`;
export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: row; // Alinha os itens na horizontal (lado a lado)
  justify-content: flex-start; // Alinha os itens no topo
  align-items: flex-start; // Alinha os itens ao topo
  width: 50%; // Faz com que ocupe 50% da largura do WelcomeContainer
  padding: 10px;
  box-sizing: border-box;
  gap: 10%; // Adiciona um espaço entre os itens

  margin-top: 175px; // Ajuste a distância para baixo conforme necessário
`;

// Container que agrupa o título "Email" e o valor do email
export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Alinha os textos à esquerda

  width: 50%; // Garante que o container de email ocupe metade do espaço disponível
`;
export const CargoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Alinha os textos à esquerda
 width: 50%; // Garante que o container de cargo ocupe metade do espaço disponível
`;

export const EmailText = styled.p`
  font-size: 18px; // Tamanho da fonte
  color: gray; // Cor cinza
`;

export const EmailValue = styled.p`
  font-size: 18px; // Tamanho da fonte
  color: black; // Cor preta
`;

// Estilo para o  título do cargo
export const CargoText = styled.p`
  font-size: 18px; // Tamanho da fonte
  color: gray; // Cor cinza
`;

export const CargoValue = styled.p`
  font-size: 18px; // Tamanho da fonte
  color: black; // Cor preta
`;
// Container para alinhar o EmailContainer e o CargoContainer horizontalmente

export const FotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Estilo do círculo que contém a foto
export const FotoUsuario = styled.div`
  width: 80px; // Largura do círculo
  height: 80px; // Altura do círculo
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #d8e2e8; // Borda clara
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

// Estilo para a imagem do avatar
export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ajusta a imagem para preencher o círculo
`;
export const LargeContainer = styled.div`
  width: 100%; /* Largura de 100% */
  height: 500px; /* Altura de 400px */
  border-top: 3px solid #d8e2e8; /* Borda de 5px no topo */
  margin-top: 400px;
`;

export const Title = styled.div`
  position: absolute;
  margin-top: 500px;
  top: -50px; /* Posiciona acima da borda superior */
  left: 200px; /* Define a posição a 200px da esquerda */
  color: #461615; /* Cor preta */
  font-size: 18px; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  border-bottom: 4px solid #461615;
`;

export const Heading = styled.h1`
  position: absolute;
  left: 200px;
  font-size: 24px; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  margin-top: 20px; /* Distância do topo */
`;

export const InnerContainer = styled.div`
  width: 75%; /* Largura relativa ao contêiner pai */
  height: auto; /* Ajusta conforme o conteúdo */
  margin: auto; /* Centraliza horizontalmente */
  display: flex; /* Facilita o alinhamento interno */
  justify-content: space-between; /* Distribui os itens entre os dois lados */
  align-items: flex-start; /* Alinha os itens ao topo */
  border: 3px solid #d8e2e8; /* Mesma cor da borda do contêiner principal */
  border-radius: 14px; /* Cantos arredondados */
  background-color: transparent; /* Fundo transparente */
  margin-top: 75px;
  padding: 20px;
  box-sizing: border-box; /* Garantia para respeitar padding e bordas */
`;

export const DataContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  width: 100%; /* Para alinhar corretamente os inputs no container */
`;

export const DataLabel = styled.label`
  position: absolute;
  top: 10px; /* Inicialmente o label ficará sobre o input */
  left: 12px;
  color: #888;
  font-size: 16px;
  background-color: transparent;
  padding: 0 5px;
  pointer-events: none; /* O label não interfere no clique do input */
  transition: 0.2s all ease;
  z-index: 1; /* Garante que o label fique sobre o input */

  /* Quando o input estiver em foco ou o valor for preenchido */
  &:focus,
  &:not(:placeholder-shown) {
    top: -8px;
    left: 12px;
    font-size: 12px;
    color: #2b439c;
    background-color: #eff1f4;
  }
`;
export const InputField = styled.input`
  width: 100%; /* Agora usa 100% do espaço do contêiner pai */
  padding: 16px 40px 16px 12px; /* Adicionado espaço à direita para o botão */
  border: 2px solid #d8e2e8;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  position: relative;
  background-color: #eff1f4;
  box-sizing: border-box; /* Inclui padding e bordas na largura total */

  &:focus {
    border-color: #2b439c;
  }

  /* Especificação para o label se mover */
  &:focus + ${DataLabel}, &:not(:placeholder-shown) + ${DataLabel} {
    top: -10px;
    left: 12px;
    font-size: 15px;
    color: #000000;
    background-color: #eff1f4;
    padding: 0 5px;
    font-weight: 200;
  }
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  color: #461615;
  cursor: pointer;
  font-size: 14px;
  position: absolute;
  right: 20px; /* Espaço entre o botão e a borda direita do input */
  top: 50%;
  transform: translateY(-50%);
  height: 30px; /* Altura ajustada para caber dentro do input */
  width: 30px; /* Largura proporcional */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box; /* Respeita os paddings e bordas */
`;

export const RightContainer = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box; /* Respeita os paddings e bordas */
`;
