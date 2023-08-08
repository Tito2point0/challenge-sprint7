import React from "react";

const pizza = (props) => { 
    const {
        values,
        submit,
        change,
        disabled,
        errors,
     
    } = props
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value 
        change(name, valueToUse);
      }
    
   
   
    return ( 
        <div>
            <div className="container2">
        <form  id="pizza-form" onSubmit={onSubmit}>
        <div className="errors">
             <div>{errors.name}</div>
             <div>{errors.toppings}</div>
            <div>{errors.size}</div>           

        </div>
        
            <h3>Build Your Own Pizza</h3>
            <div>
                <label > Name: 
                    <input id="name-input"
                       
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        
                    
                        />
                        
                        </label>
            </div>
                  <div>            
                    <label> pizza size:
                        <select
                            id="size-dropdown"
                            name="size"
                            value={values.size}
                            onChange={onChange}
                        >
                            <option value="">Select an option</option>
                            <option value="small"> Small </option>
                            <option value="medium"> Medium </option>
                            <option value="large"> Large </option>
                            <option value="extraLarge"> XL</option>   
                        </select>
                        </label>
                  </div>
                        
                        <div className='form-checkboxes'>
      <h4>Toppings</h4>

      <label>Cheese &nbsp;
        <input
          type='checkbox'
          name='cheese'
          checked={values.cheese}
          onChange={onChange}
        />
      </label>

      <label> pepperoni &nbsp;
        <input
          type='checkbox'
          name='pepperoni'
          checked={values.cheese}
          onChange={onChange}
        />
      </label>

      <label> Ham &nbsp;

        <input
          type='checkbox'
          name='ham'
          checked={values.ham}
          onChange={onChange}
        />
      </label> 
      <label> pinnapple &nbsp;
          <input
          type='checkbox'
          name='pinnapple'
          checked={values.pinnapple}
          onChange={onChange}
          />
      </label>


      <div>
        <label id="special-text"> Special Instructions:
        <input 
          value={values.specialInstructions}
          onChange={onChange}
          name='specialInstructions'
          type='text'
        />

      </label>
                            </div>

                        <button id="order-button" disabled={disabled} >submit</button>
                    </div>
                </form>
        </div>        
           
    </div>
)

}
export default pizza;
