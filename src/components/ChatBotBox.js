import React from 'react';
import Container from '@mui/material/Container';
import Tabs from '../components/Tabs';
import Boxes from './Boxes';
import { Typography } from '@mui/material';

const ChatBotBox = () => {
  const containerStyle = {
    width: '100%',
    borderRadius: '18.03px',
    border: '1.4px solid #CECACA',
    marginTop: '2rem',
    position: 'relative',
    padding: 0,
    // For small and medium screens, adjust the margin and width
    // '@media (max-width: 960px)': {
    //   marginLeft: 0,
    //   marginRight: 0,
    //   width: '100%',
    // },
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
    <Container style={{ padding: 0, maxWidth: '100%' }} sx={containerStyle}>
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
