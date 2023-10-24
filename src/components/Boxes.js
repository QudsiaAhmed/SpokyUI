import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const Boxes = () => {
  const [name, setName] = useState('');
  const [initialMessage, setInitialMessage] = useState('');
  const [baseSystemMessage, setBaseSystemMessage] = useState('');
  const [modelVersion, setModelVersion] = useState('');
  const [visibility, setVisibility] = useState('');

  useEffect(() => {
    // Clear state on page refresh
    const handleBeforeUnload = () => {
      clearState();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const clearState = () => {
    setName('');
    setInitialMessage('');
    setBaseSystemMessage('');
    setModelVersion('');
    setVisibility('');
  };

  return (
    <div style={{ margin: '15% 6rem 0', position: 'relative' }}>
      <Grid container spacing={6} style={{ height: '100%' }}>
        <Grid item xs={12} md={6} style={{ height: '100%' }}>
          <Typography variant="h6" sx={{
            fontSize: '16px',
            fontWeight: '500',
            fontWeight: 'bold',
            color: '#252F3F',
            textAlign: "left",
            marginLeft: "2rem",
            '@media (max-width: 600px)': {
              marginRight: '0',
            },
          }}>Name:</Typography>
          <TextField label="Enter a name" variant="outlined" style={{ margin: '1rem', width: '90%' }} />

          <Typography variant="h6" sx={{
            textAlign: "left",
            marginLeft: "2rem",
            fontSize: '16px',
            fontWeight: '500',
            fontWeight: 'bold',
            color: '#252F3F',
            '@media (max-width: 600px)': {
              marginRight: '0',
            },
          }}>Initial Message:</Typography>
          <TextField label="Enter an initial message for the chatbot" variant="outlined" style={{ margin: '1rem', width: '90%' }} />

          <Typography variant="h6" sx={{
            textAlign: "left",
            marginLeft: "2rem",
            fontSize: '16px',
            fontWeight: '500',
            fontWeight: 'bold',
            color: '#252F3F',
            '@media (max-width: 600px)': {
              marginRight: '0',
            },
          }}>Base System Message:</Typography>
          <TextField
            label="Enter the base system message for the chatbot"
            variant="outlined"
            style={{ margin: '1rem', width: '90%', flexGrow: 1 }}
            multiline={true}
            rows={8}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
            <Typography variant="h6" sx={{
              textAlign: "left",
              fontSize: '16px',
              fontWeight: '500',
              fontWeight: 'bold',
              color: '#252F3F',
              '@media (max-width: 600px)': {
                marginRight: '0',
              },
            }}>ChatGPT Model Version</Typography>
            <Select variant="outlined" style={{ width: '97%', marginBottom: '2rem' }}>
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </Select>

            <Typography variant="h6" sx={{
              textAlign: "left",
              fontSize: '16px',
              fontWeight: '500',
              fontWeight: 'bold',
              color: '#252F3F',
              '@media (max-width: 600px)': {
                marginRight: '0',
              },
            }}>Visibility</Typography>
            <Select variant="outlined" style={{ width: '97%' }}>
              <MenuItem value="Option 3">Option 3</MenuItem>
              <MenuItem value="Option 4">Option 4</MenuItem>
            </Select>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Boxes;
