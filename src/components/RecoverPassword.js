import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, IconButton, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import './SetPassword.css';
import LeftSide from './LeftSide';
import './RecoverPassword.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useMediaQuery } from '@mui/material';

const RecoverPassword = () => {
  const isSmallScreen = useMediaQuery('(max-width:1024px)'); 

  const [formData, setFormData] = useState({
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSend = () => {
    if (!formData.email) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter your email before sending a recovery request.',
        customClass: {
          confirmButton: 'custom-ok-button-class',
        },
      });
      setFormData({ email: '' }); // Clear the input field
    } else {
      // Check if the email exists in local storage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const emailExists = storedUsers.some((user) => user.email === formData.email);
  
      if (emailExists) {
        // Email exists, manually update the URL and navigate to the update password page
        window.location.href = `/updatepassword?email=${formData.email}`;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid email. Please enter a valid email.',
          customClass: {
            confirmButton: 'custom-ok-button-class',
          },
        });
        setFormData({ email: '' }); // Clear the input field
      }
    }
  };
  
  

  return (
    <>
      <div className='ScreenContainer'>
      {isSmallScreen ? null : <LeftSide />} 
        <Container maxWidth="sm" className="pwd-container">
          <Box className="pwd-box">
            <Typography variant="h4" className="setpassword" component="h1" style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '42px',color:'#4F4F4F' }}>
              Recover Your Password
            </Typography>
            <div style={{ paddingLeft: "2.5rem",marginTop:'4.5rem' }}>
              <div className="input-group" >
                <Typography variant="body2" className="label-text" sx={{color:'#000000',fontSize:'17px',fontWeight:'600',fontFamily:'Outfit',}}>
                  Email
                  <span style={{ color: '#F51805' }}>*</span>
                </Typography>
                <TextField
                sx={{marginTop:'5px'}}
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
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
            <Button sx={{textTransform:'none',color:'#FFFFFF',fontSize:'20px',fontWeight:'500',boxShadow: '0px 0px 9px 1px #00000040'}} variant="contained" color="primary" className='btn-rcoverupddate' onClick={handleSend} >
              Send
            </Button>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default RecoverPassword;
