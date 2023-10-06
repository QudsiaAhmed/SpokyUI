import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ChatbotText = () => {
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    width: '80%',
    height: '10%',
    margin: '0 10%',
    marginTop: '12%',
  };

  return (
    <Box style={boxStyles}>
      <Typography variant="h6" gutterBottom style={{marginRight:'95%',fontSize:"1.2rem",fontWeight:"500",fontFamily:'Outfit',color:'#252F3F'}}>
        Text
      </Typography>
      <TextField
        label="Your text here"
        variant="outlined"
        fullWidth
        multiline
        rows={20}
      />
    </Box>
  );
}

export default ChatbotText;
