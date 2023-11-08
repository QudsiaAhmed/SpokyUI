import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import './SignUp.css';
import GoogleImg from '../../../Images/google.png';
import EmailIcon from '@mui/icons-material/Email';
import LeftSide from '../../../components/LeftSide';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useMediaQuery } from '@mui/material';
import CustomAlert from '../../../components/AlertComponent';

const SignUp = () => {
  const isSmallScreen = useMediaQuery('(max-width:1024px)');

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const nameRegex = /^[^0-9][a-zA-Z\s]*$/; // Regex to ensure names don't start with numbers

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear errors when the user starts typing
    if (name === 'email') {
      setEmailError('');
    }
    if (name === 'firstName') {
      setFirstNameError('');
    }
    if (name === 'lastName') {
      setLastNameError('');
    }
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'firstName' && !nameRegex.test(value)) {
      setFirstNameError('First Name cannot start with a numeric character.');
    }

    if (name === 'lastName' && !nameRegex.test(value)) {
      setLastNameError('Last Name cannot start with a numeric character.');
    }
  };

  const handleSignUp = () => {
    // Email validation regex pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!formData.firstName || !formData.lastName || !formData.email) {
      // Display an error message for required fields
      Swal.fire({
        icon: 'error',
        title: 'Please fill in all the required fields.',
        customClass: {
          confirmButton: 'custom-ok-button-class',
        },
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      // Set email error message
      setEmailError('Please enter a valid email address.');
      return;
    }

    if (!nameRegex.test(formData.firstName)) {
      // Set first name error message
      setFirstNameError('Cannot start with a numeric character.');
      return;
    }

    if (!nameRegex.test(formData.lastName)) {
      // Set last name error message
      setLastNameError(' Cannot start with a numeric character.');
      return;
    }

    // Show custom alert and set timeout for redirection
    CustomAlert(); // Display custom alert
    setTimeout(() => {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = storedUsers.some((user) => user.email === formData.email);

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
      } else {
        const newUser = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: '',
        };
        const updatedUsers = [...storedUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        console.log('Updated users in local storage:', updatedUsers);
        window.location.href = '/setpassword?email=' + formData.email;
      }
    }, 3000);
  };

  return (
    <div className='ScreenContainer'>

      {isSmallScreen ? null : <LeftSide />}

      <Container maxWidth="sm" className="signup-container">
        <Box className="signup-box">
          <Typography className='signupheading' style={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '3rem', color: '#000000' }}>
            Sign Up
          </Typography>
          <Typography className='signupp' variant="body1" component="p" style={{ color: '#626262', fontFamily: 'Outfit', fontSize: '20px', marginTop: '0', marginBottom: '2rem' }}>
            Sign Up to your account
          </Typography>
          <div className='inputdatasignin' style={{ paddingLeft: '4rem' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '1.3rem' }}>
              <Typography variant="body2" style={{ color: '#333', paddingLeft: '0', fontSize: '15px', fontWeight: 'bold', marginLeft: '.2rem' }}>
                First Name <span style={{ color: '#F51805' }}>*</span>
              </Typography>
              <TextField
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                sx={{ width: '86%' }}
                margin="normal"
                InputProps={{
                  style: { width: '100%', borderRadius: '12px' },
                }}
              />
              {firstNameError && <Typography style={{ color: 'red' }}>{firstNameError}</Typography>}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body2" style={{ color: '#333', paddingLeft: '0', fontSize: '15px', fontWeight: 'bold', marginLeft: '.2rem' }}>
                Last Name <span style={{ color: '#F51805' }}>*</span>
              </Typography>
              <TextField
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                sx={{ width: '86%' }}
                margin="normal"
                InputProps={{
                  style: { width: '100%', borderRadius: '12px' },
                }}
              />
              {lastNameError && <Typography style={{ color: 'red' }}>{lastNameError}</Typography>}
            </div>
            <div style={{ display: 'flex', flexDirection:'column', alignItems: 'flex-start' }}>
              <Typography variant="body2" style={{ color: '#333', paddingLeft: '0', fontSize: '15px', fontWeight: 'bold', marginLeft: '.4rem' }}>
                Email <span style={{ color: '#F51805' }}>*</span>
              </Typography>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                sx={{ width: '86%' }}
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                  style: { width: '100%', borderRadius: '12px' },
                }}
              />
              {emailError && <Typography style={{ color: 'red' }}>{emailError}</Typography>}
            </div>
          </div>
          <Link to='/setpassword'></Link>
          <Button sx={{ textTransform: "none", color: '#FFFFFF', fontWeight: '500', fontSize: '18px', boxShadow: '0px 0px 9px 1px #00000040' }} variant="contained" color="primary" className='btn-signupbutton' onClick={handleSignUp}>
            Create Account
          </Button>
          <div className="dont-have-account">
            <Typography component="p">
              Have an account?
              <Link to='/signin' className='signuplink'>&nbsp;
                Sign In
              </Link>
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.2rem' }}>
            <hr style={{ flex: 0.2, borderTop: '1px solid #E0E0E0' }} />
            <p className='or' style={{ margin: '0', padding: '0 1rem', fontWeight: '500', color: '#000000' }}>OR</p>
            <hr style={{ flex: 0.2, borderTop: '1px solid #E0E0E0' }} />
          </div>
          <div className='gogleimg' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1.5rem', marginTop: '1.4rem', marginBottom: '2rem' }}>
            <img src={GoogleImg} alt="Google" style={{ marginRight: '0' }} />
            <p className='goggle' style={{ margin: '0', paddingLeft: '1rem' }}>
              Google
            </p>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
