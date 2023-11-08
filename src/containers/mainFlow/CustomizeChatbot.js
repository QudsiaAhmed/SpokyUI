import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import CustomizeNavbar from '../../components/MyChatBot/CustomizeNavbar'
import Sidebar from '../.../../../components/Sidebar'
import DetailChatbotBox from '../../components/MyChatBot/DetailChatbotBox'
import Customize from '../../components/MyChatBot/Customize'
const CustomizeChatbot = () => {
    const [collapsed, setCollapsed] = useState(window.innerWidth <= 800);

    return (
        <>
            <CustomizeNavbar />
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <Box style={{ height: '100%', marginLeft: collapsed ? '130px' : '25rem', width: collapsed ? 'calc(100% - 130px)' : 'calc(100% - 18rem)' }}>
                <Container style={{ padding: 0, maxWidth: '1400px',marginLeft:'0' }} sx={{ marginTop: '6rem' }}>
                    <Customize />
                    <DetailChatbotBox />
                </Container>
            </Box>

        </>
    )
}

export default CustomizeChatbot
