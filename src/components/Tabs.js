import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
   

const MuiTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <>
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
                <Tab
                    label="Details"
                    sx={{
                        color: '#FF8C7D',
                        border: `1px solid ${'#FF8C7D'}`,
                        '&.Mui-selected': {
                            backgroundColor: '#FF8C7D',
                            color: 'white',
                            border: `1px solid ${'#FF8C7D'}`,
                        },
                    }}
                />
                <Tab
                    label="Text"
                    sx={{
                        color: '#FF8C7D',
                        border: `1px solid ${'#FF8C7D'}`,
                        '&.Mui-selected': {
                            backgroundColor: '#FF8C7D',
                            color: 'white',
                            border: `1px solid ${'#FF8C7D'}`,
                        },
                    }}
                />
                <Tab
                    label="Document"
                    sx={{
                        color: '#FF8C7D',
                        border: `1px solid ${'#FF8C7D'}`,
                        '&.Mui-selected': {
                            backgroundColor: '#FF8C7D',
                            color: 'white',
                            border: `1px solid ${'#FF8C7D'}`,
                        },
                    }}
                />
                <Tab
                    label="Url"
                    sx={{
                        color: '#FF8C7D',
                        border: `1px solid ${'#FF8C7D'}`,
                        '&.Mui-selected': {
                            backgroundColor: '#FF8C7D',
                            color: 'white',
                            border: `1px solid ${'#FF8C7D'}`,
                        },
                    }}
                />
                <Tab
                    label="Social Accounts"
                    sx={{
                        color: '#FF8C7D',
                        border: `1px solid ${'#FF8C7D'}`,
                        '&.Mui-selected': {
                            backgroundColor: '#FF8C7D',
                            color: 'white',
                            border: `1px solid ${'#FF8C7D'}`,
                        },
                    }}
                />
                <Tab
                    label="Qna"
                    sx={{
                        color: '#FF8C7D',
                        border: `1px solid ${'#FF8C7D'}`,
                        '&.Mui-selected': {
                            backgroundColor: '#FF8C7D',
                            color: 'white',
                            border: `1px solid ${'#FF8C7D'}`,
                        },
                    }}
                />
            </Tabs>
    </>
  )
}

export default MuiTabs