import React from 'react';
import Button from '@mui/material/Button';

const ChatBtn = () => {
  const containerStyles = {
    display: 'flex',
    gap: '10px', 
    marginLeft: '58%',
    marginTop: '1rem',
  };

  const button1Styles = {
    backgroundColor: '#62D2E9',
    color: 'white',
    borderRadius: '20px',
    width: '130px',
    padding: '13px',
  };

  const button2Styles = {
    backgroundColor: '#62D2E9',
    color: 'white',
    border: '2px solid #62D2E9',
    borderRadius: '20px',
    padding: '10px',
    width: '30%', 
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
