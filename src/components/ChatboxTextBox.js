import React from 'react'
import Tabs from '../components/Tabs'
import ChatbotText from './ChatbotText';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
const ChatboxTextBox = () => {
    const containerStyle = {
        Width: '100%',
        height: '732px',
        marginRight: '16.4rem',
        borderRadius: '18.03px',
        border: '1.4px solid #CECACA',
        marginTop: '2rem',
        position: 'relative',
        padding: 0,
    };

    const innerBoxStyle = {
        width: '100%',
        height: '4rem',
        borderRadius: '18.03px',
        backgroundColor: '#FF8C7D',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
    };




    return (
        <Container style={{ padding: 0 ,maxWidth: 'none'}} sx={containerStyle}>
            <div style={innerBoxStyle}>
                <Typography variant="h6" sx={{ color: '#FFFFFF', marginLeft: '3rem', fontSize: '19px', fontWeight: "500" }}>
                    Input Chatbot Details
                </Typography>
            </div>
            <Tabs />
            <ChatbotText />

        </Container>
    );
}

export default ChatboxTextBox
