import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from 'react-router-dom';

const LabTabs = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      centered
      style={{
        position: 'absolute',
        top: '4rem',
        left: 0,
        right: 0,
      }}
      TabIndicatorProps={{
        style: {
          backgroundColor: 'transparent',
          height: '3px',
        },
      }}
    >
      {/* <Link to="/ChatBotTabs"> */}
        <Tab
        onClick={()=>{
          navigate('/ChatBotTabs')
        }}
          label="Details"
          value="ChatBotTabs" // Update this to match your route
          sx={{
            width: 180,
            color: '#FF8C7D',
            borderRadius: '0 0 21.94px 21.94px',
            border: `1px solid ${'#FF8C7D'}`,
            '&.Mui-selected': {
              backgroundColor: '#FF8C7D',
              color: 'white',
              border: `1px solid ${'#FF8C7D'}`,
            },
          }}
        />
      {/* </Link> */}

      <Link to="/ChatBotTextTabs" style={{ textDecoration: 'none' }}>
        <Tab
          label="Text"
          value="ChatBotTextTabs" // Update this to match your route
          sx={{
            width: 180,
            color: '#FF8C7D',
            borderRadius: '0 0 21.94px 21.94px',
            border: `1px solid ${'#FF8C7D'}`,
            '&.Mui-selected': {
              backgroundColor: '#FF8C7D',
              color: 'white',
              border: `1px solid ${'#FF8C7D'}`,
            },
          }}
        />
      </Link>

      <Link to="/ChatBotDocument" style={{ textDecoration: 'none' }}>
        <Tab
          label="Document"
          value="ChatBotDocument" // Update this to match your route
          sx={{
            width: 180,
            color: '#FF8C7D',
            borderRadius: '0 0 21.94px 21.94px',
            border: `1px solid ${'#FF8C7D'}`,
            '&.Mui-selected': {
              backgroundColor: '#FF8C7D',
              color: 'white',
              border: `1px solid ${'#FF8C7D'}`,
            },
          }}
        />
      </Link>

      <Link to="/Url" style={{ textDecoration: 'none' }}>
        <Tab
          label="URL"
          value="Url" // Update this to match your route
          sx={{
            width: 180,
            color: '#FF8C7D',
            borderRadius: '0 0 21.94px 21.94px',
            border: `1px solid ${'#FF8C7D'}`,
            '&.Mui-selected': {
              backgroundColor: '#FF8C7D',
              color: 'white',
              border: `1px solid ${'#FF8C7D'}`,
            },
          }}
        />
      </Link>

      <Link to="/ChatSocialAccount" style={{ textDecoration: 'none' }}>
        <Tab
          label="Social Accounts"
          value="ChatSocialAccount" // Update this to match your route
          sx={{
            width: 180,
            color: '#FF8C7D',
            borderRadius: '0 0 21.94px 21.94px',
            border: `1px solid ${'#FF8C7D'}`,
            '&.Mui-selected': {
              backgroundColor: '#FF8C7D',
              color: 'white',
              border: `1px solid ${'#FF8C7D'}`,
            },
          }}
        />
      </Link>

      <Tab
        label="Qna"
        value="Qna" // Update this to match your route
        sx={{
          width: 180,
          color: '#FF8C7D',
          borderRadius: '0 0 21.94px 21.94px',
          border: `1px solid ${'#FF8C7D'}`,
          '&.Mui-selected': {
            backgroundColor: '#FF8C7D',
            color: 'white',
            border: `1px solid ${'#FF8C7D'}`,
          },
        }}
      />
    </Tabs>
  );
}

export default LabTabs;
