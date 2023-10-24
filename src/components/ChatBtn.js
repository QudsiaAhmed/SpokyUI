import React from 'react';
import Button from '@mui/material/Button';

const ChatBtn = () => {
  const containerStyles = {
    display: 'flex',
    gap: '10px', 
    marginLeft: '80%',
    marginTop: '1rem',
  };

  const button1Styles = {
    backgroundColor: '#62D2E9',
    color: '#FFFFFF',
    borderRadius: '26px',
    width: '103px',
    height:'52px',
    padding: '13px',
    boxShadow:'none',
    textTransform:"none",
    fontSize:'15px',

  };

  const button2Styles = {
    backgroundColor: '#62D2E9',
    color: '#FFFFFF',
    border: '2px solid #62D2E9',
    borderRadius: '26px',
    padding: '10px',
    width: '211px', 
    height:"52px",
    boxShadow:'none',
    textTransform:"none",
    fontSize:'15px',
  };

  return (
    <div style={containerStyles}>
      <Button variant="contained" style={button1Styles}>
        Next
      </Button>
      <Button variant="outlined" style={button2Styles}>
        Update Chatbot
      </Button>
    </div>
  );
};

export default ChatBtn;
