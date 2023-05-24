import React, { useState } from 'react'
import Form from '../components/Form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateView = () => {
    
    const navigate = useNavigate();
    
    const [ errors, setErrors ] = useState([]); // array
    
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        // Through data because...  data: {{firstName}, {lastName}, {sport}, {team}}
        axios.post("http://localhost:8000/api/createAthlete", data)
            .then((response) => {
                console.log(response);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                
                // TODO: Setup Error
                // ? This will retrieve our errors, save it in state, and then display them
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr)
            });
    }
    
    return (
        <div>
            <h1>Create a New Athlete</h1>
            
            { errors.map((error, index) => {
                return(
                    <p key={index} style={{color:'red'}}>{ error }</p>
                )
            }) }
            
            <Form 
                onSubmitHandler={ onSubmitHandler }
                // ? This is added so that data won't prepopulate in the CreateView
                initialFirstName=""
                initialLastName=""
                initialSport=""
                initialTeam=""
            />
        </div>
    )
}

export default CreateView