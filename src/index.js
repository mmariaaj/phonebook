import React from 'react'
import ReactDOM from 'react-dom'
import Phonebook from './Phonebook'

const App = () => {
    const phonebook = {
        title: 'Superadvanced web phonebook app',
        contacts:[
            {
                name: 'John Doe',
                phone: '358401234567'
            },
            {
                name: 'Jane Doe',
                phone: '44551234567'
            },
            {
                name: 'Foo bar',
                phone: '000'
            },
            {
                name: 'Aleksi',
                phone: '1234567'
            }
        ]}

    return (
        <div>
            <Phonebook phonebook={phonebook}/>
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)
