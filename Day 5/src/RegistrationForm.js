import React from 'react'
import { useState, useEffect } from 'react'
import validator from 'validator'
export const RegistrationForm = () => {

    const [eye, setEye] = useState(0);

    const handleEye = (e)=>{
        e.preventDefault()
        console.log('hey');
        if(eye === 0){
            console.log(userRegistration.password);
            setEye(1);
        }
        else{
            setEye(0);
        }
    }

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    // const [formErrors, setFormErrors] = useState({})

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        // console.log(value);

        setUserRegistration({...userRegistration, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(userRegistration))
        setIsSubmit(true)
    }

    const validate = (values)=>{
        const errors = {};
        if(values.username.length < 3 || values.username > 25){
            errors.username = "Username must be between 3 and 25 characters"
        }
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = "Invalid Email"
        }
        if(!validator.isStrongPassword(values.password, {minLength: 8,
            minLowercase:1,
            minUppercase:1,
            minNumbers: 1,
            minSymbols: 1 })){
                errors.password = "Password must has at least 8 characters or longer that include at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character in (!@#$%^&*)"
        }
        if(values.password.length === 0 || values.password!== values.confirmPassword){
            errors.confirmPassword = "Please enter your password again";
        }
        return errors;
    }

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(userRegistration);
        }
    }, [formErrors])

    return (
        <div  className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ?
            
            <div><h2 id="successful-signin">Signed In Successfully</h2></div>
            : 
            
            <form action="">
                <h2>Sign Up</h2>
                <div className="form-element">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleInput}
                        value={userRegistration.username}
                        placeholder="Name"
                        id="username"
                        autoComplete="off" />
                        <p>{formErrors.username}</p>
                </div>
                <div className="form-element">
                    <label htmlFor="">Email</label>
                    <input id="email" type="email" name="email" onChange={handleInput} value={userRegistration.email} placeholder="Email" autoComplete="off" />
                    <p>{formErrors.email}</p>
                </div>
                <div className="form-element">
                    <label htmlFor="">Password</label>
                    <div className="password-container">
                        <input id="password" type={eye === 0 ? "password" : "text"} name="password" onChange={handleInput} value={userRegistration.password} placeholder="Password" autoComplete="off" />
                        <button onClick={handleEye}>
                        
                        {
                            eye === 0 ? 
                            <i id="flash-eye2" className="fa fa-solid fa-eye-slash"></i>
                            :
                            <i id="flash-eye2" className="fa fa-solid fa-eye"></i>
                        }
                        
                        </button>
                    </div>
                    <p>{formErrors.password}</p>
                </div>
                <div className="form-element">
                    <label htmlFor="">Confirm Password</label>
                    <div className="password-container">
                        <input id="confirmPassword" type={eye === 0 ? "password" : "text"} name="confirmPassword" onChange={handleInput} value={userRegistration.confirmPassword} placeholder="Re-password" autoComplete="off" />
                        <button onClick={handleEye}>
                        {
                            eye === 0 ? 
                            <i id="flash-eye2" className="fa fa-solid fa-eye-slash"></i>
                            :
                            <i id="flash-eye2" className="fa fa-solid fa-eye"></i>
                        }

                        </button>
                    </div>
                    <p>{formErrors.confirmPassword}</p>
                </div>
                <button onClick={handleSubmit} id="signin">Sign In</button>
            </form>
        }
        </div>
    )
}
