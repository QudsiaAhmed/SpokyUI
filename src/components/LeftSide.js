import React from 'react';
import './LeftSide.css';
import ChatBotImg from '../Images/ChatBot.png';

const LeftSide = () => {
  return (
    <div className='leftside'>
      <div className='spokyheading'>
        <h1 className='spokyheading h1'>Spoky</h1>
      </div>
      <div className='chatbotheading'>
        <h1>
          <span>Start your</span>
          <span>Journey with</span>
          <span>your own AI</span>
          <span>Chatbot.</span>
        </h1>
      </div>
      <div className='chatbot-image-container'>
        <img className='chatbot-image' src={ChatBotImg} alt="ChatBot" />
      </div>
    </div>
  );
};

export default LeftSide;
