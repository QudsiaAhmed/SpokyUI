import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Tabs from '../components/Tabs'
import SocialAccountBox from '../components/socialaccountbox'
const socialaccount = () => {
    const containerStyle = {
        maxWidth: '80%',
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
    };


   

    return (
        <Container style={{ padding: 0 }} sx={containerStyle}>
            <div style={innerBoxStyle}></div>
            <Tabs/>
         <SocialAccountBox/>
        </Container>
    );
};

export default socialaccount;
