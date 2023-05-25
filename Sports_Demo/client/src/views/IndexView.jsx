import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'

const IndexView = () => {
    
    const [ athletes, setAthletes ] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/athletes")
            .then((response) => {
                console.log(response.data);
                setAthletes(response.data);
                // ! HOW TO RERENDER PAGE AFTER DELETE WHEN IT COMES FROM A DIFFERENT COMPONENT
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    
    return (
        <div>
            <h2>Displaying All Athletes</h2>
            
            <table style={{marginLeft:"auto",marginRight:"auto",marginTop:"2rem"}}>
                <thead>
                    <tr>
                        <td><strong>Athletes</strong></td>
                        <td><strong>Actions</strong></td>
                    </tr>
                </thead>
                <tbody>
                    { //       athlete obj with their corresponding key
                        athletes.map((athlete, index) => (
                            <tr key={ index }>
                                <td style={{paddingRight:'2rem'}}>
                                    <Link to={`/athlete/${athlete._id}`}>{ athlete.firstName } { athlete.lastName }</Link>
                                </td>
                                
                                <td style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                                    <Link to={`/athlete/${athlete._id}/edit`}><button style={{marginTop:"0.5rem"}}>Edit</button></Link> 
                                    
                                    <DeleteButton id={athlete._id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p>Practice Assignment #23 © Coding Dojo 2023</p>
        </div>
    )
}

export default IndexView