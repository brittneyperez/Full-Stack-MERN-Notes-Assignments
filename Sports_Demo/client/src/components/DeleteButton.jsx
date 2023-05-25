import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const DeleteButton = ({ id }) => {
    // {id} is passed through props to come front the url in the App.js
    
    const navigate = useNavigate();
    
    const onClickHandler = e => {
        axios.delete(`http://localhost:8000/api/deleteAthlete/${id}`)
            .then((response) => {
                console.log(response.data)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    return (
        <button onClick={ onClickHandler } style={{marginTop:"0.5rem"}}>Delete</button>
    )
}

export default DeleteButton