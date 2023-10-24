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
    borderRadius: '10px',
    boxShawdow:'none',
    marginTop: '2rem',
    [theme.breakpoints.up('sm')]: {
      width: '80%', 
      // marginLeft: '10%',
    },
    [theme.breakpoints.up('md')]: {
      width: '75%', 
      // marginLeft: '10%',
    },
    buttonStyle:{
      width: '30%',

    },
    [theme.breakpoints.up('lg')]: {
      width: '97%',
      // marginLeft: '24.5rem',
    },
    buttonStyle:{
      width: '30%',

    }
  };

  const buttonStyle = {
    borderRadius: '37px',
    backgroundColor: '#FFFFFF',
    color: '#62D2E9',
    width: '18%',
    height: '50px',
    marginRight:'2rem',
    textTransform:'none',
    color:'#62D2E9',
    fontWeight:'600',
    fontSize:"18px",
    padding:'20px',
    '&:hover': {
      backgroundColor: '#FFFFFF',
      color: '#62D2E9',
      boxShawdow:'none',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={boxStyle}>
        <div>
          <Typography variant="h4" fontWeight="bold" align="left" sx={{ color:'#FFFFFF',marginLeft:'1rem',fontWeight:'700',fontSize:'26px',marginBottom:'.4rem'}}>
            Standard Plan
          </Typography>
          <Typography variant="p" className="chatbots" align="left" sx={{ color:'#FFFFFF',marginLeft:'1rem',fontWeight:'400',fontSize:'18px'}}>
            wants to level up your multiple business with more chatbots
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
