import React, { useState } from 'react';
import ChatBotNavbar from '../../components/ChatBotNavbar'
import ChatBotBox from '../../components/ChatBotBox'
import ChatBtn from '../../components/ChatBtn'
import Sidebar from '../../components/Sidebar'
import { Box, Container } from '@mui/material'
const ChatBotTabs = () => {
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
      <ChatBotNavbar collapsed={collapsed}/>
      <Box style={TabStyles}>
        <Container style={{ maxWidth: '1400px', marginTop: '2rem' }}>
      <ChatBotBox />
      <ChatBtn />

      </Container>
      </Box>
    </>
  )
}

export default ChatBotTabs
