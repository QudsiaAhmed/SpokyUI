import React, { useState, useEffect } from 'react';
import { Container, Paper, TextField, InputAdornment, IconButton, Box } from '@mui/material';
import Img from '../Images/image 1 .png'; 
import SendIcon from '@mui/icons-material/Send';
import { useAtom } from 'jotai';
import { userChanges } from '../utils/jotai';



const CustomChatBot = () => {
    const [change, setChange] = useAtom(userChanges);

console.log(userChanges,'userChanges')
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [fontSize, setFontSize] = useState(''); 

    const chatContainerStyle = {
        padding: '20px',
        height: '340px',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        WebkitScrollbarWidth: 'thin',
        backgroundColor:change?.backgroundcolor
    };

    const messageStyle = {
        margin: '5px',
        padding: '10px',
        borderRadius: '20px',
        display: 'flex',
        border: '1px solid #FF8C7D',
        fontWeight: '400',
        fontSize: change.fontSize + 'px', 
        };

    const userMessageStyle = {
        ...messageStyle,
        textAlign: 'right',
        backgroundColor: change?.chatbubblecolor,
        color: change?.fontcolor,
        width: '70%',
        marginLeft: 'auto',
        marginBottom: '1.5rem',
        height: '2rem',
        border: '1px solid #62D2E9',
        fontSize: change.fontSize + 'px', 
    };

    const botMessageContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.5rem',

    };

    const botMessageStyle = {
        ...messageStyle,
        backgroundColor: change?.chatbubblecolor,
        color: change?.fontcolor,
        width: '70%',
        marginBottom: '1.5rem',
        height: '2rem',
        fontSize: change.fontSize + 'px', 
    };

    const botIconStyle = {
        marginRight: '10px',
    };

    const boxStyle = {
        width: '100%',
        height: '80px',
        borderRadius: '38px 38px 0 0',
        background: `linear-gradient(to bottom, ${change?.headergradient}, ${change?.headertwogradieent})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const containerDivStyle = {
        width: '100%',
        height: '52px',
        borderRadius: '38px 38px 0 0',
        background: `linear-gradient(to bottom, ${change?.headergradient}, ${change?.headertwogradieent})`,
        transform: 'rotate(-180deg)',
        display: 'flex',
    };
    const spokyTextStyle = {
        margin: '0.2rem',
        color: 'white',
        fontSize: '1.5rem',
       
        fontFamily: 'Outfit',
        fontWeight: 'bold',
    };

    
    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
        const userInput = e.target.value;

        if (!isNaN(userInput)) {
            setFontSize(userInput + 'px');
        }
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() === '') return;

        const userMessage = { text: inputMessage, isUser: true };

        const userMessageText = inputMessage.toLowerCase();

        let botResponse;

        if (userMessageText.includes('hello')) {
            botResponse = { text: ' Hi there! How can I help you?', isUser: false };
        } else if (userMessageText.includes('how are you')) {
            botResponse = { text: ' I am just a computer program, so I do not have feelings, but I am here to assist you.', isUser: false };
        } else if (userMessageText.includes('hey')) {
            botResponse = { text: 'hey, how are you', isUser: false };
        } else {
            botResponse = { text: ' I do not understand your question.', isUser: false };
        }

        setMessages([...messages, userMessage, botResponse]);
        setInputMessage('');
    };

    useEffect(() => {
        const initialBotGreeting = { text: 'Hello! I’m Spoky', isUser: false };
        setMessages([initialBotGreeting]);
    }, []);

    return (
        <Container sx={{ marginTop: '7rem' }} maxWidth="xs">
            <div style={boxStyle}>
                <img src={Img} style={{ height: '40px', width: '40px' }} />
                <div style={spokyTextStyle} >Spoky</div>
            </div>
            <Paper sx={{ paddingBottom: 5 }} >
                <div style={chatContainerStyle} className="chat-container">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            style={message.isUser ? userMessageStyle : botMessageContainerStyle}
                        >
                            {message.isUser ? (
                                message.text
                            ) : (
                                <>
                                    <div style={botIconStyle}>
                                        <img src={Img} style={{ height: '40px', width: '40px' }} />
                                    </div>

                                    <div style={botMessageStyle}>
                                        {message.text}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <style>
                    {`
        .chat-container::-webkit-scrollbar {
            width: 6px;
        }

        .chat-container::-webkit-scrollbar-thumb {
            background-color: transparent;
        }
        
        .chat-container::-webkit-scrollbar-thumb:hover {
            background-color: transparent;
        }
    `}
                </style>

                <Box sx={{ display: 'flex', marginTop: 'auto', px: 3 }}>
                    <TextField
                        label="Ask me Anything"
                        variant="outlined"
                        fullWidth
                        value={inputMessage}
                        onChange={handleInputChange}
                        sx={{
                            border: '1px solid #62D2E9',
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSendMessage} sx={{ color: change?.sendmessagebtn,backgroundColor:'#62D2E9' }}>
                                        <SendIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Paper>

            <div style={containerDivStyle} />
        </Container>
    );
};

export default CustomChatBot;
