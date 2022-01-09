import React from "react";

const Phonebook = ({phonebook}) =>{
    return(
        <div>
            <Header title={phonebook.title}/>
            <Contents contacts={phonebook.contacts}/>
        </div>
    )
}

const Header = (props) => {
    return <h1>{props.title}</h1>
}
const Contents = (props) => {
    return(
        <div> {props.contacts.map(contacts =>
            <Entry name={contacts.name} phone={contacts.phone}/>)}
            <Entry2 contacts={props.contacts}/>
        </div>
    )
}
const Entry = (props) => {
    return <p>{props.name} {props.phone}</p>
}

const Entry2 = (props) =>{
    return(
        <p>Total number of entries: {props.contacts.length}</p>
    )
}

export default Phonebook