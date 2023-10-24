import React from 'react'
import ChatBotNavbar from '../../components/ChatBotNavbar'
import SocialAccount from '../../components/socialaccount';
import ChatTextBtn from '../../components/ChatTextBtn';
import Sidebar from '../../components/Sidebar'
import { Box, Container } from '@mui/material'

const ChatSocialAccount = () => {
  return (
    <>
      <Sidebar />
      <ChatBotNavbar />
      <Box style={{ height: '100%', margin: 'auto', marginLeft: '25rem', width: '71.5%', maxWidth: "none", }}>
        <Container style={{ padding: 0, maxWidth: '1400px' }} sx={{ marginTop: '6rem' }}>
          <SocialAccount />
          <ChatTextBtn />
        </Container>
      </Box>

    </>

  )
}

export default ChatSocialAccount