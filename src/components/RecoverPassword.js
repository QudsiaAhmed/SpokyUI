import React from 'react'
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './SetPassword.css';
import LeftSide from './LeftSide';
import './RecoverPassword.css'
import { Link } from 'react-router-dom';
const RecoverPassword = () => {
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
            <Link to='/forrecoverypassword'>
              <Button variant="contained" color="primary" className='btn-signup'>
                Send
              </Button>
            </Link>
          </Box>
        </Container>
      </div>

    </>
  )
}

export default RecoverPassword