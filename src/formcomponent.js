// YourFormComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './YourFormComponent.css'; // Import the CSS file for styling

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    year: '',
    department: '',
    courseName: '',
    term: '',
    courseNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const h1Style = {
    textAlign: 'center',
    color: 'white', // Adjust the color as needed
    fontSize: '2rem', // Adjust the font size as needed
    margin: '20px 0', // Adjust the margin as needed
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      // Adjust the URL based on your backend API endpoint
      await axios.post('http://localhost:3001/submit', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`${error}`);
    }
  };

  const getAllData = async () => {
    try {
      // Adjust the URL based on your backend API endpoint
      const response = await axios.get('http://localhost:3001/getAllData');
      console.log(response.data); // Log data to the console
      // Handle the data as needed (e.g., update state to display in your UI)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const clean = () => {
    setFormData({
      name: '',
    rollNo: '',
    year: '',
    department: '',
    courseName: '',
    term: '',
    courseNo: '',
    });
    alert('Form RESET');
  }

  useEffect(() => {
    getAllData(); // Fetch data when the component mounts
  }, []); // The empty dependency array ensures it only runs once when the component mounts

  return (
    <><h1 style={h1Style}>LOGIN REGISTER</h1>
    <div className="form-container">
      
      <h2>Registration Form</h2>
      <form >
      <div className="form-group1">
        <div className="form-group">
        
    
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-column" />
          </label>
        </div>

        <div className="form-group">
          <label>
            Roll No:
            <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange}  className="input-column"  />
          </label>
        </div>

        <div className="form-group0001">
        <div className="form-groupinside">
          <label>
            Year:
            <input type="text" name="year" value={formData.year} onChange={handleChange}  className="input-column" />
          </label>
          </div>
          <div className="form-groupinside">
          <label>
            Term:
            <input type="text" name="term" value={formData.term} onChange={handleChange} className="input-column" />
          </label>
          </div>
  
        </div>

        <div className="form-group">
          <label>
            Department:
            {/* Replace 'your-department-options' with your actual department options */}
            <select name="department" value={formData.department} onChange={handleChange}  className="input-column">
              <option value="">Select Department</option>
              <option value="dept1">Department 1</option>
              <option value="dept2">Department 2</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>

        <div className="form-group0001">
        <div className="form-groupinside">
          <label>
            Course Name:
            <input type="text" name="courseName" value={formData.courseName} onChange={handleChange}  className="input-column"/>
          </label>
        </div>

        

        <div className="form-groupinside">
          <label>
            Course No:
            <input type="text" name="courseNo" value={formData.courseNo} onChange={handleChange}  className="input-column"/>
          </label>
        </div> </div>
        </div>

        <div className="button-container">
        <button className="btn" onClick={handleSubmit}>Submit</button>
        <button className="btn" onClick={clean}>Reset</button>
        </div>
      </form>
    </div>
    </>
  );
};

export default YourFormComponent;
