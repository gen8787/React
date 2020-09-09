import React, { useState } from  'react'; // <~~ Add Imports
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required.");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First name must be 2 characters or longer.");
        }
        else {
            setFirstNameError("");
        }
    }
    
    const [lastNameError, setLastNameError] = useState("");
    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required.");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last name must be 2 characters or longer.");
        }
        else {
            setLastNameError("");
        }
    }
    
    const [emailError, setEmailError] = useState("");
    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required.");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer.");
        }
        else {
            setEmailError("");
        }
    }

    const [passwordError, setPasswordError] = useState("");
    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required.");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer.");
        }
        else {
            setPasswordError("");
        }
    }

    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Confirm Password must match password.");
        } else {
            setConfirmPasswordError("");
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser.firstName);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setHasBeenSubmitted(true);
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
        {
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
        }
            <div>
                <label htmlFor="firstName">First Name: </label> 
                <input type="text" name = "firstName" onChange={validateFirstName} value={ firstName } />
                {
                    firstNameError ?
                    <small style={{color:'red'}}>{ firstNameError }</small> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label> 
                <input type="text" name = "lastName" onChange={validateLastName} value={ lastName } />
                {
                    lastNameError ?
                    <small style={{color:'red'}}>{ lastNameError }</small> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input type="email" name = "email" onChange={validateEmail} value={ email }/>
                {
                    emailError ?
                    <small style={{color:'red'}}>{ emailError }</small> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name = "password" onChange={validatePassword} value={ password }/>
                {
                    passwordError ?
                    <small style={{color:'red'}}>{ passwordError }</small> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="password" name = "confirmPassword" onChange={validateConfirmPassword} value={ confirmPassword }/>
                {
                    confirmPasswordError ?
                    <small style={{color:'red'}}>{ confirmPasswordError }</small> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <hr/>
        <div>
            <p>Your Form Data</p>
            <p>First Name: { firstName } </p>
            <p>Last Name: { lastName } </p>
            <p>Email: { email } </p>
            <p>Password: { password } </p>
            <p>Confirm Password: { confirmPassword } </p>
        </div>
        </>
    );
};
    
export default UserForm; // <~~ export component