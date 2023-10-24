import React from 'react'
import ChatBotNavbar from '../../components/ChatBotNavbar'
import ChatBotBox from '../../components/ChatBotBox'
import ChatBtn from '../../components/ChatBtn'
import Sidebar from '../../components/Sidebar'
import { Box, Container } from '@mui/material'
const ChatBotTabs = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <ChatBotNavbar />
      <Box style={{height:'100%' ,margin: 'auto', marginLeft: '25rem', width: '71.5%', maxWidth: "none",  }}>
      <Container style={{padding:0,maxWidth:'1400px'}} sx={{marginTop: '6rem' }}>
      <ChatBotBox />
      <ChatBtn />

      </Container>
      </Box>
    </>
  )
}

export default ChatBotTabs
