import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AfterUpload = ({ file, onFileUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileInputClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setUploadedFiles([...uploadedFiles, newFile]);
      onFileUpload(newFile);
    }
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        height: '10%',
        margin: '0 10%',
        marginTop: '14%',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        style={{
          marginRight: '91%',
          fontSize: '1.2rem',
          fontWeight: '500',
          fontFamily: 'Outfit',
          color: '#252F3F',
          fontWeight:'bold',
        }}
      >
        Document
      </Typography>
      <Box
        style={{
          width: '100%',
          minHeight: '35vh',
          border: '1px solid #ccc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        {file && (
          <Typography
  style={{
    // fontSize: '18px',
    fontFamily: 'Outfit',
    marginLeft: '3.3rem',
    color: '#000000',
    fontWeight: 400,
    fontFamily: 'Outfit',
    border: '1px solid #FF8C7D', 
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '15px',
    borderRadius: '20px',
    width: '38.5vw',
    textAlign: 'left ', 
    marginBottom:'.2rem'
  }}
>
  {file.name}
</Typography>

        )}
        {uploadedFiles.length > 0 && (
          <Typography>
            <ul>
              {uploadedFiles.map((uploadedFile, index) => (
                <div key={index} style={{ marginLeft: '18px', display: 'flex', alignItems: 'center',fontWeight:'400',fontFamily:'Outfit', border: '1px solid #FF8C7D', 
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '1px',
          borderRadius: '20px',
          marginBottom:'.9rem',
          width:'40vw'}}>
                  <p
                    style={{
                      color: '#000000',
                      fontWeight: 400,
                      marginLeft:'1rem',
                    }}
                  >
                    {uploadedFile.name}
                  </p>
                </div>
              ))}
            </ul>
          </Typography>
        )}
        <input
          type="file"
          accept=".pdf, .txt, .doc, .docx"
          style={{ display: 'none' }}
          id="fileInput"
          onChange={handleFileUpload}
        />
        <Button
          style={{
            backgroundColor: '#62D2E9',
            color: '#fff',
            fontSize: '18px',
            fontWeight: '500',
            padding: '10px 20px',
            // marginRight: '10px',
            borderRadius: '20px',
            marginLeft:'3.5rem',
          }}
          onClick={handleFileInputClick}
        >
          Upload File
        </Button>
        <Typography
          style={{
            fontSize: '1rem',
            fontWeight: 'normal',
            fontFamily: 'Outfit',
            color: '#252F3F',
            fontSize: '18px',
            fontWeight: '500',
            marginTop: '2%',
            marginLeft:'3.5rem',

          }}
        >
          Supported file extensions: pdf, txt, doc, docx
        </Typography>
      </Box>
    </Box>
  );
};

export default AfterUpload;
