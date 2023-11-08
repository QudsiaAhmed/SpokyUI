import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LeftSide from './LeftSide';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SetPassword.css';
import { useMediaQuery } from '@mui/material';

const SetPassword = () => {
  const isSmallScreen = useMediaQuery('(max-width:1024px)'); 

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(''); // New state for repeated password
  const [repeatPasswordError, setRepeatPasswordError] = useState(''); // New state for repeated password error

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Reset password error on input change
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
    setRepeatPasswordError(''); // Reset repeated password error on input change
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleUpdatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      setPassword(''); // Clear the password field
      return;
    }

    if (password !== repeatPassword) {
      setRepeatPasswordError('Passwords do not match');
      setRepeatPassword(''); // Clear the repeated password field
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const updatedUsers = existingUsers.map((user) => {
      if (user.email === email) {
        return {
          ...user,
          password: password,
        };
      }
      return user;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    console.log('Updated password for email:', email); // Debug log

    Swal.fire({
      icon: 'success',
      title: 'Password successfully set!',
      customClass: {
        confirmButton: 'custom-ok-button-class',
      },
    }).then(() => {
      // After the alert is closed, navigate to the desired page
      window.location.href = '/signin';
    });
  };

  return (
    <div className='ScreenContainer'>
  {isSmallScreen ? null : <LeftSide />} 
    <Container maxWidth="sm" className="pwd-container">
        <Box className="pwd-box">
          <Typography variant="h4" className="setpassword" component="h1">
            Set Password
          </Typography>
          <div style={{ paddingLeft: "2rem" }}>
            <div className="input-group">
              <Typography variant="body2" className="label-text" sx={{ color: '#000000', fontSize: '15px', fontWeight: '700' }}>
                Password
                <span style={{ color: '#F51805' }}>*</span>
              </Typography>
              <TextField
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibilityToggle}>
                        {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className="responsive-input"
                type={isPasswordVisible ? 'text' : 'password'}
                error={passwordError !== ''}
                helperText={passwordError}
              />
            </div>
            <div className="input-group" style={{ marginTop: '1rem' }}>
              <Typography variant="body2" className="repeat-password" sx={{ color: '#000000', fontSize: '15px', fontWeight: '700' }}>
                Repeat Password
                <span style={{ color: '#F51805' }}>*</span>
              </Typography>
              <TextField
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
                placeholder="Repeat Password"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePasswordVisibilityToggle}>
                        {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className="responsive-input"
                type={isPasswordVisible ? 'text' : 'password'}
                error={repeatPasswordError !== ''}
                helperText={repeatPasswordError}
              />
            </div>
          </div>
          <Button sx={{ textTransform: 'none', color: '#FFFFFF', fontWeight: '500', fontSize: '20px',boxShadow: '0px 0px 9px 1px #00000040' }} variant="contained" color="primary" className='btn-signupupdate' onClick={handleUpdatePassword}>
            Done
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default SetPassword;

