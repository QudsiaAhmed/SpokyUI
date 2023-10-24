import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import Avatar from '../../Images/image 1 .png';

const SimpleChatbot = () => {
    const steps = [
        {
            id: '0',
            message: 'Welcome to the chatbot! Hello Spoky?',
            trigger: 'user',
        },
        {
            id: 'user',
            user: true,
            trigger: 'bot',
        },
        {
            id: 'bot',
            message: 'You said: {previousValue}',
            trigger: 'user',
        },
    ];

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const avatarStyle = {
        width: '30px',
        height: '30px',
        marginRight: '10px',
        borderRadius: '50%',
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '8rem',
        position: 'relative',
    };

    


    return (
        <ThemeProvider
            theme={{
                background: 'white',
                fontFamily: 'Arial, sans-serif',
                headerBgColor: '#FF8C7D',
                headerFontColor: '#fff',
                headerFontSize: '15px',
                botBubbleColor: '#E7E7E7',
                botFontColor: '#000000',
                userBubbleColor: '#fff',
                userFontColor: '#4a4a4a',
            }}
        >
            <div style={containerStyle}>
                <div>
                    <ChatBot
                        botAvatar={Avatar}
                        inputStyle={{
                            borderColor: '#62D2E9',

                        }}
                        headerTitle={
                            <div style={headerStyle}>
                                <img
                                    src={Avatar}
                                    alt="Avatar"
                                    style={avatarStyle}
                                />
                                Spoky
                            </div>
                        }
                        steps={steps}
                        userDelay={0}
                    />
                </div>
               
            </div>
        </ThemeProvider>
    );
};

export default SimpleChatbot;
