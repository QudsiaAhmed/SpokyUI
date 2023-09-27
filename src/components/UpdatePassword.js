import React from 'react';
import { Container, Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LeftSide from './LeftSide';
import './SetPassword.css';
import { Update } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const UpdatePassword = () => {
  return (
    <div className='ScreenContainer'>
      <LeftSide />
      <Container maxWidth="sm" className="pwd-container">
        <Box className="pwd-box">
          <Typography variant="h4" className="updatepassword" component="h1" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '2rem' }}>
            Update New Password
          </Typography>
          <div style={{ paddingLeft: "2rem" }}>
            <div className="input-group">
              <Typography variant="body2" className="label-text">
                Enter New Password
              </Typography>
              <TextField
                margin="normal"
                placeholder="Enter New Password" 
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
              <Typography variant="body2" className="repeat-password" >
                Repeat Password
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                type="password"
                placeholder="Enter Your New Password Again For Confirmation" 
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
          <Link to="/signin">
            <Button variant="contained" color="primary" className='btn-signup'>
              Update
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
}

export default UpdatePassword;
