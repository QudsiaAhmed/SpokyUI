import React from 'react';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import './SignIn.css';
import SignUp from '../signup/SignUp';
import LeftSide from '../../../components/LeftSide';
import GoogleImg from '../../../Images/google.png';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <>
      <div className='ScreenContainer'>
        <LeftSide />
        <Container maxWidth="sm" className="signin-container">
          <Box className="signin-box" >
            <Typography variant="h4" component="h1" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontWeight: '600', fontSize: '2.5rem' }}>
              Sign In
            </Typography>
            <Typography variant="body1" component="p" style={{ color: '#626262', fontFamily: 'Outfit' }}>
              Sign In to your account
            </Typography>
            <div  className='inputdiv'>
              <div style={{ width: '100%', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '1.3rem' }} className='email-input'>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography className ='email-input' variant="body2" style={{ color: '#333', paddingLeft: "0", fontSize: '1rem', fontWeight: 'bold' }}>
                    Email
                  </Typography>
                  <TextField
                  
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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className='paswword-input'>
                <Typography className='paswword-input' variant="body2" style={{ color: '#333', paddingLeft: "0", fontSize: '1rem', fontWeight: 'bold' }}>
                  Password
                </Typography>
                <TextField
                  sx={{ width: '80%' }}
                  variant="outlined"
                  margin="normal"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                    style: { width: '100%' },
                  }}
                />
              </div>
              <Typography  className='forgot-password' variant="body2" component="p" style={{ textAlign: 'right', marginRight: '20%', color: 'black', fontSize: '15px', marginTop: '0' }}>
                <Link to='/recoverpassword'>
                  Forgot password?
                </Link>
              </Typography>

            </div>
            <Link to="/dashboard">
              <Button variant="contained" color="primary" className='btn-signup'>
                Sign In
              </Button>
            </Link>
            <div className="dont-have-account">
              <Typography component="p">
                Don't have an account?
                <Link to='/SignUp' className='signuplink'>Signup?</Link>
              </Typography>
            </div>
            <p className='or' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',marginRight: '10%', marginTop: '1.2rem' }}>OR</p>
            <div className='gogleimgsignin' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1%', marginTop: '1rem' }}>
              <img src={GoogleImg} alt="Google" style={{ marginRight: '0' }} />
              <p className='gogglesignin' style={{ margin: '0', paddingLeft: '1rem' }}>Google</p>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default SignIn;


