import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const Boxes = () => {
  return (
    <div style={{ margin: '0 4rem', display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ marginRight: '68%', fontSize: '16px', fontWeight: '500', color: '#252F3F' }}>Name:</Typography>
          <TextField label="Enter a name" variant="outlined" style={{ margin: '1rem', width: '80%' }} />

          <Typography variant="h6" sx={{ marginRight: '57%', fontSize: '16px', fontWeight: '500', color: '#252F3F' }}>Initial Message:</Typography>
          <TextField label="Enter an initial message for the chatbot" variant="outlined" style={{ margin: '1rem', width: '80%' }} />

          <Typography variant="h6" sx={{ marginRight: '46%', fontSize: '16px', fontWeight: '500', color: '#252F3F' }}>Base System Message:</Typography>
          <TextField
            label="Enter the base system message for the chatbot"
            variant="outlined"
            style={{ margin: '1rem', width: '80%' }}
            multiline={true}
            rows={8} 
          />
        </Grid>
        <Grid item xs={6}>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
            <Typography variant="h6" sx={{ marginRight: '25rem', fontSize: '16px', fontWeight: '500', color: '#252F3F' }}>Select Option 1:</Typography>
            <Select variant="outlined" style={{ width: '90%', marginBottom: '2rem' }}>
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </Select>

            <Typography variant="h6" sx={{ marginRight: '25rem', fontSize: '16px', fontWeight: '500', color: '#252F3F' }}>Select Option 2:</Typography>
            <Select variant="outlined" style={{ width: '90%' }}>
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
