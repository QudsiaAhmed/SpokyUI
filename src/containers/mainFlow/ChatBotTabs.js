import React from 'react'
import ChatBotNavbar from '../../components/ChatBotNavbar'
import ChatBotBox from '../../components/ChatBotBox'
import ChatBtn from '../../components/ChatBtn'
import Sidebar from '../../components/Sidebar'
const ChatBotTabs = () => {
  return (
    <>
<Sidebar/>
      <ChatBotNavbar/>
      <ChatBotBox/>
      <ChatBtn/>
    </>
  )
}

export default ChatBotTabs
