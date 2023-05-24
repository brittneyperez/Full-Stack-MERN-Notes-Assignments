import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from 'axios';
const DeleteButton = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    
    const onClickHandler = (e) => {
        axios.delete(`http://localhost:8000/api/deleteAthlete/${id}`)
            .then(response => {
                console.log(response.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    return (
        <button onClick={ onClickHandler } style={{marginTop:"0.5rem"}}>Delete Button</button>
    )
}

export default DeleteButton