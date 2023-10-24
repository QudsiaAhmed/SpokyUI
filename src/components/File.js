import React, { useState, useEffect } from 'react';
import DocumentUpload from './DocumentUpload';
import AfterUpload from './AfterUpload';

const Files = () => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (file) => {
    // Update the array of uploaded files
    setUploadedFiles([...uploadedFiles, file]);
    // Set the state to indicate that a file has been uploaded
    setIsFileUploaded(true);
  };

  useEffect(() => {
    // You can do any additional processing or API calls here
  }, [uploadedFiles]);

  return (
    <div>
      {isFileUploaded ? (
        <AfterUpload
          uploadedFiles={uploadedFiles}
          setIsFileUploaded={setIsFileUploaded}
        />
      ) : (
        <DocumentUpload handleFileUpload={handleFileUpload} />
      )}
    </div>
  );
};

export default Files;
