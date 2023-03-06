import React from "react";
import { useEffect,useState } from "react";
import "./style.css"

export function Form(){
    const initialValues={name:"",email:"", gender:"", phoneNumber:"", password:""};
    const [formValues, setFormValues]=useState(initialValues);
    const [formErrors, setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors( validate(formValues));
        setIsSubmit(true);
    }

    useEffect(()=>{
        console.log(formErrors);
        // console.log(formValues);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])

    const validate=(values)=>{
        const errors={}
        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;  //->     /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/
                                                            // ->    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
        const alphaNumericRegex=/^[a-zA-Z0-9 ]*$/;          
        const numRegex=/^\d+$/;
        
        if(!values.name){
            errors.name="Name is Required!";
        }else if(!alphaNumericRegex.test(values.name)){
            errors.name="Name is not alphanumeric";
        }
        if(!values.email){
            errors.email="Email is Required!";
        }else if(!emailRegex.test(values.email)){
            errors.email="This is not a Valid Email Format";
        }
        if(!values.gender){
            errors.gender="Please identify as male, female or others";
        }
        if(!values.phoneNumber){
            errors.phoneNumber="Phone Number is Required!";
        }else if(!numRegex.test(values.phoneNumber)){
            errors.phoneNumber="Phone Number must contain only numbers";
        }else if(values.phoneNumber.length!=10){
            errors.phoneNumber="Phone Number should have 10 Characters";
        }
        if(!values.password){
            errors.password="Password is Required!";
        }else if(values.password.length<6){
            errors.password="Password must contain atleast 6 letters";
        }else if(values.password.length>10){
            errors.password="Password cannot exceed more than 10 letters";
        }
        return errors;
    }

    return (
        <div className="container">
            {Object.keys(formErrors).length===0 && isSubmit ? (<div className="message-success">Hello {formValues.name}!</div>)
             : null}
            <form onSubmit={handleSubmit}>
                <h1>SignUp Form</h1><br/>
                <div className="divider"></div>
                <div className="form">
                    <div className="field">
                        <label htmlFor="name">Name: </label>
                        <input type="text" data-testid="name" name="name" placeholder="Enter Name" value={formValues.name} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.name}</p>
                    <div className="field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" data-testid="email" name="email" placeholder="Enter Email"value={formValues.email} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <label htmlFor="gender">Gender: </label>
                        <select name="gender" data-testid="gender" onChange={handleChange}>
                            <option value="male">Male</option>
                            <option value="female" >Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <p>{formErrors.gender}</p>
                    <div className="field">
                        <label htmlFor="phoneNumber">Phone Number: </label>
                        <input type="tel" data-testid="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number"value={formValues.phoneNumber} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.phoneNumber}</p>
                    <div className="field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" data-testid="password" name="password" placeholder="Enter Password" value={formValues.password} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.password}</p>
                    <button className="submit-btn" data-testid="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}