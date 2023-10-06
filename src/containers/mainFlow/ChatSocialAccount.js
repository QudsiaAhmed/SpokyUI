import React from 'react'
import ChatBotNavbar from '../../components/ChatBotNavbar'
import SocialAccount from '../../components/socialaccount';
import ChatTextBtn from '../../components/ChatTextBtn';
import Sidebar from '../../components/Sidebar'

const ChatSocialAccount = () => {
  return (
    <>
    <Sidebar/>
    <ChatBotNavbar/>
    <SocialAccount/>
    <ChatTextBtn/>

  </>

  )
}

export default ChatSocialAccount