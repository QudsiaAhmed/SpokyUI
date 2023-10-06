import React from 'react'
import ChatBotNavbar from '../../components/ChatBotNavbar'
import ChatboxTextBox from '../../components/ChatboxTextBox'
import ChatTextBtn from '../../components/ChatTextBtn';

import Sidebar from '../../components/Sidebar'
const ChatbotText = () => {
  return (
    <>
      <Sidebar/>
      <ChatBotNavbar/>
      <ChatboxTextBox/>
      <ChatTextBtn/>

    </>
  )
}

export default ChatbotText