
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


   const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'radio' || type === 'checkbox' ? checked : value;
  
  setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData(initialFormData);
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
      </form>
    </div>
  );
}

export default MyForm;
