import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import facebookIcon from '../Images/image 9.png';
import linkedInIcon from '../Images/image 12.png';
import X from '../Images/image 10.png';
const Boxes = () => {
  return (
    <div style={{ margin: '0 4rem', marginTop: '12rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <div style={{ marginBottom: '2rem' }}>
            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', color: '#252F3F', marginRight:'30%' }}>
              Create Facebook Account
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={facebookIcon} alt="Facebook Icon" style={{ width: '15%', height: '15%' }} />
              <TextField label="Enter URL for Facebook account" variant="standard" style={{ width: '70%' }} />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', color: '#252F3F', marginRight:'30%' }}>
              Create LinkedIn Account
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={linkedInIcon} alt="LinkedIn Icon" style={{ marginLeft: '1rem', marginRight: '1rem', width: '10%', height: '10%' }} />
              <TextField label="Enter URL for LinkedIn account" variant="standard" style={{ width: '70%' }} />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
        <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', color: '#252F3F', marginRight:'54%' }}>
              X
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={X} alt="LinkedIn Icon" style={{ marginLeft: '1rem', marginRight: '1rem', width: '15%', height: '15%' }} />
              <TextField label="Enter URL for X account" variant="standard" style={{ width: '70%' }} />
            </div>
          </div>

        </Grid>
      </Grid>
    </div>
  );
};

export default Boxes;

