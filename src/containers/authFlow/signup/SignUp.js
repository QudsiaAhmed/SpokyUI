import React from 'react'
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material'
import './SignUp.css'
import GoogleImg from '../../../Images/google.png'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import LeftSide from '../../../components/LeftSide'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className='ScreenContainer'>
        <LeftSide/>
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
            <div className='inputdatasignin' style={{paddingLeft:'4rem'}}>
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
                  FirstName
                </Typography>
                <TextField
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
                  LastName
                </Typography>
                <TextField
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
            <Link to="/sentemail">
              <Button variant="contained" color="primary" className='btn-signup'>
                Create Account
              </Button>
            </Link>
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
    </>
  )
}

export default SignUp
