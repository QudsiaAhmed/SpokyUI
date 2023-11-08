import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  marginLeft: '80%',
  marginTop: '1rem',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '20%', // Adjust margin for small screens
  },
}));

const Button1 = styled(Button)(({ theme }) => ({
  backgroundColor: '#62D2E9',
  color: '#FFFFFF',
  borderRadius: '26px',
  width: '103px',
  height: '52px',
  padding: '13px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '15px',
}));

const Button2 = styled(Button)(({ theme }) => ({
  backgroundColor: '#62D2E9',
  color: '#FFFFFF',
  border: '2px solid #62D2E9',
  borderRadius: '26px',
  padding: '10px',
  width: '211px',
  height: '52px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '15px',
}));

const ChatBtn = () => {
  return (
    <Container>
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
