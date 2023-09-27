import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import './ForRecoveryPassword';
import EmailImg from '../Images/Email.png';
import LeftSide from './LeftSide';
import './ForRecoveryPassword.css'
import { Link } from 'react-router-dom';

const ForRecoveryPassword = () => {
  return (
    <>
      <div className='ScreenContainer'>
        <LeftSide />

        <Container maxWidth="sm" className="email-container">
          <Link to="/SignUp">
            <Button
              className='go-back'
              sx={{
                borderRadius: '50px',
                border: '2px solid #62D2E9',
                padding: '10px 20px',
                backgroundColor: 'transparent',
                color: '#62D2E9',
                marginRight: '70%',
                marginBottom: '3rem',
                marginTop: '1rem',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              GO Back
            </Button>
          </Link>
          <Box className="email-box" >
            <Link to="/updatepassword">
              <Typography variant="h4" component="h1" className='for-passwordrecovery'>
                For UpdatePassword
              </Typography>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '.5rem' }}>
              <img src={EmailImg} alt="Email" />
            </div>

            <Typography component="p" className='sentemail' style={{ textAlign: 'center' }}>
              We have sent you an email
            </Typography>
            <Typography component="p" className='verificationemail'>
              Click on the email verification link sent to you on userinfo@gmail.com.
            </Typography>
            <Typography component="p" className='sendagainemail'>
              Didn’t receive the email yet? Send Again
            </Typography>
          </Box>
        </Container>
      </div>
    </>

  );
}

export default ForRecoveryPassword;

