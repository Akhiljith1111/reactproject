
import React, { useState } from 'react';
import List from './List';


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
    loanTypes:'',
    checkbox:'',

  };



  const [formData, setFormData] = useState(initialFormData);
  const [savedId, setSavedId] = useState(null);
  const [data, setData] = useState({});


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
            console.log(Object.entries(fetchedData));
         } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      };
      


const valuesOne = ["intrest: 10%", "Tenure : 15 Months", "Maximum Amount: 10000"]
const valuesTwo = ["intrest: 12%", "Tenure : 10 Months", "Maximum Amount: 15000"]
const valuesThree = ["intrest: 8%", "Tenure : 12 Months", "Maximum Amount: 12000"]
const valuesFour = ["intrest: 15%", "Tenure : 20 Months", "Maximum Amount: 20000"] 



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
            <option value="">Select loan Tenure...</option>
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
          </select>
        </label>
        <br/>
        
        <div> 
        
              <List header="Personal Loan" handleChange={handleChange} formData={formData} values={valuesOne} />
              <List header="Home Loan" handleChange={handleChange} formData={formData} values={valuesTwo}/>
              <List header="Car Loan" handleChange={handleChange} formData={formData} values={valuesThree}/>
              <List header="Student Loan" handleChange={handleChange} formData={formData} values={valuesFour}/>

            </div>

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

       {Object.entries(data).length> 0 && (
       <div>
        <h2>Fetched Data:</h2>
            

        <ul>
          {Object.entries(data).map(item => (
            <li key={item[0]}>{JSON.stringify(item, null, 2)}</li>
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


