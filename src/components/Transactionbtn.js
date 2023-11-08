import React from 'react';
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@mui/material';

const Transactionbtn = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonStyle = {
    position: 'absolute',
    top: isSmallScreen ? '3rem' : (isMediumScreen ? '6rem' : '10rem'),
    right: isMediumScreen ? '1rem' : '8rem',
  };

  const buttonWidth = isSmallScreen ? '80%' : (isMediumScreen ? '50%' : '20%');
  const buttonMarginLeft = isSmallScreen ? '1rem' : (isMediumScreen ? '32rem' : '80%');
  const buttonFontSize = isSmallScreen ? '10px' : (isMediumScreen ? '12px' : '13.15px');

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: '1.5rem',
          marginBottom: '1rem',
          marginLeft: buttonMarginLeft,
          backgroundColor: 'transparent',
          color: '#FF8C7D',
          border: '1px solid #FF8C7D',
          borderRadius: '33px',
          fontFamily: 'Outfit',
          fontWeight: '500',
          fontSize: buttonFontSize,
          width: buttonWidth,
          height: "35px",
          padding: "20px",
          '&:hover': {
            backgroundColor: 'transparent',
            fontSize: buttonFontSize,
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
