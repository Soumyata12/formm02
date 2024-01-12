import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

//import { useStorage } from 'react-firebase-hooks/storage';
//import { storage } from './firebase';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };

  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Choose a file</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" onClick={handleUpload}>
        Upload
      </Button>
    </Form>
  );
};

export default FileUpload;
