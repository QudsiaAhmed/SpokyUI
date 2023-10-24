import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DocumentUpload = ({ onFileUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]); // Initialize an array to store uploaded files

  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    height: '10%',
    margin: '0 10%',
    marginTop: '14%',
  };

  const innerBoxStyles = {
    width: '100%',
    minHeight: '40vh',
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '20px',
  };

  const textStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Outfit',
    color: '#00000080',
    marginBottom: '2%',
    fontFamily: 'Outfit',
    fontSize: '18px',
  };

  const buttonStyles = {
    width: '38%',
    height: '30%',
    fontSize: '40px',
    fontWeight: 'bold',
    fontFamily: 'Outfit',
    fontWeight: '600',
    color: '#FF8C7D',
    border: '2px dotted #FF8C7D',
    borderRadius: '22rem',
    cursor: 'pointer',
    padding: '10px',
  };

  const supportedFileExtensionsStyles = {
    fontSize: '1rem',
    fontWeight: 'normal',
    fontFamily: 'Outfit',
    color: '#252F3F',
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '4%',
  };

  const handleFileInputClick = () => {
    // Trigger the hidden file input element
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Add the uploaded file to the array
      setUploadedFiles([...uploadedFiles, file]);
      onFileUpload(file);
    }
  };

  return (
    <Box style={boxStyles}>
      <Typography variant="h6" gutterBottom style={{ marginRight: '91%', fontSize: '1.2rem', fontWeight: '500', fontFamily: 'Outfit', color: '#252F3F' }}>
        Document
      </Typography>
      <Box style={innerBoxStyles}>
        <Typography style={textStyles}>Upload Documents and files</Typography>
        <input
          type="file"
          accept=".pdf, .txt, .doc, .docx"
          style={{ display: 'none' }}
          id="fileInput"
          onChange={handleFileUpload}
        />
        <Button
          style={buttonStyles}
          variant="outlined"
          onClick={handleFileInputClick} // Trigger the file input when the button is clicked
        >
          Upload+
        </Button>
        <Typography style={supportedFileExtensionsStyles}>
          Supported file extensions: pdf, txt, doc, docx
        </Typography>
        {/* Display the list of uploaded files */}
        {uploadedFiles.length > 0 && (
          <Typography variant="subtitle1" style={{ marginTop: '20px' }}>
            Uploaded Files:
            <ul>
              {uploadedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default DocumentUpload;
