// DisplayRecords.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DisplayRecords = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const handlelogout =  () => {
    localStorage.removeItem('Login');
   navigate('/adminlogin')
  };
  useEffect(() => {
    if(localStorage.getItem('Login')!= 'True'){
    
      navigate('/adminlogin');
    }
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        // Adjust the URL based on your backend API endpoint
        const response = await axios.get('http://localhost:3001/getAllData');
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The empty dependency array ensures it only runs once

  return (
    <div style={{ margin: '20px' }}>
         <div style={{ margin: '20px',display:'flex' , justifyContent:'space-between' }}>
      
      <h2>All Records</h2>
      <button style={{backgroundColor:'red' , margin:'10px'}} onClick={handlelogout}>Logout</button> 
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Roll No</th>
            <th style={tableHeaderStyle}>Year</th>
            <th style={tableHeaderStyle}>Department</th>
            <th style={tableHeaderStyle}>Course</th>
            <th style={tableHeaderStyle}>Course No</th>
            <th style={tableHeaderStyle}>Term</th>
            <th style={tableHeaderStyle}>Time</th>
            {/* Add other table headers based on your data model */}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td style={tableCellStyle}>{record.name}</td>
              <td style={tableCellStyle}>{record.rollNo}</td>
              <td style={tableCellStyle}>{record.year}</td>
              <td style={tableCellStyle}>{record.department}</td>
              <td style={tableCellStyle}>{record.courseName}</td>
              <td style={tableCellStyle}>{record.courseNo}</td>
              <td style={tableCellStyle}>{record.term}</td>
              <td style={tableCellStyle}>{record.createdAt}</td>
              {/* Add other table cells based on your data model */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  backgroundColor: 'grey',
  padding: '8px',
  textAlign: 'left',
};

export default DisplayRecords;
