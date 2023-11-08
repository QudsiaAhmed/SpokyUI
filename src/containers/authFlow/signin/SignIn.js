import React, { useState, useEffect } from 'react';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './SignIn.css';
import LeftSide from '../../../components/LeftSide';
import GoogleImg from '../../../Images/google.png';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Dashboard from '../../mainFlow/Dashboard';
import { makeStyles } from '@mui/material/styles'; // Updated import
import List from '@mui/material/List'; // Updated import
import Divider from '@mui/material/Divider'; // Updated import

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);



  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSignIn = () => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email);
    const isPasswordValid = formData.password.length >= 8;
  
    let errorMessage = '';
  
    if (!isEmailValid && !isPasswordValid) {
      errorMessage = 'Email and Password are invalid';
    } else if (!isEmailValid) {
      errorMessage = 'Email is invalid';
    } else if (!isPasswordValid) {
      errorMessage = 'Password is too short';
    }
  
    if (errorMessage) {
      // Show an alert with the error message
      Swal.fire({
        icon: 'error',
        title: errorMessage,
        customClass: {
          confirmButton: 'custom-ok-button-class',
        },
      }).then(() => {
        // Clear the input fields after the alert is closed
        setFormData({
          email: '',
          password: '',
        });
      });
    } else {
      // Check if the user's email and password exist in local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = storedUsers.find(
        (storedUser) => storedUser.email === formData.email && storedUser.password === formData.password
      );
  
      if (user) {
        // Email and password match, set isAuthenticated to true
        setIsAuthenticated(true);
      } else {
        // Something is incorrect, show an alert and clear the input fields
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials!...',
          customClass: {
            confirmButton: 'custom-ok-button-class',
          },
        }).then(() => {
          // Clear the input fields after the alert is closed
          setFormData({
            email: '',
            password: '',
          });
        });
      }
    }
  };
  
  
  

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  const [letsBeginClicked, setLetsBeginClicked] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  if (isAuthenticated) {
    // If the user is authenticated, render the Dashboard component
    return <Dashboard />;
  }

  return (
    <>
      <div className='ScreenContainer'>
        {(windowWidth >= 1024 ||(!letsBeginClicked )) && <LeftSide />}
        {windowWidth >= 1024 || (  letsBeginClicked) ? (
          <Container maxWidth="sm" className="signin-container">
            <Box className="signin-box">
              <Typography className='signheading' variant="h4" component="h1" style={{ fontFamily: 'Outfit', fontWeight: '900', fontSize: '3rem', color: '#000000' }}>
                Sign In
              </Typography>
              <Typography variant="body1" component="p" style={{ color: '#626262', fontFamily: 'Outfit', fontSize: '20px' }}>
                Sign In to your account
              </Typography>
              <div className='inputdiv'>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '1.3rem' }} className='email-input'>
                  <Typography className='email-input' variant="body2" style={{ color: '#333', paddingLeft: "4px", fontSize: '15px', fontWeight: 'bold' }}>
                    Email
                    <span style={{ color: '#F51805' }}>*</span>
                  </Typography>
                  <TextField
                  className='textfeildemail'
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    sx={{ width: '86%', marginTop: '8px' }}
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
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className='password-input'>
                  <Typography className='password-input' variant="body2" style={{ color: '#333', paddingLeft: "4px", fontSize: '15px', fontWeight: 'bold' }}>
                    Password
                    <span style={{ color: '#F51805' }}>*</span>
                  </Typography>
                  <TextField
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    sx={{ width: '86%', marginTop: '8px' }}
                    variant="outlined"
                    margin="normal"
                    type={isPasswordVisible ? 'text' : 'password'}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handlePasswordVisibilityToggle} edge="end">
                            {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      style: { width: '100%', borderRadius: '12px' },
                    }}
                  />
                </div>

                <Typography className='forgot-password' variant="body2" component="p" style={{ textAlign: 'right', marginRight: '15%', color: '#00000080', fontSize: '15px', marginTop: '3px', fontWeight: '500' }}>
                  <Link to='/recoverpassword'>
                    Forgot password?
                  </Link>
                </Typography>
              </div>
              <Button sx={{ textTransform: 'none', color: '#FFFFFF', fontSize: '18px' ,boxShadow: '0px 0px 9px 1px #00000040'}} className='btn-signIn' onClick={handleSignIn} style={{ marginTop: '1rem' }}>
                Sign In
              </Button>
              <div className="dont-have-accountin">
                <Typography component="p" >
                  Don't have an account? 
                  <Link to='/SignUp' className='signuplink'>&nbsp;Sign Up</Link>
                </Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.2rem' }}>
              <hr style={{ flex: 0.2, borderTop: '1px solid #E0E0E0' }} />
                <p className='or' style={{ margin: '0', padding: '0 ', fontWeight: '500', color: '#000000' }}>OR</p>
                <hr style={{ flex: 0.2, borderTop: '1px solid #E0E0E0' }} />
              </div>

              <div className='gogleimgsignin' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '6%', marginTop: '1rem', marginBottom: '2rem' }}>
                <img src={GoogleImg} alt="Google" style={{ marginRight: '0' }} />
                <p className='gogglesignin' style={{ margin: '0', paddingLeft: '1rem', fontWeight: '500', color: '#000000' }}>Google</p>
              </div>
            </Box>

          </Container>
        ) : (
          <Button
            className='lets-begin-button'
            style={{
              fontFamily:'Outfit',
              fontWeight:'600',
              fontSize:'1rem',
              width: '170px',
              height: '50px',
              border: '2px solid #62D2E9',
              backgroundColor: '#62D2E9',
              borderRadius: '37px',
              color: '#FFFFFF',
              marginTop: '1rem',
              marginBottom: '1rem'
            }}
            onClick={() => {
              setLetsBeginClicked(true);
            }}
          >
            Let's Begin
          </Button>
        )}
      </div>
    </>
  );
}

export default SignIn;
