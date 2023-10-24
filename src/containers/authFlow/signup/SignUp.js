import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import './SignUp.css';
import GoogleImg from '../../../Images/google.png';
import EmailIcon from '@mui/icons-material/Email';
import LeftSide from '../../../components/LeftSide';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      Swal.fire({
        icon: 'error',
        title: 'Please fill in all the required fields.',
        customClass: {
          confirmButton: 'custom-ok-button-class',
        },
      });
      return; // Prevent further execution of the function
    }
  
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some((user) => user.email === formData.email);
    const firstNameContainsNumbers = /\d/.test(formData.firstName);
    const lastNameContainsNumbers = /\d/.test(formData.lastName);
  
    if (userExists) {
      Swal.fire({
        icon: 'error',
        title: 'Email already exists. Please sign in or use a different email.',
        customClass: {
          confirmButton: 'custom-ok-button-class',
        },
      });
  
      // Clear the input fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } else if (firstNameContainsNumbers || lastNameContainsNumbers) {
      Swal.fire({
        icon: 'error',
        title: 'First Name and Last Name cannot contain numeric characters.',
        customClass: {
          confirmButton: 'custom-ok-button-class',
        },
      });
  
      // Clear the input fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } else {
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: '', // Initialize the password field
      };
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      console.log('Updated users in local storage:', updatedUsers); // Debug log
      window.location.href = '/setpassword?email=' + formData.email;
    }
  };
  



  return (
    <div className='ScreenContainer'>
      <LeftSide />
      <Container maxWidth="sm" className="signup-container">
        <Box className="signup-box">
          <Typography
            style={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '3rem', color: '#000000' }}
          >
            Sign Up
          </Typography>
          <Typography variant="body1" component="p" style={{ color: '#626262', fontFamily: 'Outfit', fontSize: '20px', marginTop: '0', marginBottom: '2rem' }}>
            Sign Up to your account
          </Typography>
          <div className='inputdatasignin' style={{ paddingLeft: '4rem' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant="body2"
                style={{
                  color: '#333',
                  paddingLeft: '0',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginLeft:'.1rem',
                }}
              >
                First Name
              </Typography>
              <TextField
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                sx={{ width: '80%' }}
                margin="normal"
                InputProps={{
                  style: { width: '100%' },
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant="body2"
                style={{
                  color: '#333',
                  paddingLeft: '0',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginLeft:'.1rem',

                }}
              >
                Last Name
              </Typography>
              <TextField
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                sx={{ width: '80%' }}
                margin="normal"
                InputProps={{
                  style: { width: '100%' },
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant="body2"
                style={{
                  color: '#333',
                  paddingLeft: '0',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginLeft:'.2rem'
                }}
              >
                Email
              </Typography>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{ width: '80%' }}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  style: { width: '100%' },
                }}
              />
            </div>
          </div>
          <Link to='/setpassword'></Link>
          <Button sx={{textTransform:"none",color:'#FFFFFF',fontWeight:'500',fontSize:'18px'}} variant="contained" color="primary" className='btn-signupbutton' onClick={handleSignUp}>
            Create Account
          </Button>
          <div className="dont-have-account">
            <Typography component="p">
              Have an account?
              <Link to='/signin' className='signuplink' >
                SignIn
              </Link>
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.2rem' }}>
  <hr style={{ flex: 0.4, borderTop: '1px solid #E0E0E0' }} />
  <p className='or' style={{ margin: '0', padding: '0 1rem', fontWeight: '500', color: '#000000' }}>OR</p>
  <hr style={{ flex: 0.4, borderTop: '1px solid #E0E0E0' }} />
</div>

          <div
            className='gogleimg'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '1.5rem',
              marginTop: '1.4rem',
              marginBottom:'2rem',
            }}
          >
            <img src={GoogleImg} alt="Google" style={{ marginRight: '0' }} />
            <p className='goggle' style={{ margin: '0', paddingLeft: '1rem' }}>
              Google
            </p>
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default SignUp;
