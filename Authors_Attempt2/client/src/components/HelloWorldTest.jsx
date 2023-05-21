import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorldTest = () => {
    
    const [ message, setMessage ] = useState("Loading...");
    
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then((res) => {
                console.log("Response Data:", res.data)
                console.log("Response Data Object (Message):", res.data.message)
                setMessage(res.data.message);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [])
    
    return (
        <div>
            <h2>Message from the Back-End: "<span style={{color:"palevioletred"}}>{ message }</span>"</h2>
        </div>
    )
}

export default HelloWorldTest;