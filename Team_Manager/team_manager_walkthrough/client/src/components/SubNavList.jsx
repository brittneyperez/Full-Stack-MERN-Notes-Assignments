import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// * This is the sub navigation component for PlayersList and CreateForm (left side of form)
const ListSubNavigation = ({ listPageIsActive, setListPageIsActive }) => {
    /*
    ? The props above will receive the components' state's boolean so that when
    ? ListPage is active => "true" => isBold, otherwise its not bold when CreateForm is "true".
    */
    
    // ? The following are set to objects so that they can apply styleObjBold when tab is active
    const [listTabStyle, setListTabStyle] = useState({});
    const [addPlayerTabStyle, setAddPlayerTabStyle] = useState({});
    const styleObjBold = { fontWeight: "800" };
    
    // ! STYLES NOT WORKING
    // * Declare the tab's state in useEffect
    // useEffect(() => {
    //     if (listPageIsActive) {
    //         setListTabStyle(styleObjBold);
    //         setAddPlayerTabStyle({}); // meaning with NO Style Obj
    //     } else {
    //         setListTabStyle({});
    //         setAddPlayerTabStyle(styleObjBold);
    //     }
    //     // Now we declare the style states in the Links' spans below...
    // }, [listPageIsActive]);
    
    
    return (
        <div style={{display:'flex', gap:'0.5rem'}}>
            <span style={{ ...listTabStyle }} className="sub-nav-text">
                <Link to="/players/list">Players List</Link>
            </span>
            <span style={{ fontSize:'24px' }}>|</span>
            <span style={{ ...addPlayerTabStyle }} className="sub-nav-text">
                <Link to="/players/add">Add a Player</Link>
            </span>
        </div>
    )
}

export default ListSubNavigation