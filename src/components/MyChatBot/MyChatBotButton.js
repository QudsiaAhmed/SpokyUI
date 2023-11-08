import React from 'react';
import Button from '@mui/material/Button';

const MyChatBotButton = ({ onFilterChange }) => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '2rem',
    marginBottom: '.5rem',
    boxShadow: 'none',
  };

  const leftButtonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'flex-start',
  };

  const defaultButtonStyle = {
    background: 'transparent',
    borderRadius: '2rem',
    padding: '10px',
    width: '11rem',
    border: '2px solid #62D2E9',
    color: '#393939',
  };

  const activeButtonStyle = {
    background: '#62D2E9',
    borderRadius: '2rem',
    padding: '10px',
    width: '11rem',
    border: '2px solid #62D2E9',
    color: '#fff',
  };

  const rightButtonStyle = {
    marginLeft: '27rem',
    background: '#62D2E9',
    borderRadius: '2rem',
    padding: '10px',
    width: '11rem',
    border: '2px solid #62D2E9',
    color: '#fff',
  };

  // Set the default active button to 1 (All)
  const [activeButton, setActiveButton] = React.useState(1);

  const handleButtonClick = (buttonId, buttonType) => {
    setActiveButton(buttonId);
    onFilterChange(buttonType);
  };

  return (
    <div style={containerStyle}>
      <div style={leftButtonContainerStyle}>
        <Button
          variant="contained"
          color="primary"
          style={activeButton === 1 ? activeButtonStyle : defaultButtonStyle}
          onClick={() => handleButtonClick(1, 'All')}
        >
          All Chatbots
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={activeButton === 2 ? activeButtonStyle : defaultButtonStyle}
          onClick={() => handleButtonClick(2, 'Active')}
        >
          Active Chatbots
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={activeButton === 3 ? activeButtonStyle : defaultButtonStyle}
          onClick={() => handleButtonClick(3, 'Inactive')}
        >
          Inactive Chatbots
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={activeButton === 4 ? activeButtonStyle : defaultButtonStyle}
          onClick={() => handleButtonClick(4, 'On Training')}
        >
          On Training
        </Button>
      </div>
      <div>
        <Button
          variant="contained"
          color="secondary"
          style={rightButtonStyle}
        >
          Create Chatbot
        </Button>
      </div>
    </div>
  );
};

export default MyChatBotButton;












// klkkll