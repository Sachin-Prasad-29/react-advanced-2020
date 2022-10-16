import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// two components - provider, consumer

const ContextAPI = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    };
    return (
        <PersonContext.Provider value={{ removePerson, people }}>
            <h3>Context Api / Use context hook</h3>
            <List />
        </PersonContext.Provider>
    );
};

const List = () => {
    const Data = useContext(PersonContext);
    return (
        <>
            {Data.people.map((person) => {
                return <SinglePerson key={person.id} {...person} />;
            })}
        </>
    );
};

const SinglePerson = ({ name, id }) => {
    const { removePerson } = useContext(PersonContext);
    return (
        <div className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>remove</button>
        </div>
    );
};

export default ContextAPI;
