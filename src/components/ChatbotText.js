import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ChatbotText = () => {
  const [text, setText] = useState('');

  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    margin: '0 10%',
    marginTop: '12%',
  };

  useEffect(() => {
    // Clear the text state on page refresh
    window.addEventListener('beforeunload', () => {
      setText('');
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        setText('');
      });
    };
  }, []);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };

  return (
    <Box style={boxStyles}>
      <Typography
        variant="h6"
        gutterBottom
        style={{
          marginRight: '95%',
          fontSize: '1rem',
          fontWeight: '500',
          color: '#252F3F',
        }}
      >
        Text
      </Typography>
      <TextField
        label="Input Text Data"
        variant="outlined"
        fullWidth
        multiline
        rows={20}
        value={text}
        onChange={handleTextChange}
      />
      {/* <style>
        {`
          @media (max-width: 600px) {
            .box-styles {
              margin-top: 20%;
            }
          }
        `}
      </style> */}
    </Box>
  );
};

export default ChatbotText;
