import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  marginTop: '1rem',
  marginLeft: '67%',
  [theme.breakpoints.down('md')]: {
    marginLeft: '14%', // Adjust margin for small screens
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: '10%', // Adjust margin for small screens
  },
}));

const Button1 = styled(Button)(({ theme }) => ({
  backgroundColor: '#62D2E9',
  color: 'white',
  borderRadius: '26px',
  width: '103px',
  height: '52px',
  boxShadow: 'none',
}));

const Button2 = styled(Button)(({ theme }) => ({
  backgroundColor: '#62D2E9',
  color: 'white',
  border: '2px solid #62D2E9',
  borderRadius: '26px',
  width: '211px',
  height: '52px',
}));

const ChatBtn = () => {
  return (
    <Container>
      <Button1 variant="contained">
        Previous
      </Button1>
      <Button1 variant="contained">
        Next
      </Button1>
      <Button2 variant="outlined">
        Update Chatbot
      </Button2>
    </Container>
  );
};

export default ChatBtn;
