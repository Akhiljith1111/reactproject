import React from "react";
import './List.css'




 function List(props) {

   const { header,values  } = props;
    return( 
       <div className="wrapper">
          <label for="radioOption">
          <input
          type="radio"
          id="radioOption"
          name="loansTypes"
          value={FormData.loansTypes}
        
        />
        
         <h1>{header}</h1>
        <ul>
         {
            values && values.map((str) => {
               return (
                  <li>{str}</li>
               )
            })
         }
        </ul>
        </label>
       </div> 
    )
 };

 export default List;


// import React, { useState } from "react";
// import './List.css';

// function List(props) {
//   const { header, values } = props;
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   }

//   return (
//     <div className="wrapper">
//       <label>
//         <input
//           type="radio"
//           name="loansTypes"
//           value={selectedValue}
//           onChange={handleChange}
//           checked={selectedValue === props.formData.loansTypes} 
//         />
//         <h1>{header}</h1>
//         <ul>
//           {values && values.map((str, index) => <li key={index}>{str}</li>)}
//         </ul>
//       </label>
//     </div>
//   );
// }

// export default List;


// import React, { useState } from "react";
// import './List.css';

// function List(props) {
//   const { header, values } = props;
  
 
//   const [selectedLoanType, setSelectedLoanType] = useState("");

 
//   const handleRadioClick = (event) => {
//     setSelectedLoanType(event.target.value);
 
//   };

//   return (
//     <div className="wrapper">
//       <h1>{header}</h1>
//       <ul>
//         {values &&
//           values.map((str, index) => {
//             return <li key={index}>{str}</li>;
//           })}
//       </ul>
//       <label>
//         <input
//           type="radio"
//           name="loansTypes"
//           value="someLoanType" 
//           onClick={handleRadioClick} 
//           checked={selectedLoanType === "someLoanType"} 
//         />
//       </label>
//     </div>
//   );
// }

// export default List;




