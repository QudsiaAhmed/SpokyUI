import React from 'react'
import DetailsNavbar from './DetailsNavbar';
import Sidebar from '../Sidebar';
import Buttons from './Buttons';
import DetailBox from '../../containers/mainFlow/DetailBox'
import DetailChatbotBox from './DetailChatbotBox';
const ChatBotDetail = () => {
    return (
        <>
            <DetailsNavbar />
            <Sidebar />
            <Buttons />
            <DetailBox />
        </>
    )
}

export default ChatBotDetail