import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { TextField, Button, Checkbox } from '@mui/material';
import { Box, Container } from '@mui/material'
import Sidebar from '../components/Sidebar';
import Tabs from './Tabs';
import ChatBotNavbar from '../components/ChatBotNavbar';
import ChatTextBtn from '../components/ChatTextBtn';
const Url = () => {
    const containerStyle = {
        maxWidth: '80%',
        height: '732px',
        marginRight: '16.4rem',
        borderRadius: '18.03px',
        border: '1.4px solid #CECACA',
        marginTop: '7rem',
        position: 'relative',
        padding: 0,
    };

    const innerBoxStyle = {
        width: '100%',
        height: '4rem',
        borderRadius: '18.03px',
        backgroundColor: '#FF8C7D',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',

    };

    const typographyBoxStyle = {
        marginTop: '12rem',
        marginRight: '67%',
        fontSize: '1.5rem',
        fontWeight: '600',
        fontFamily: 'Outfit',
        fontWeight: 'Bold',
    };

    const inputBoxStyle = {
        marginLeft: '11%',
        padding: '1rem',
        width: '72%',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const textFieldStyle = {
        width: '100%',
        marginBottom: '1rem',
    };

    const buttonContainerStyle = {
        width: '100%',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
    };

    const buttonStyle = {
        width: '20%',
        height: '3rem',
        color: '#62D2E9',
        backgroundColor: 'transparent',
        borderRadius: '4rem',
    };

    const [isFetchClicked, setIsFetchClicked] = useState(false);
    const [isDetailsClicked, setIsDetailsClicked] = useState(false);
    const [checked, setChecked] = useState(false);
    const [enteredUrl, setEnteredUrl] = useState('');
    const [urlList, setUrlList] = useState([]); // New state to maintain a list of URLs
    const [displayedUrl, setDisplayedUrl] = useState('');

    const handleFetchClick = () => {
        setIsFetchClicked(!isFetchClicked);
        setIsDetailsClicked(false);

        // Set the displayedUrl, but don't clear the enteredUrl
        setDisplayedUrl(enteredUrl);
    };

    const handleDetailsClick = () => {
        setIsDetailsClicked(!isDetailsClicked);
        setIsFetchClicked(false);

        // Add the entered URL to the list
        if (enteredUrl.trim() !== '') {
            setUrlList([...urlList, enteredUrl]);
        }
        // Clear the enteredUrl state
        setEnteredUrl('');
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            <Box style={{ height: '100%', margin: 'auto', marginLeft: '25rem', width: '71.5%', maxWidth: "none", }}>
                <Container style={{ padding: 0, maxWidth: '1400px' }} sx={{ marginTop: '6rem' }}>

                    <Container style={{ padding: 0, maxWidth: 'none' }} sx={containerStyle}>
                        <Sidebar />
                        <ChatBotNavbar />

                        <Tabs />
                        <div style={innerBoxStyle}>
                            <Typography variant="h6" sx={{ color: '#FFFFFF', marginLeft: '3rem', fontSize: '19px', fontWeight: "500" }}>
                                Input Chatbot Details
                            </Typography>
                        </div>
                        <Box sx={typographyBoxStyle}>
                            <Typography>
                                Website URL
                            </Typography>
                        </Box>
                        <Box sx={inputBoxStyle}>
                            <TextField
                                fullWidth
                                label="Enter the website URL from which you want to crawl data for training your AI Chatbot."
                                id="fullWidth"
                                sx={textFieldStyle}
                                value={enteredUrl} // Bind the value directly to enteredUrl state
                                onChange={(e) => setEnteredUrl(e.target.value)} // Update enteredUrl state
                            />
                            <Box sx={buttonContainerStyle}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={buttonStyle}
                                    onClick={handleFetchClick}
                                    style={{
                                        backgroundColor: isFetchClicked ? '#62D2E9' : 'transparent',
                                        color: isFetchClicked ? '#fff' : '#62D2E9',
                                        borderColor: isFetchClicked ? '#62D2E9' : '#62D2E9',
                                    }}
                                >
                                    Fetch
                                </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    sx={buttonStyle}
                                    onClick={handleDetailsClick}
                                    style={{
                                        backgroundColor: isDetailsClicked ? '#62D2E9' : 'transparent',
                                        color: isDetailsClicked ? '#fff' : '#62D2E9',
                                        borderColor: isDetailsClicked ? '#62D2E9' : '#62D2E9',
                                    }}
                                >
                                    Add Directly
                                </Button>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#000', marginTop: '3%', marginRight: '37%', fontFamily: 'Outfit', fontWeight: '500', fontSize: '1rem' }}>
                                Please select the links whose data you wish to use for training your chatbot.
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '83%' }}>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <Typography variant="body1" sx={{ color: '#252F3F80', fontFamily: 'Outfit', fontWeight: '500', fontSize: '16px' }}>
                                    Select all data
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex', marginLeft: '1.5%',
                                marginTop: '2rem',
                                width: '100%',
                                height: '20vh',
                                border: '1px solid #A29F9F',
                                borderRadius: '1rem',
                            }}>
                                {/* Display the entered URLs in the Box */}
                                {urlList.length > 0 && (
                                    <ul>
                                        {urlList.map((url, index) => (
                                            <li key={index} style={{
                                                color: '#000000',
                                                fontWeight: 400,
                                                marginLeft: '1rem',
                                                marginLeft: '18px', display: 'flex', alignItems: 'center', fontWeight: '400', fontFamily: 'Outfit', border: '1px solid #FF8C7D',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                padding: '10px',
                                                borderRadius: '10px',
                                                marginBottom: '.9rem',
                                                width: '40vw'

                                            }}>

                                                {url}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {/* Display the entered URL in the Box */}
                                {displayedUrl && (
                                    <Typography variant="body1" sx={{ color: '#000', fontFamily: 'Outfit', fontWeight: '500', fontSize: '1rem' }}>
                                        {displayedUrl}
                                    </Typography>
                                )}
                            </Box>
                        </Box>

                    </Container>
                    <ChatTextBtn />
                </Container>
            </Box>

        </>
    );
};

export default Url;
