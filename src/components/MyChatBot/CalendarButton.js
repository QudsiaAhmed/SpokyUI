import React, { useState } from 'react';
import { Box, Button, SvgIcon } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 

const CalendarButton = () => {
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const buttonStyle = {
    background: '#62D2E9',
    color: '#FFFFFF',
    boxShadow: 'none',
    borderRadius: '2rem',
    textTransform: 'none',
    fontSize: '1.2rem',
    '&:hover': {
      background: '#62D2E9',
      color: '#FFFFFF',
      boxShadow: 'none',
    },
    width: '170px',
    height: '50px',
    '& .MuiSvgIcon-root': {
      marginLeft: '1rem',
    },
  };

  const toggleCalendar = () => {
    setCalendarOpen(!isCalendarOpen); 
  };

  const closeCalendar = () => {
    setCalendarOpen(false);
  };

  const calendarStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      gap={2}
      sx={{ marginLeft: '25.5rem', marginTop: '7rem', marginBottom: '.5rem' }}
    >
      <Button variant="contained" color="primary" sx={buttonStyle} onClick={toggleCalendar}>
        <span>Calendar</span>
        <SvgIcon component={CalendarTodayIcon} />
      </Button>

      {isCalendarOpen && (
        <Calendar
          onChange={closeCalendar}
          value={new Date()}
          style={calendarStyle} 
        />
      )}
    </Box>
  );
};

export default CalendarButton;

