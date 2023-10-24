import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Buttons = () => {
  const buttonStyle = {
    background: '#62D2E9', 
    color: '#FFFFFF', 
    boxShadow:'none', 
    borderRadius:'2rem',       
    '&:hover': {
      background: '#62D2E9', 
      color: '#FFFFFF',   
      boxShadow:'none' ,     
    },
    width: '170px',        
    height: '50px',
    '& span': {
      fontSize: '16px',  
      fontFamily:'Outfit'  
    },
  };

  return (
    <Box display="flex" justifyContent="flex-start" gap={2} sx={{ marginLeft: '25.5rem', marginTop: '7rem',marginBottom:'.5rem'}}>
      <Button variant="contained" color="primary" sx={buttonStyle}>
        <span>Conversations</span>
      </Button>
      <Button variant="contained" color="primary" sx={buttonStyle}>
        <span>Edit Chatbot</span>
      </Button>
    </Box>
  );
}

export default Buttons;

