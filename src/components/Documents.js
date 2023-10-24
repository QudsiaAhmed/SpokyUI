import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '../components/Tabs';
import DocumentUpload from './DocumentUpload';
import AfterUpload from './AfterUpload';

const Documents = () => {
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


  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (file) => {
    setUploadedFiles([...uploadedFiles, file]);
  };

  return (
    <Container style={{ padding: 0, maxWidth: "none" }} sx={containerStyle}>
      <div style={innerBoxStyle}>
        <Typography variant="h6" sx={{ color: '#FFFFFF', marginLeft: '3rem', fontSize: '19px', fontWeight: "500" }}>
          Input Chatbot Details
        </Typography>

      </div>
      <Tabs />
      {uploadedFiles.length > 0 ? (
        <div>
          {uploadedFiles.map((file, index) => (
            <AfterUpload key={index} file={file} />
          ))}
        </div>
      ) : (
        <DocumentUpload onFileUpload={handleFileUpload} />
      )}
    </Container>
  );
};

export default Documents;
