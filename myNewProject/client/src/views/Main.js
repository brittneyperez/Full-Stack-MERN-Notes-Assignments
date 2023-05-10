import React, { useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    
    const [ people, setPeople ] = useState([]);
    
    return (
        <div>
            {/* PersonForm and PersonList can both utilize the getter and setter established in their parent component: */}
            <PersonForm people={ people } setPeople={ setPeople } />
            <hr />
            <PersonList people={ people } setPeople={ setPeople } />
        </div>
    )
}

export default Main