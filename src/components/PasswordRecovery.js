import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material';
import './Sentemail.css';
import EmailImg from '../Images/Email.png';
import LeftSide from './LeftSide';

const PasswordRecovery = () => {
  return (
    <>
      <div className='emailapp'>
<LeftSide/>

    <Container maxWidth="sm" className="email-container">
      <Box className="email-box" style={{ right: '4rem' }}>
        <Typography variant="h4" component="h1" className='for-signup'>
          For Password Recovery
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginLeft:'10rem',marginTop:'.5rem' }}>
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
  )
}

export default PasswordRecovery
