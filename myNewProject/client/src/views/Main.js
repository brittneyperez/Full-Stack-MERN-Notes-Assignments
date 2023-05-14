import React, { useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

const Main = () => {
    
    const [ people, setPeople ] = useState([]);
    
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId)); // this can also be written in the PersonList component
    }
    
    return (
        <div>
            {/* PersonForm and PersonList can both utilize the getter and setter established in their parent component: */}
            <PersonForm people={ people } setPeople={ setPeople } />
            <hr />
            <PersonList people={ people } setPeople={ setPeople } removeFromDom={ removeFromDom } />
        </div>
    )
}

export default Main