import React from 'react'
import ChatBotNavbar from '../../components/ChatBotNavbar'
import ChatboxTextBox from '../../components/ChatboxTextBox'
import ChatTextBtn from '../../components/ChatTextBtn';
import { Box, Container } from '@mui/material'

import Sidebar from '../../components/Sidebar'
const ChatbotText = () => {
  return (
    <>
      <Sidebar />
      <ChatBotNavbar />
      <Box style={{height:'100%' ,margin: 'auto', marginLeft: '25rem', width: '71.5%', maxWidth: "none",  }}>
      <Container style={{padding:0,maxWidth:'1400px'}} sx={{marginTop: '6rem' }}>
          <ChatboxTextBox />
          <ChatTextBtn />
        </Container>
      </Box>
    </>
  )
}

export default ChatbotText