import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LeftSide from './LeftSide';
import { useLocation } from 'react-router-dom';

const SetPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(''); // Reset password error on input change
  };

  const handleUpdatePassword = () => {
    // Password length validation: Check if the password is at least 8 characters long
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }

    // Retrieve the existing user data from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the matching email
    const updatedUsers = existingUsers.map((user) => {
      if (user.email === email) {
        // Update only the password for the matching user
        return {
          ...user,
          password: password,
        };
      }
      return user;
    });

    // Save the updated user data back to local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    window.location.href = '/signin';
  };

  return (
    <div className='ScreenContainer'>
      <LeftSide />
      <Container maxWidth="sm" className="pwd-container">
        <Box className="pwd-box">
          <Typography variant="h4" className="setpassword" component="h1">
            Set Password
          </Typography>
          <div style={{ paddingLeft: "2rem" }}>
            <div className="input-group">
              <Typography variant="body2" className="label-text">
                Password
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
                }}
                className="responsive-input"
                type="password" // Specify the input type as "password"
                error={passwordError !== ''}
                helperText={passwordError}
              />
            </div>
          </div>
          <Button variant="contained" color="primary" className='btn-signup' onClick={handleUpdatePassword}>
            Update
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default SetPassword;
