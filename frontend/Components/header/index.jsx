import React, { useState } from 'react';
import { Container, Logo } from './styles.js';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../sidebar/index.jsx';
import { Link } from 'react-router-dom'; // Importando o Link
import logoImage from '../../Image/logo.png'; // Certifique-se de que o caminho está correto

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      <Link to="/">
        <Logo src={logoImage} alt="Logo" />
      </Link>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};

export default Header;
