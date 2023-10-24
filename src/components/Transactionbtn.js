import React from 'react';
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

const Transactionbtn = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonStyle = {
    position: 'absolute',
    top: isSmallScreen ? '3rem' : '10rem', // Adjust the top margin for different screens
    right: isMediumScreen ? '1rem' : '8rem', // Adjust the right position for different screens
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: '1.5rem',
          marginBottom: '1rem',
          marginLeft: isSmallScreen ? '1rem' : '64rem', // Adjust the left margin for small screens
          backgroundColor: 'transparent',
          color: '#FF8C7D',
          border: '1px solid #FF8C7D', // Add border
          borderRadius:'33px',
          fontFamily:'Outfit',
          fontWeight:'500',
          fontSize:"13.15px",
          width:'20%',
          height:"35px",
          padding:"20px",
          '&:hover': {
            backgroundColor: 'transparent',
            fontSize: '13.15px',
            fontWeight: '500',
          },
        }}
      >
        See all credit transactions
      </Button>
    </div>
  );
};

export default Transactionbtn;
