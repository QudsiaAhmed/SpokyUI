import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DetailChatbotBox from '../../components/MyChatBot/DetailChatbotBox';
import Swal from 'sweetalert2';
const DetailBox = () => {
  const handleButtonClick = (buttonName) => {
    let textToCopy = '';
    let alertText = '';

    switch (buttonName) {
      case 'button1':
        textToCopy = 'Copy Shareable Link Text';
        alertText = 'Shareable Link Copied to Clipboard';
        break;

      case 'button2':

        Swal.fire({
          title: 'Visit Shareable Link Text',
          text: alertText,
        });
        break;

      case 'button3':
        textToCopy = 'Iframe Code Text';
        alertText = 'Iframe Code Copied to Clipboard';
        break;
      case 'button4':

        Swal.fire({
          title: 'Embeddable Chat Bubble Code',
          text: alertText,
        });
        break;
      default:
        break;
    }


    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert(alertText);
      });
    }
  };

  const boxStyle = {
    width: '38%',
    padding: '16px',
    margin: '0 auto',
    border: '1px solid #ccc',
    textAlign: 'left',
    marginLeft: '25.5rem',
    marginTop: '2rem',
    borderRadius: '1rem',
    borderColor: '#62D2E9',
  };

  const buttonStyle = {
    margin: '0.5rem',
    borderRadius: '20px'
  };

  return (
    <>
      <DetailChatbotBox />
      <Box
        style={boxStyle}
      >
        <h1 style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '24px' }}>Share Chatbot</h1>
        <p style={{ fontFamily: 'Outfit', color: '#686868', fontWeight: '400', fontSize: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
          <Button
            variant="contained"
            color="primary"
            style={buttonStyle}
            sx={{
              backgroundColor: '#62D2E9',
              color: '#fff',
              padding: '10px',
              boxShadow: 'none',

              '&:hover': {
                backgroundColor: '#62D2E9',
                boxShadow: 'none',

              },
            }}
            onClick={() => handleButtonClick('button1')}
          >
            Copy Shareable Link
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={buttonStyle}
            onClick={() => handleButtonClick('button2')}
            sx={{
              backgroundColor: 'transparent',
              color: '#62D2E9',
              padding: '10px',
              border: '1px solid #62D2E9',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none'
              },
            }}

          >
            Visit Shareable Link
          </Button>
        </div>
      </Box>

      <Box
        style={{
          ...boxStyle,
          marginTop: '16px',
        }}
      >
        <h1 style={{ fontFamily: 'Outfit', fontWeight: 'bold', fontSize: '24px' }}>Embed Chatbot</h1>
        <p style={{ fontFamily: 'Outfit', color: '#686868', fontWeight: '400', fontSize: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
          <Button
            variant="contained"
            color="primary"
            style={buttonStyle}
            sx={{
              backgroundColor: '#62D2E9',
              color: '#fff',
              padding: '10px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#62D2E9',
                boxShadow: 'none',
              },
            }}
            onClick={() => handleButtonClick('button3')}
          >
            Embeddable Iframe Code
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={buttonStyle}
            sx={{
              backgroundColor: 'transparent',
              color: '#62D2E9',
              padding: '10px',
              border: '1px solid #62D2E9',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none'
              },
            }}

            onClick={() => handleButtonClick('button4')}
          >
            Embeddable Chat Bubble Code
          </Button>
        </div>
      </Box>
    </>
  );
};

export default DetailBox;

