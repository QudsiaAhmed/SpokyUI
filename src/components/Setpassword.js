import React from 'react'
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import './SetPassword.css';
import LeftSide from './LeftSide';
const Setpassword = () => {
  return (
    <>
    <div className='passwordapp'>
<LeftSide/>
      <Container maxWidth="sm" className="pwd-container">
        <Box className="pwd-box" style={{ right: '4rem' }}>
          <Typography variant="h4" component="h1" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontWeight: '600', fontSize: '2.5rem' }}>
            Set Password
          </Typography>
          <div style={{ paddingLeft: "4rem" }}>
            <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '1.3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="body2" style={{ color: '#333', paddingLeft: "0", fontSize: '1rem', fontWeight: 'bold' }}>
                  Email
                </Typography>
                <TextField
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                    style: { width: '28rem' },
                  }}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="body2" style={{ color: '#333', paddingLeft: "0", fontSize: '1rem', fontWeight: 'bold' }}>
                Repeat Password
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  style: { width: '28rem' },
                }}
              />
            </div>
        
          </div>
          <Button variant="contained" color="primary" className='btn-signup'>
            Update
          </Button>
        </Box>
      </Container>
      </div>

    </>
  )
}

export default Setpassword