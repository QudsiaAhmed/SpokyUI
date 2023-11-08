import React, { useState } from 'react';
import { Box, Container } from '@mui/material'
import MyChatBotNavbar from '../../components/MyChatBot/MyChatBotNavbar';
import Sidebar from '../Sidebar';
import MyChatBotPlan from '../../components/MyChatBot/MyChatBotPlan';
import Filtertion from '../../components/MyChatBot/CardFilteration'
const MyChatBot = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 800);

  const TabStyles = {
    height: '100%',
    marginLeft: '18rem',
    width: 'calc(100% - 18rem)',
  };

  if (window.innerWidth <= 1200) {
    TabStyles.marginLeft = '0';
    TabStyles.width = '100%';
  }

  return (
    <>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <MyChatBotNavbar collapsed={collapsed}/>
      <Box style={TabStyles}>
        <Container style={{ maxWidth: '1400px', marginTop: '2rem' }}>
      <MyChatBotPlan/>
      <Filtertion/>
      </Container>
      </Box>

    </>
  )
}

export default MyChatBot
