import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import facebookIcon from '../Images/image 9.png';
import linkedInIcon from '../Images/image 12.png';
import X from '../Images/image 10.png';

const Boxes = () => {
  const [facebookUrl, setFacebookUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [xUrl, setXUrl] = useState('');

  useEffect(() => {
    // Clear the state on page refresh
    window.addEventListener('beforeunload', () => {
      setFacebookUrl('');
      setLinkedinUrl('');
      setXUrl('');
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        setFacebookUrl('');
        setLinkedinUrl('');
        setXUrl('');
      });
    };
  }, []);

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
              <TextField
                label="Enter URL for Facebook account"
                variant="standard"
                style={{ width: '70%' }}
                value={facebookUrl}
                onChange={(e) => setFacebookUrl(e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', color: '#252F3F', marginRight:'30%' }}>
              Create LinkedIn Account
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={linkedInIcon} alt="LinkedIn Icon" style={{ marginLeft: '1rem', marginRight: '1rem', width: '10%', height: '10%' }} />
              <TextField
                label="Enter URL for LinkedIn account"
                variant="standard"
                style={{ width: '70%' }}
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ marginBottom: '1rem' }}>
            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 'bold', color: '#252F3F', marginRight:'54%' }}>
              X
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={X} alt="X Icon" style={{ marginLeft: '1rem', marginRight: '1rem', width: '15%', height: '15%' }} />
              <TextField
                label="Enter URL for X account"
                variant="standard"
                style={{ width: '70%' }}
                value={xUrl}
                onChange={(e) => setXUrl(e.target.value)}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Boxes;


