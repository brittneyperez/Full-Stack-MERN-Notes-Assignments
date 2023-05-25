import React, { useEffect, useState } from 'react'
import ListSubNavigation from './SubNavList'
import axios from 'axios'


const PlayerList = ({ listPageIsActive, setListPageIsActive, setManagePlayerStatusTabIsActive }) => {
    
    // const [playerData, setPlayerData] = useState([]);
    const [ playerData, setPlayerData ] = useState([]);
    
    // ? To ensure that the "PlayerList" tab is bold when active, we need to set a boolean
    // ! NOT SETTING STYLES
    // useEffect(() => {
    //     setListPageIsActive(true);
    //     setManagePlayerStatusTabIsActive(false);
    // });
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
            .then((response) => {
                // console.log(response);
                console.log(response.data);
                setPlayerData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    
    //            this is from the id mapped below
    const handleDeletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/api/player/${playerId}/delete`)
            .then((response) => {
                const newPlayerList = playerData.filter((player, index) => player._id !== playerId);
                setPlayerData(newPlayerList);
            })
            .catch((err) => console.log(err.response))
    }
    
    
    return (
        <div>
            <ListSubNavigation
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}
            />
            
            <h2>Listing All Players</h2>
            
            <table style={{ margin:'auto' }}>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {playerData.map((player,index) => {
                        return (
                            <tr key={index}>
                                <td>{ player.name }</td>
                                <td>{ player.preferredPosition }</td>
                                <td>
                                    <button onClick={() => handleDeletePlayer(player._id)} >Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PlayerList