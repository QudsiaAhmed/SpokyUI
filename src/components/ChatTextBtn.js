import React from 'react';
import Button from '@mui/material/Button';

const ChatBtn = () => {
  const containerStyles = {
    display: 'flex',
    gap: '10px', 
    marginLeft: '67%',
    marginTop: '1rem',
  };

  const button1Styles = {
    backgroundColor: '#62D2E9',
    color: 'white',
    borderRadius: '26px',
    width: '103px',
    height:'52px',
    boxShadow:'none',
  };

  const button2Styles = {
    backgroundColor: '#62D2E9',
    color: 'white',
    border: '2px solid #62D2E9',
    borderRadius: '26px',
    width: '211px', 
    height:'52px',
  };

  return (
    <div style={containerStyles}>
     <Button variant="contained" style={button1Styles}>
     Previous
      </Button>
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
