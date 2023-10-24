import React from 'react'
import CustomizeNavbar from '../../components/MyChatBot/CustomizeNavbar'
import Sidebar from '../.../../../components/Sidebar'
import DetailChatbotBox from '../../components/MyChatBot/DetailChatbotBox'
import Customize from '../../components/MyChatBot/Customize'
const CustomizeChatbot = () => {
    return (
        <>
            <CustomizeNavbar />
            <Sidebar/>
            
            <Customize/>
            <DetailChatbotBox/>
        </>
    )
}

export default CustomizeChatbot
