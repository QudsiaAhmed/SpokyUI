import React from 'react';
import { Container, Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LeftSide from './LeftSide';
import './SetPassword.css';

const SetPassword = () => {
  return (
    <div className='ScreenContainer'>
      <LeftSide />
      <Container maxWidth="sm" className="pwd-container">
        <Box className="pwd-box">
          <Typography variant="h4" className="setpassword" component="h1" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '2.5rem' }}>
            Set Password
          </Typography>
          <div style={{ paddingLeft: "2rem" }}>
            <div className="input-group">
              <Typography variant="body2" className="label-text">
                Password
              </Typography>
              <TextField
                placeholder="Enter Password"

                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                className="responsive-input"
              />
            </div>
            <div className="input-group">
              <Typography variant="body2" className="label-text">
                Repeat Password
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                type="password"
                placeholder="Enter Your Password Again"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                className="responsive-input"
              />
            </div>
          </div>
          <Button variant="contained" color="primary" className='btn-signup'>
            Update
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default SetPassword;
