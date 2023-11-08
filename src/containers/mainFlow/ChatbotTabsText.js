import React, { useState } from 'react';
import ChatBotNavbar from '../../components/ChatBotNavbar'
import ChatboxTextBox from '../../components/ChatboxTextBox'
import ChatTextBtn from '../../components/ChatTextBtn';
import { Box, Container } from '@mui/material'

import Sidebar from '../../components/Sidebar'
const ChatbotText = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 1200);
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
          <ChatboxTextBox />
          <ChatTextBtn />
        </Container>
      </Box>
    </>
  )
}

export default ChatbotText