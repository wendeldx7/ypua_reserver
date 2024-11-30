import React from 'react';
import { Container } from './styles';

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <img src={Icon} alt={Text} style={{ width: '24px', height: '24px', marginRight: '15px' }} />
      {Text}
    </Container>
  );
};

export default SidebarItem;
