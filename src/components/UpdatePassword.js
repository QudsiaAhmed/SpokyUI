import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LeftSide from './LeftSide';
import './SetPassword.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePassword = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    repeatPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    // Retrieve the email from the URL query parameter
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');

    // Password length validation: Check if the new password is at least 8 characters long
    if (formData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    } else {
      // Reset password error message
      setPasswordError('');
    }

    // Check if the passwords match
    if (formData.newPassword === formData.repeatPassword) {
      // Passwords match, update the password for the user in local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = storedUsers.map((user) => {
        if (user.email === email) {
          // Update the password for the user with a matching email
          return {
            ...user,
            password: formData.newPassword,
          };
        }
        return user;
      });

      // Save the updated users back to local storage
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Redirect to the sign-in page or another appropriate page
      window.location.href = '/signin'; // You can change the destination as needed
    } else {
      // Passwords do not match, show an alert
      Swal.fire({
        confirmButtonColor: '#62D2E9',
        text: 'Passwords do not match. Please enter matching passwords.',
      });
    }
  };

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
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
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
                type="password"
              />
            </div>
            <div className="input-group">
              <Typography variant="body2" className="repeat-password" >
                Repeat Password
              </Typography>
              <TextField
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
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
            <Typography variant="caption" color="error">
              {passwordError}
            </Typography>
          </div>
          <Button variant="contained" color="primary" className='btn-signup' onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default UpdatePassword;
