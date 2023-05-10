import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = ({ people, setPeople }) => {
    // keep track of what is being typed via useState hook
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    
    // handler when the form is submitted
    const onSubmitHandler = (e) => {
        // prevent defaut behaviour of the submit
        e.preventDefault();
        // make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName, // this is a shortcut for firstName: firstName,
            lastName // this is a shortcut for lastName: lastName
        })
            .then( res => {
                console.log(res);
                console.log(res.data);
                /*
                we will update the lifted state of our people array
                to include the current value in state plus the single
                new object created and returned from our post request
                */
                setPeople( [...people, res.data] );
            })
            .catch( err => console.log(err) );
    }
    
    return (
        <form onSubmit={ onSubmitHandler }>
            <h2>Person Form</h2>
            <p>
                <label>First Name</label><br/>
                {/*
                    When the user types in this input, our onChange synthetic event
                    runs this arrow function, setting that event's target's (input)
                    value (what's typed into the input) to our updated state
                */}
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </p>
            
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </p>
            <input type="submit" />
        </form>
    )
}

export default PersonForm;