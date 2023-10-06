import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import './SignUp.css';
import GoogleImg from '../../../Images/google.png';
import EmailIcon from '@mui/icons-material/Email';
import LeftSide from '../../../components/LeftSide';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load existing users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSignUp = () => {
    // Load existing users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the email already exists among existing users
    const userExists = storedUsers.some((user) => user.email === formData.email);
    
    // Check if firstName and lastName contain numeric characters
    const firstNameContainsNumbers = /\d/.test(formData.firstName);
    const lastNameContainsNumbers = /\d/.test(formData.lastName);
    
    if (userExists) {
      alert('Email already exists. Please sign in or use a different email.');
      // Clear the input fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } else if (firstNameContainsNumbers || lastNameContainsNumbers) {
      alert('First Name and Last Name cannot contain numeric characters.');
      // Clear the input fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } else {
      // Add the new user to the list
      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };
      
      const updatedUsers = [...storedUsers, newUser];
      
      // Update the local storage with the updated list of users
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      // Redirect to set password page with email as a query parameter
      window.location.href = `/setpassword?email=${formData.email}`;
    }
  };
  
  
  

  return (
    <div className='ScreenContainer'>
      <LeftSide />
      <Container maxWidth="sm" className="signup-container">
        <Box className="signup-box">
          <Typography
            variant="h4"
            component="h1"
            style={{
              fontFamily: 'Outfit',
              fontWeight: 'bold',
              fontSize: '2.5rem',
            }}
          >
            Sign Up
          </Typography>
          <Typography variant="body1" component="p">
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
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
                  fontSize: '1rem',
                  fontWeight: 'bold',
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
          <Button variant="contained" color="primary" className='btn-signup' onClick={handleSignUp}>
            Create Account
          </Button>
          <div className="dont-have-account">
            <Typography component="p">
              Have an account?
              <Link to='/signin' className='signuplink'>
                SignIn?
              </Link>
            </Typography>
          </div>
          <p
            className='or'
            style={{ marginLeft: '10rem', marginTop: '1.2rem' }}
          >
            OR
          </p>
          <div
            className='gogleimg'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '4rem',
              marginTop: '1rem',
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
