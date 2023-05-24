import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'

const DetailsView = () => {
    
    const { id } = useParams(); // this will present the id we input in the URL
    
    const [ athlete, setAthlete ] = useState({}); // object
    
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
                setAthlete(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    return (
        <div>
            <h1>Athlete Details View</h1>
            <h2>{ athlete.firstName } { athlete.lastName }</h2>
            <h3>ID: {id}</h3>
            
            <p><strong>Sport:</strong> { athlete.sport }</p>
            <p><strong>Team:</strong> { athlete.team }</p>
            
            <DeleteButton id={ athlete._id } />
        </div>
    )
}

export default DetailsView