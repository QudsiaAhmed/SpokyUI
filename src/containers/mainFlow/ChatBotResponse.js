import React from 'react'
import ResponseNavbar from '../../components/MyChatBot/responseNavbar'
import Sidebar from '../.../../../components/Sidebar'
import DetailChatbotBox from '../../components/MyChatBot/DetailChatbotBox'
import CalendarButton from '../../components/MyChatBot/CalendarButton'
import Heading from '../../components/MyChatBot/Heading'
import CalendarBoxes from '../../components/MyChatBot/CalendarBoxes'
const ChatBotResponse = () => {
    return (
        <>
            <ResponseNavbar />
            <Sidebar />
            <CalendarButton />
            <Heading/>
            <CalendarBoxes/>
            <DetailChatbotBox />

        </>
    )
}

export default ChatBotResponse
