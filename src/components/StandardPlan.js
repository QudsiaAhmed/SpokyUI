import React from 'react';
import { Box, Button, Typography, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const StandardPlan = () => {
  const boxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundImage: 'linear-gradient(90deg, #62D2E9 10.76%, #32ABC3 86.81%)', 
     color: '#fff',
    padding: '20px',
    borderRadius: '20px',
    boxShawdow:'none',
    marginTop: '3.5rem',
    [theme.breakpoints.up('sm')]: {
      width: '80%', 
      marginLeft: '10%',
    },
    [theme.breakpoints.up('md')]: {
      width: '75%', 
      marginLeft: '10%',
    },
    buttonStyle:{
      width: '30%',

    },
    [theme.breakpoints.up('lg')]: {
      width: '65.4%',
      marginLeft: '24.5rem',
    },
    buttonStyle:{
      width: '30%',

    }
  };

  const buttonStyle = {
    borderRadius: '20px',
    backgroundColor: '#fff',
    color: '#62D2E9',
    // width: '50%',
    height: '50px',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#62D2E9',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxStyle}>
        <div>
          <Typography variant="h4" fontWeight="bold" align="left">
            Standard Plan
          </Typography>
          <Typography variant="p" className="chatbots" align="left">
            Wants to level up your multiple business with more chatbots
          </Typography>
        </div>
        <Button variant="contained" color="primary" sx={buttonStyle}>
          Upgrade Plan
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default StandardPlan;
