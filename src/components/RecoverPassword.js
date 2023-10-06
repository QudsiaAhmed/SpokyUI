import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import './SetPassword.css';
import LeftSide from './LeftSide';
import './RecoverPassword.css'
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSend = () => {
    // Check if the email exists in local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const emailExists = storedUsers.some((user) => user.email === formData.email);

    if (emailExists) {
      // Email exists, manually update the URL and navigate to the update password page
      window.location.href = `/updatepassword?email=${formData.email}`;
    } else {
      // Email doesn't exist, show an alert
      alert('Invalid email. Please enter a valid email.');
    }
  };

  return (
    <>
      <div className='ScreenContainer'>
        <LeftSide />
        <Container maxWidth="sm" className="pwd-container">
          <Box className="pwd-box">
            <Typography variant="h4" className="setpassword" component="h1" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '2.5rem' }}>
              Recover Your Password
            </Typography>
            <div style={{ paddingLeft: "2rem" }}>
              <div className="input-group">
                <Typography variant="body2" className="label-text">
                  Email
                </Typography>
                <TextField
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email to Recover your Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  className="responsive-input"
                />
              </div>

            </div>
            <Button variant="contained" color="primary" className='btn-signup' onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default RecoverPassword;
