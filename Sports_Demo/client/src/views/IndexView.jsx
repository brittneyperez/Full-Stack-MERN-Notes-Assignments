import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from '../components/DeleteButton'
import axios from 'axios'

const IndexView = () => {
    
    const [ athletes, setAthletes ] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/athletes")
            .then((response) => {
                console.log(response.data)
                setAthletes(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    
    return (
        <div>
            <h1>Practice Assignment #23: Sports Demo</h1>
            
            <table style={{marginLeft:"auto",marginRight:"auto",marginTop:"2rem"}}>
                <thead>
                    <tr>
                        <td><strong>Athletes</strong></td>
                        <td><strong>Actions</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {/* hardcoding for testing and setting up purposes
                        <tr>
                            <td><Link to={'/3'}>John Doe</Link></td>
                            <td><Link to={'/3/edit'}><button>Edit</button></Link> | <DeleteButton /></td>
                        </tr>
                    */}
                    
                    { //       athlete obj with their corresponding key
                        athletes.map((athlete, index) => (
                            <tr key={ index }>
                                <td style={{paddingRight:'2rem'}}>
                                    <Link to={`/athlete/${athlete._id}`}>{ athlete.firstName } { athlete.lastName }</Link>
                                </td>
                                
                                <td style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                                    <Link to={`/athlete/${athlete._id}/edit`}>
                                        <button>Edit</button>
                                    </Link> 
                                    <DeleteButton _id={ athlete._id }
                                    // ! Delete Button NOT working
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default IndexView