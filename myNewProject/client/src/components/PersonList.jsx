import React, { useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonList = ({ people, setPeople }) => {
    /* 
    We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (PersonList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: 
    */
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
            .then((res)=>{
                console.log(res.data);
                setPeople(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])
    
    return (
        <div>
            {
                people.map((person, index)=>{
                    return (
                        <div key={index}>
                            <p>{person.lastName}, {person.firstName}</p>
                            <Link to={`/people/${person._id}`}>{ person.firstName }'s Page</Link>
                            <hr style={{width: '250px', margin:' 10px auto'}} />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PersonList;

