import React, { useState } from 'react'
import axios from 'axios'

const Form = ({ onSubmitHandler, initialFirstName, initialLastName, initialSport, initialTeam }) => {
    /* Properties being passed down:
        onSubmitHandler for Create & Edit
        initialState for loading data in Edit useEffect
    */
    
    // ? We can set useState to hold "initialStateName" from the EditView so we can prepopulate the data there upon useEffect loading
    const [ firstName, setFirstName ] = useState(initialFirstName);
    const [ lastName, setLastName ] = useState(initialLastName);
    const [ sport, setSport ] = useState(initialSport);
    const [ team, setTeam ] = useState(initialTeam);
    
    
    /* For the onSubmitHandler, we need to set a method on onSubmit: 
        ? event    handlerFromCreate(e, dataFromModelBeingSubmited)
        * (e) => { onSubmitHandler(e, data) }
    */
    return (
        <form onSubmit={(e) =>  { onSubmitHandler(e, { firstName, lastName, sport, team }) }}>
            <p>
                <label>First Name:</label>
                <input type="text" name="firstName" value={ firstName } onChange={(e) => (setFirstName(e.target.value))} />
            </p>
            <p>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={ lastName } onChange={(e) => (setLastName(e.target.value))} />
            </p>
            <p>
                <label>Sport:</label>
                <input type="text" name="sport" value={ sport } onChange={(e) => (setSport(e.target.value))} />
            </p>
            <p>
                <label>Team:</label>
                <input type="text" name="team" value={ team } onChange={(e) => (setTeam(e.target.value))} />
            </p>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form