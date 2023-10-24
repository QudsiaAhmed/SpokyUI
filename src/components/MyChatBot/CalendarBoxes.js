import React from 'react';
import { Box, Paper } from '@mui/material';

const CalendarBoxes = () => {
  const boxStyle = {
    width: '322px',
    height: '373px',
    position: 'relative',
  };
  const boxStyleTwo = {
    width: '322px',
    height: '373px',
    position: 'relative',
    marginLeft: '2rem',
  };
  const headerStyle = {
    backgroundColor: '#FF8C7D',
    color: 'white',
    position: 'absolute',
    borderRadius: '11.31px',
    top: 0,
    left: 0,
    width: '100%',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    color: '#FFFFFF',
  };

  const borderStyle = {
    border: '1px solid #FF5841',
    borderRadius: '11px',
    boxShadow: 'none',
  };

  const data = [
    { month: 'January', id: 1 },
    { month: 'February', id: 2 },
  ];

  return (
    <Box display="flex" marginLeft="25.5rem" marginTop="1rem"  >
      {data.map((item) => (
        <div key={item.id} style={{ ...boxStyle, margin: '8px'}}>
          <Paper style={{ ...boxStyle, ...borderStyle }}>
            <div style={headerStyle}>{item.month}</div>
          </Paper>
        </div>
      ))}
    </Box>
  );
};

export default CalendarBoxes;
