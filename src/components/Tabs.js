import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from 'react-router-dom';

const LabTabs = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log('newValue',newValue)
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
       <Link sx={{backgroundColor:'red',
          }} to="/ChatBotTabs" style={{width: '12%',minWidth:"12%", textDecoration: 'none' ,}}>
        <Tab
    
          label="Details"
          value="ChatBotTabs" 
          sx={{
            width:'100%',
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
      {/* </Link> */}

      <Link sx={{backgroundColor:'red',
          }} to="/ChatBotTextTabs" style={{width: '12%',minWidth:"12%", textDecoration: 'none' ,}}>
        <Tab
          label="Text"
          value="ChatBotTextTabs" 
        onClick={(e)=>{
          console.log('working',e)
        }}
          sx={{
             width:'100%',
            color: '#FF8C7D',
            backgroundColor:value=='ChatBotTextTabs'?"#FF8C7D":"white",
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

      <Link to="/ChatBotDocument"  style={{width: '12%',minWidth:"12%", textDecoration: 'none' ,}}>
        <Tab
          label="Document"
          value="ChatBotDocument" 
          sx={{
              width:'100%',
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

      <Link to="/Url"  style={{width: '12%',minWidth:"12%", textDecoration: 'none' ,}}>
        <Tab
          label="URL"
          value="Url" 
          sx={{
              width:'100%',
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

      <Link to="/ChatSocialAccount" style={{ width: '12%', minWidth: "12%", textDecoration: 'none' }}>
  <Tab
    label="Social Accounts"
    value="ChatSocialAccount"
    sx={{
      width: '100%',
      color: '#FF8C7D',
      borderRadius: '0 0 21.94px 21.94px',
      border: `1px solid ${'#FF8C7D'}`,
      whiteSpace: 'nowrap',
      '&.Mui-selected': {
        backgroundColor: '#FF8C7D',
        color: 'white',
        border: `1px solid ${'#FF8C7D'}`,
      },
    }}
  />
</Link>

      <Link to="/"  style={{width: '12%',minWidth:"12%", textDecoration: 'none' ,}}>
      <Tab
        label="Qna"
        value="Qna" 
        sx={{
            width:'100%',
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
    </Tabs>

  );
}

export default LabTabs;
