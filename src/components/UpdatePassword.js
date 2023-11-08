import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LeftSide from './LeftSide';
import './SetPassword.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useMediaQuery } from '@mui/material';

const UpdatePassword = () => {
  const isSmallScreen = useMediaQuery('(max-width:1024px)'); 

  const [formData, setFormData] = useState({
    newPassword: '',
    repeatPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

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
  {isSmallScreen ? null : <LeftSide />} 
      <Container maxWidth="sm" className="pwd-container">
        <Box className="pwd-box">
          <Typography variant="h4" className="updatepassword" component="h1" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '40px', marginBottom: '2rem' }}>
            Update New Password

          </Typography>
          <div style={{ paddingLeft: "2rem" }}>
            <div className="input-group">
              <Typography variant="body2" className="label-text" sx={{ color: '#000000', fontSize: '15px', fontWeight: '700' }}>
                New Password
                <span style={{ color: '#F51805' }}>*</span>

              </Typography>
              <TextField
                name="newPassword"
                value={formData.newPassword}
                onChange={handleInputChange}
                margin="normal"
                placeholder="Enter Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className="responsive-input"
                type={showNewPassword ? 'text' : 'password'}
                sx={{ marginBottom: '1.7rem' }}
              />
            </div>
            <div className="input-group">
              <Typography variant="body2" className="repeat-password" sx={{ color: '#000000', fontSize: '15px', fontWeight: '700' }}>
                Repeat Password
                <span style={{ color: '#F51805' }}>*</span>

              </Typography>
              <TextField
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                placeholder="Repeat password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                      >
                        {showRepeatPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className="responsive-input"
                type={showRepeatPassword ? 'text' : 'password'}
              />
            </div>
            <Typography variant="caption" color="error">
              {passwordError}
            </Typography>
          </div>
          <Button sx={{textTransform:"none",color:'#FFFFFF',fontSize:'20px',fontWeight:'500',boxShadow:'0px 0px 9px 1px #00000040'}} variant="contained" color="primary" className='btn-updatepaswword' onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default UpdatePassword;
