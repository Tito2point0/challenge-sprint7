import React, { useState, useEffect } from "react";
import Home from "./components/Home.js";
import { Route, Routes, Link } from "react-router-dom";

import Pizza from "./components/pizza.js";
import * as yup from 'yup'
import axios from "axios";
import formSchema from "./components/formSchema.js";
import '../src/App.css'

const App = () => {

const initialFormValues = {
    name: '',
    size: '',
  topping1: false,
  topping2: false,
    special: '',
  };

  const initialFormErrors = {
    name: '',
    size: '',
    toppings: '',
  }

const initialPizza = []
const initialDisabled = true
  


  
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [submitDisabled, setSubmitDisabled] = useState(initialDisabled);
const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
}
  
  
  const postNewPizza = newPizza => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(({data}) => {
        setPizza([data, ...pizza])
      })
      .catch(err => console.log(err))
    .finally(() => setFormValues(initialFormValues) )
  }


  const inputChange = (name, value) => {
    // If the name includes a space, replace it with an underscore
    const updatedName = name.replace(/\s+/g, '_');
    validate(name, value);
    setFormValues({
      ...formValues,
      [updatedName]: value,
    });
  };

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ["cheese", "pepperoni", "ham", "pinnapple"].filter(topping => !!formValues[topping]),
      specialInstructions: formValues["special instructions"],
    };
    postNewPizza(newPizza);
  }
  

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setSubmitDisabled(!valid))

  }, [formValues])

  return (
    <div>
           <h1>Welcome to Pizza Joint</h1>
      <nav>
            <Link to="/" >Home </Link>&nbsp;
            <Link to="/pizza" id="pizza-form">Create Your Pizza</Link>
      </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="pizza" element={<Pizza  values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={submitDisabled}
        errors={formErrors}/>} />
         </Routes>
      
      
        
    </div>
  );
};
export default App;

/* 

  × Homepage at "/" route, has link or button with #order-pizza (54 ms)                                                             
    × From homepage "/" route, click #order-pizza, navigate to "/pizza" route (20 ms)                                                 
    × The "/pizza" route has a form with #pizza-form (22 ms)
    × Form has name text input with #name-input (14 ms)            
    × Form has validation for #name-input with error message "name must be at least 2 characters" (16 ms)                             
    × Form has pizza size dropdown with #size-dropdown (15 ms)
    × Form has toppings checklist with at least 4 options (14 ms)  
    × Form has special instructions input with #special-text (22 ms)                                                                  
    × Fill out #pizza-form, submit #pizza-form with data to https://reqres.in/api/orders (22 ms)                                      

*/


/*


- [x] The `App` component is wrapped in `BrowserRouter` - complete this requirement in the `index.js` module
- [x] A homepage that has a "/" route and links to your form (button, nav bar, or any other type of link is acceptable but must have an id of "order-pizza")
- [x] A order form that has a "/pizza" route and shows the form
- [x] A form with an id of "pizza-form"
- [x] A name text input field with an id of "name-input"
- [x] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass) ::: VERY IMPORTANT TO USE THAT EXACT ERROR MESSAGE (casing included!)
- [x] A dropdown for pizza size with an id of "size-dropdown"
- [x] A checklist for toppings - at least 4 (hint: name each separately!)
- [] Text input for special instructions with an id of "special-text"
- [ ] An Add to Order button that has an id of "order-button" and that submits the form and returns a database record of name, size, toppings and special instructions

Data should look something like
```
{
    name: string,
    size: string,
    topping1: bool,
    topping2: bool,
    special: string,
}
```


*/ 