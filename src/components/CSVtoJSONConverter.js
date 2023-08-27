import React, { useState } from 'react';


const CSVtoJSONConverter = () => {
  const [ setCSVFile] = useState(null);
  const [jsonContent, setJsonContent] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setCSVFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvContent = e.target.result;
        const jsonContent = convertCSVtoJSON(csvContent);
        setJsonContent(jsonContent);
      };
      reader.readAsText(file);
    }
  };

  const convertCSVtoJSON = (csv) => {
    // Here you would write the logic to convert CSV to JSON
    // This can involve parsing the CSV content, splitting lines and values, etc.
    // Return the JSON representation of the CSV data
    // For example:
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const jsonData = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const entry = {};
      
      for (let j = 0; j < headers.length; j++) {
        entry[headers[j]] = values[j];
      }
      
      jsonData.push(entry);
    }
    
    return jsonData;
  };

  const handleCopyToClipboard = async () => {
    if (jsonContent) {
      const jsonString = JSON.stringify(jsonContent, null, 2);
      
      try {
        await navigator.clipboard.writeText(jsonString);
        console.log('JSON content copied to clipboard.');
      } catch (error) {
        console.error('Error copying JSON content to clipboard:', error);
      }
    }
  };
  

  return (
    <div>
      <h1>CSV to JSON Converter</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      
      {jsonContent && (
        <div>
          <h2>Converted JSON Content</h2>
          <button onClick={handleCopyToClipboard}>Copy JSON to Clipboard</button>
          <pre>{JSON.stringify(jsonContent, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CSVtoJSONConverter;

