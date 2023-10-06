import React from 'react';
import { Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import SmartToyIcon from "@mui/icons-material/SmartToy";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const ChatbotCreditCompo = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const containerStyle = {
    margin: '0 auto', // Center horizontally
    marginTop: isSmallScreen ? '1rem' : '2rem', // Adjust margin-top for small screens
    marginLeft: isSmallScreen ? '4rem' : (isMediumScreen ? '9rem' : '24.5rem'), // Adjust margin-left for medium screens
    maxWidth: '67.4%',
    
  };

  const contentStyle = {
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const iconTextContainer = {
    display: 'flex',
    alignItems: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
    marginBottom: '.3rem',
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={isSmallScreen ? 2 : 6} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ ...contentStyle, backgroundColor: '#FF8C7D', color: 'white' }}>
            <div style={iconTextContainer}>
              <SmartToyIcon fontSize="large" style={iconStyle} />
              <Typography variant="h5" gutterBottom>
                ChatBot Usage
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ ...contentStyle, backgroundColor: '#FF8C7D', color: 'white' }}>
            <div style={iconTextContainer}>
              <CreditCardIcon fontSize="large" style={iconStyle} />
              <Typography variant="h5" gutterBottom>
                Credit Usage
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatbotCreditCompo;
