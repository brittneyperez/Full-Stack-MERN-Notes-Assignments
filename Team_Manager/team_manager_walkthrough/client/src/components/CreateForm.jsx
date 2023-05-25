import React, { useEffect, useState } from 'react'
import ListSubNavigation from './SubNavList'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateForm = ({ listPageIsActive, setListPageIsActive, setManagePlayerStatusTabIsActive }) => {
    
    // set states as individual strings since we are managing one element at a time
    const [ name, setName ] = useState("");
    const [ preferredPosition, setPreferredPosition ] = useState("");
    const navigate = useNavigate();
    
    // ? To ensure that the "PlayerList" tab is bold when active, we need to set a boolean
    // ! STYLES NOT WORKING
    // useEffect(() => {
    //     setListPageIsActive(false);
    //     setManagePlayerStatusTabIsActive(false);
    // });
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players/create", { name, preferredPosition })
            .then((response) => {
                console.log(response.data);
                navigate("/players/list");
            })
            .catch((err) => console.log(err.response))
    }
    
    
    return (
        <div>
            <ListSubNavigation 
                listPageIsActive={ listPageIsActive }
                setListPageIsActive={ setListPageIsActive }
            />
            
            <h2>Add a Player</h2>
            
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div>
                    <label htmlFor="preferredPosition">Preferred Position</label>
                    <input type="text" id="preferredPosition" onChange={(e) => setPreferredPosition(e.target.value)} />
                </div>
                
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default CreateForm