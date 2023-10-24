import React from 'react';
import Box from '@mui/material/Box';
// import SimpleChatbot from './simplechatbot';
import CustomChatBot from '../customChatbot';
import VectorOne from '../../Images/Vector 1.png';
import VectorTwo from '../../Images/Vector (2).png';

const DetailChatbotBox = () => {
  const boxStyle = {
    width: '30%', 
    position: 'absolute', 
    top: 0, 
    right: 0,
    height: '83vh',
    background: 'linear-gradient(90deg, rgba(255, 88, 65, 0.52) 0%, rgba(255, 140, 125, 0.8) 100%)',
    marginRight:'5rem',
    marginTop:'7rem',
    borderRadius:'1rem',
  };
  
  const imageContainerStyle = {
    display: 'flex',
    position: 'absolute',
    top: 10,
    right: 0,
    gap: '1.5rem',
    height: '5%',
    marginRight:'2rem'
    
  };

  const imageStyle = {
    width: '2rem',
    // height: '60%',
  };
const imageStyleone={
  
}
  const imageBackgroundStyle = {
    backgroundColor: 'white', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
  };

  return (
    <Box sx={boxStyle}>
      <CustomChatBot />
      <div style={imageContainerStyle}>
        <div style={imageBackgroundStyle}>
          <img src={VectorOne} alt="VectorOne" style={{ ...imageStyleone }} />
        </div>
        <img src={VectorTwo} alt="VectorTwo" style={{ ...imageStyle ,marginTop:".5rem"}} />
      </div>
    </Box>
  );
}

export default DetailChatbotBox;

