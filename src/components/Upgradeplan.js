import React from 'react';
import { Box, Button, Typography, ThemeProvider, createTheme } from '@mui/material';
import { Upgrade } from '@mui/icons-material';

const theme = createTheme();

const UpgradePlan = () => {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'flex-start', 
    backgroundColor: '#32ABC3',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '5rem',
    width: '85%',
    marginLeft: '11rem', 
  };

  const buttonStyle = {
    borderRadius: '20px',
    backgroundColor: '#fff',
    color: '#62D2E9',
    width: '242px',
    height: '50px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#62D2E9',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box style={boxStyle}>
        <div>
          <Typography variant="h4" fontSize={'25px'} align="left"> 
          Wants to level up your multiple business with more <br/>chatbots          </Typography>
        </div>
        <Button variant="contained" color="primary" sx={buttonStyle}>
          Upgrade Plan
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default UpgradePlan;
