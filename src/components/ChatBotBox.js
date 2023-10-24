import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tabs from '../components/Tabs'
import Boxes from './Boxes';
import { Typography } from '@mui/material';

const ChatBotBox = () => {
    const containerStyle = {
        maxWidth: '100%',
        height: '732px',
        marginRight: '16.4rem',
        borderRadius: '18.03px',
        border: '1.4px solid #CECACA',
        marginTop: '7rem',
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
    const typographyStyle = {
        color: '#FFFFFF',
        marginLeft: '3rem',
        fontSize: '19px',
        fontWeight: '500',
    };
    return (
        <Container style={{ padding: 0, maxWidth: 'none' }} sx={containerStyle}>
                     <div style={innerBoxStyle}>
                <Typography variant="h6" sx={typographyStyle}>
                    Input Chatbot Details
                </Typography>
            </div>

            <Tabs />
            <Boxes />
        </Container>
    );
};

export default ChatBotBox;
