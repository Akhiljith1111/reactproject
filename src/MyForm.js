
import React, { useState } from 'react';


function MyForm() {
    const initialFormData = {  
    firstName: '',
    lastName: '',
    email: '',
    address:'',
    phone:'',
    gender:'',
    loanAmount:'',
    loanTenure:'',
    checkbox:'',

  };


  const [formData, setFormData] = useState(initialFormData);
  const [savedId, setSavedId] = useState(null);
  const [data, setData] = useState([]);


   const handleChange = (event) => {
    const {name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
  
  setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue
  }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5500/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Error saving form data');
      }
      const data = await response.json();
        setSavedId(data.id);
        console.log('Form data submitted:', data);
        setFormData(initialFormData);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  
  const handleViewClick = async () => {

    if(savedId) {
    try {
      const response = await fetch(`http://localhost:5500/data?id=${savedId}`);
        const fetchedData = await response.json();
        setData(fetchedData);
        console.log(fetchedData);
     } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  };



  return (
    <div>
      <h1>Loan Application Form</h1>  
      <form onSubmit={handleSubmit}>
        <label>
         First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            
          />
        </label>
        <br/>
        

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br/>
    

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Address:
          <textarea
            name = "address"
            value={formData.address}
            onChange={handleChange}
            />
        </label>
        <br/>

        <label>
          Contact number:
          <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Gender :
          <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        </label>
        <br/>
      
        <label>
          Loan Amount:
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
          />
        </label>
        <br/>

        <label>
          Loan Tenure:
          <select
            name="loanTenure"
            value={formData.loanTenure}
            onChange={handleChange}
          >
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
          </select>
        </label>
        <br/>

        <label>
          <input
          type="checkbox"
          name="checkbox"
          checked={formData.checkbox}
          onChange={handleChange}
          required
          />
          I confirm that all the information given above is True.
        </label>
        <br/>

        <button type="submit">Submit</button>
        {savedId && <p>Form Data: {savedId}</p>}
        <button onClick={handleViewClick} disabled={!savedId} id="view">View Data</button>

       {data.length > 0 && (
       <div>
        <h2>Fetched Data:</h2>

        <ul>
          {data.map(item => (
            <li key={item.id}>{item.fetchedData}</li>
          ))}
        </ul>
      </div>
    )}
      </form>
      <div id="value"></div>
      
    </div>
    
  );
}


export default MyForm;


