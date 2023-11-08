import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import Icon from '../../Images/image 1 .png';
import { SketchPicker } from 'react-color';
import { useMediaQuery } from '@mui/material';
import { useAtom } from 'jotai';
import { userChanges } from '../../utils/jotai'

const Item = styled(Grid)(({ theme }) => ({
  height: '100px',
  border: '1px solid #ccc',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
}));

const Customize = () => {
  const [change, setChange] = useAtom(userChanges);

  console.log(change, 'change')
  
  const [fontSize, setFontSize] = useState('15');



  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fontColor, setFontColor] = useState('#000000');
  const [chatBubbleColor, setChatBubbleColor] = useState('#B5AFAF');
  const [sendMsgbutton, setMsgButton] = useState('#FF5841');
  const [headergradient, setheadergradient] = useState('#C53678');
  const [headertwogradient, setheadertwogradient] = useState('#C53678');

  
  const [showBgColorPicker, setShowBgColorPicker] = useState(false);
  const [showFontColorPicker, setShowFontColorPicker] = useState(false);
  const [showChatBubbleColorPicker, setShowChatBubbleColorPicker] = useState(false);
  const [showMessagebuttonColorPicker, setShowMessagegbuttonColorPicker] = useState(false);
  const [showheadergradientColorPicker, setShowheadergradientColorPicker] = useState(false);
  const [showheadertwogradientColorPicker, setShowheadertwogradientColorPicker] = useState(false);

  const [buttonSelected, setButtonSelected] = useState(1);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const isLargeScreen = useMediaQuery('(min-width:1280px)');


  const boxStyle = {
    // width: '100%',
    padding: '16px',
    // margin: '0 auto',
    border: '1px solid #ccc',
    textAlign: 'left',
    borderRadius: '1rem',
    borderColor: '#62D2E9',
    maxWidth:'none',
    // backgroundColor:'red'
  };

  const smallScreenStyles = {
    width: '100%', // Adjust for small screens
    marginTop: '3rem',
    height: '100%',
    marginLeft:'0',
  };

  const mediumScreenStyles = {
    width: '90%', // Adjust for medium screens
    marginTop: '5rem',
    height: '100%',
  };

  const largeScreenStyles = {
    width: '54%', // Adjust for large screens
    // marginLeft: '25.5rem',
    marginTop: '7rem',
    height: '80vh', // Adjust for extra large screens

  };

  const extraLargeScreenStyles = {
    height: '80vh', // Adjust for extra large screens
  };


  const headingStyle = {
    fontSize: '24px',
    fontWeight: 500,
    textAlign: 'left',
    color: '#000000',
    marginLeft: '1rem',
  };

  const headingStyleField = {
    fontSize: '18px',
    fontWeight: 400,
    textAlign: 'left',
    marginBottom: '1rem',
    color: '#252F3F',
  };

  const headingStyleFeild = {
    // fontFamily: 'Outfit',
    fontSize: '18px',
    fontWeight: 400,
    textAlign: 'left',
    color: '#000000',
    marginBottom: '1rem',
    color: '#252F3F',
  };

  const inputFieldStyle = {
    display: 'block',
  };
  const BoxGrid = {
    marginTop: "4rem",
    marginLeft: '1.3rem',
    marginRight: '1rem',
  }

  const buttonStyle = {
    background: 'transparent',
    borderRadius: '4px',
    color: ' #00000080',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const selectedButtonStyle = {
    background: '#62D2E9',
    color: '#fff',
    padding: '1rem',
    borderRadius: '400px',
    width: "7rem",
    // height:'34px',
  };

  return (
    <>
      <Box sx={{ ...boxStyle, ...(isLargeScreen && largeScreenStyles), ...(isMediumScreen && mediumScreenStyles), ...(isSmallScreen && smallScreenStyles) }}>
        <Typography variant="h2" style={headingStyle}>
          Customize your chatbot
        </Typography>

        <div style={{ display: 'flex', marginTop: '3rem', marginLeft: '1.3rem' }}>
        <div style={{ marginRight: '2rem' }}>
        <Typography variant="h3" style={headingStyleField}>
          Font Size
        </Typography>
        <TextField
          label="Font size for the chat text in pixels."
          variant="outlined"
          style={{ display: 'block' }}
          value={change?.fontSize} // Set the value of the TextField to the state variable
          onChange={(event) => {
            const inputText = event.target.value;
            // Use a regular expression to check if the input is a valid number
            if (/^\d*$/.test(inputText)) {

              setChange({...change, fontSize:event.target.value });

              console.log('Font Size entered:', inputText); 
            }
          }}
        />
      </div>


          <div style={{ flex: 1 }}>
            <Typography variant="h3" style={headingStyleField}>
              Font Style
            </Typography>
            <TextField label="Font family for the chat text." variant="outlined" style={{ display: 'block' }} />
          </div>
        </div>

        <Box
          sx={{
            marginTop: '4rem',
            marginLeft: { sm: '0', md: '1.3rem' },
            marginRight: { sm: '0', md: '1rem' },
            marginLeft: { sm: '0', md: '.2rem' },
            marginRight: { xs: '0', md: '.2rem' },

          }}
        >
          <Grid container columns={12} >
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} >
              <Item sx={{ borderRadius: '.5rem', height: '150px', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontSize: '16px', color: '#252F3F', fontWeight: '500', marginBottom: '.2rem' }}>
                  Chatbot Icon
                </Typography>
                <img src={Icon} alt="Icon" style={{ width: '60px', height: '60px' }} />
                <Typography sx={{ fontSize: '15px', color: '#00000080', fontWeight: '400', marginTop: '.2rem' }}>
                  change icon
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Item
                sx={{ borderRadius: '.5rem', height: '150px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => setShowBgColorPicker(!showBgColorPicker)}
              >
                <Typography style={{ fontSize: '16px', color: '#252F3F', fontWeight: '500', marginBottom: '1rem' }}>
                  Background Color
                </Typography>
                <div
                  style={{
                    alignItems: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid black',
                    backgroundColor: change.backgroundcolor,

                  }}
                >
                  {showBgColorPicker && (
                    <div style={{ position: 'absolute', zIndex: 2 }}>
                      <SketchPicker color={bgColor} onChange={(color) => setChange({ ...change, backgroundcolor: color.hex })} />
                    </div>
                  )}
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Item
                sx={{ borderRadius: '.5rem', height: '150px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => setShowFontColorPicker(!showFontColorPicker)}
              >
                <Typography style={{ fontSize: '16px', color: '#252F3F', fontWeight: '500', marginBottom: '1rem' }}>
                  Font Color
                </Typography>
                <div
                  style={{
                    alignItems: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid black',
                    backgroundColor: change.fontcolor,
                  }}
                >
                  {showFontColorPicker && (
                    <div style={{ position: 'absolute', zIndex: 2 }}>
                      <SketchPicker color={fontColor} onChange={(color) => setChange({ ...change, fontcolor: color.hex })} />
                    </div>
                  )}
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <Item
                sx={{ borderRadius: '.5rem', height: '150px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                onClick={() => setShowChatBubbleColorPicker(!showChatBubbleColorPicker)}
              >
                <Typography style={{ fontSize: '16px', color: '#252F3F', fontWeight: '500', marginBottom: '1rem' }}>
                  Chat bubble color
                </Typography>
                <div
                  style={{
                    alignItems: 'center',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '2px solid #B5AFAF',
                    backgroundColor: change.chatbubblecolor,
                  }}
                >
                  {showChatBubbleColorPicker && (
                    <div style={{ position: 'absolute', zIndex: 2 }}>
                      <SketchPicker color={chatBubbleColor} onChange={(color) => setChange({ ...change, chatbubblecolor: color.hex })} />
                    </div>
                  )}
                </div>
              </Item>
            </Grid>

          </Grid>
        </Box>

        <Grid container columns={12} sx={{ marginTop: '1.7rem' }}>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
            <Item sx={{ borderRadius: '.5rem', height: '150px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              onClick={() => setShowMessagegbuttonColorPicker(!showMessagebuttonColorPicker)}
            >
              <Typography style={{ fontSize: '16px', color: '#252F3F', fontWeight: '500', marginBottom: '1rem' }}
              >
                'Send Message' Button Color
              </Typography>

              <div
                style={{
                  alignItems: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '2px solid #FF5841',
                  backgroundColor: change.sendmessagebtn,
                }}
              >
                {showMessagebuttonColorPicker && (
                  <div style={{ position: 'absolute', zIndex: 2 }}>
                    <SketchPicker color={sendMsgbutton} onChange={(color) => setChange({ ...change, sendmessagebtn: color.hex })} />

                  </div>
                )}
              </div>
            </Item>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
            <Item sx={{ borderRadius: '.5rem', height: '150px', display: 'flex', flexDirection: 'column' }}
              onClick={() => setShowheadergradientColorPicker(!showheadergradientColorPicker)}
            >
              <Typography style={{ fontSize: '16px', color: '#252F3F', fontWeight: '500', marginBottom: '1rem' }}>
                Header Gradient Color 1
              </Typography>
              <div
                style={{
                  alignItems: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '2px solid #C53678',
                  backgroundColor: change.headergradient,
                }}
              >
                {showheadergradientColorPicker && (
                  <div style={{ position: 'absolute', zIndex: 2 }}>
                    <SketchPicker color={headergradient} onChange={(color) => setChange({ ...change, headergradient: color.hex })} />
                  </div>
                )}
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
            <Item sx={{ borderRadius: '.5rem', height: '150px', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
              onClick={() => setShowheadertwogradientColorPicker(!showheadertwogradientColorPicker)}
            >
              <Typography style={{ fontSize: '16px', color: '#252F3F', fontWeight: '500', marginBottom: '1rem' }}>
                Header Gradient Color 2
              </Typography>
              <div
                style={{
                  alignItems: 'center',
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  border: '2px solid #FF5841',
                  backgroundColor: change.headertwogradieent,
                }}
              >
                {showheadertwogradientColorPicker && (
                  <div style={{ position: 'absolute', zIndex: 2 }}>
                    <SketchPicker color={headertwogradient} onChange={(color) => setChange({ ...change, headertwogradieent: color.hex })} />
                  </div>
                )}
              </div>
            </Item>
          </Grid>
        </Grid>

        <div style={{ display: 'flex', marginTop: '4rem', marginLeft: '1.5rem' }}>
          <div>
            <Typography variant="h3" style={headingStyleFeild}>
              Response Typing Speed
            </Typography>
            <div style={{ display: 'flex' }}>
              <button
                style={{
                  ...buttonStyle,
                  ...(buttonSelected === 1 ? selectedButtonStyle : null),
                  marginRight: '1rem',
                }}
                onClick={() => setButtonSelected(1)}
              >
                Fast
              </button>
              <button
                style={{
                  ...buttonStyle,
                  ...(buttonSelected === 2 ? selectedButtonStyle : null),
                  marginRight: '1rem',
                }}
                onClick={() => setButtonSelected(2)}
              >
                Medium
              </button>
              <button
                style={{
                  ...buttonStyle,
                  ...(buttonSelected === 3 ? selectedButtonStyle : null),
                }}
                onClick={() => setButtonSelected(3)}
              >
                Slow
              </button>
            </div>
          </div>
          <div style={{ marginLeft: '6rem' }}>
            <Typography variant="h3" style={headingStyleFeild}>
              Tagline
            </Typography>
            <TextField
              label="Enter any tagline"
              variant="outlined"
              style={inputFieldStyle}
            />
          </div>
          {/* <div>
          <Button sx={{
          marginTop:'6rem',backgroundColor: '#62D2E9', color: '#fff', height: '52px', width: '115px', borderRadius: '26px', '&:hover': {
            backgroundColor: '#62D2E9'
          },
        }}>
          Save
        </Button>

          </div> */}
        </div>

      </Box>
    </>
  );
};

export default Customize;
