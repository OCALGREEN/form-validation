import React, { useState } from 'react';

const Form = props => {
    // VARIABLES
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 

    // ERROR VARIABLES 
    const [firstNameError, setFirstNameError] = useState(""); 
    const [lastNameError, setLastNameError] = useState(""); 
    const [emailError, setEmailError] = useState(""); 

    // FUNCTIONS
    const createUser = (e) => {
        e.preventDefault(); 
        const newUser = { firstName, lastName, email}; 
        console.log(newUser); 
    }; 

    // ERROR FUNCTIONS
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 3) {
            setFirstNameError("First Name must be greater than 3 characters"); 
        }
        else {
            setFirstNameError(""); 
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 3) {
            setLastNameError("Last Name must be greater than 3 characters"); 
        }
        else {
            setLastNameError(""); 
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 3) {
            setEmailError("Email must be greater than 3 characters"); 
        }
        else {
            setEmailError(""); 
        }
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={ firstName } onChange={handleFirstName}/>
                    {
                        firstNameError
                        ?<p>{firstNameError}</p>
                        :""
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={lastName} onChange={handleLastName}/>
                    {
                        lastNameError
                        ?<p>{lastNameError}</p>
                        :""
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={email} onChange={handleEmail}/>
                    {
                        emailError
                        ?<p>{emailError}</p>
                        :""
                    }
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
            <p>User Info</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
        </div>
    ); 
}

export default Form; 