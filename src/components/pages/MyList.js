import React, { useState, useEffect } from 'react';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51Nf5yNJlxshBFtBXJZ9CTRCXzpkq0KE1lqA8dlnsEs7gawxuqH4M7qG4ETHBZnMJ2drLfcl7aXGTRipcOTzJgbD000dm4fENbA');

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await stripe.files.list({ limit: 3 });
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div>
      <h2>List of Files from Stripe</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>{file.filename}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
