import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorld = () => {
    
    const [ message, setMessage ] = useState("Loading...")
    
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => {
                console.log(res.data)
                setMessage(res.data.message)
            })
            .catch(err => console.log(err));
    }, [])
    
    return (
        <div>
            <h2>Message from the back-end: { message }</h2>
        </div>
    )
}

export default HelloWorld;