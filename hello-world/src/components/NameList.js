import React from 'react'
import Person from './Person';


function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 32,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 125,
            skill: 'Python'
        },
    ]
    // const personList = persons.map(person => (
    //     <h2>I am {person.name}, I am {person.age} years old, I Know {person.skill}</h2>
    // ))
    const personList =   persons.map(person => <Person person={person} />)
  
    return <div>{personList}</div>
}

export default NameList