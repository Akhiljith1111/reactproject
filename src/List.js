

import React from "react";

// import ReactDOM from "react-dom";

import './List.css'

function List(props) {

    const { header, values ,  handleChange, formData} = props;

    return (

<div className="wrapper">

<label>

<input type="radio"

                    name="courseList"

                    value={values}

                    id="radioOption"

 

                        checked={formData.courseList === values}

 

                        onChange={handleChange}

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

}

export default List;






