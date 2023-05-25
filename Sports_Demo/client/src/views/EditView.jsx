import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton'
import Form from '../components/Form'

const EditView = () => {
    
    // If id is passed with useParams, the GET request data is able to be loaded
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [ athlete, setAthlete ] = useState({}) // object
    const [ loaded, setLoaded ] = useState(false) // boolean
    const [ errors, setErrors ] = useState([]); // array
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/readAthlete/${id}`)
            .then(response => {
                console.log(response.data)
                console.log("id:", response.data._id, 
                    "| firstName:", response.data.firstName,
                    "| lastName:", response.data.lastName,
                    "| sport:", response.data.sport,
                    "| team:", response.data.team
                )
                setLoaded(true);
                /* What does this mean? 
                ? The form will only pop up if loaded=true, 
                ? meaning this id exists to edit athlete.
                */
                setAthlete(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        // Through data because...  data: {{firstName}, {lastName}, {sport}, {team}}
        axios.patch(`http://localhost:8000/api/updateAthlete/${id}`, data)
            .then((response) => {
                console.log(response);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                
                // * Setup Error
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
            <h1>Editing { athlete.firstName } { athlete.lastName }</h1>
            <h3>ID: {id}</h3>
            
            { errors.map((error, index) => {
                return(
                    <p key={index} style={{color:'red'}}>{ error }</p>
                )
            }) }
            
            { loaded && 
                <Form 
                    onSubmitHandler={ onSubmitHandler }
                    initialFirstName = { athlete.firstName }
                    initialLastName = { athlete.lastName }
                    initialSport = { athlete.sport }
                    initialTeam = { athlete.team }
                />
            }
            <DeleteButton id={athlete._id} />
        </div>
    )
}

export default EditView