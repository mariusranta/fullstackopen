import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    if (persons.some(person => person.name === newName)) {
      return window.alert(`${newName} is already added to phonebook`)
    } else if (persons.some(person => person.number === newNumber)) {
      return window.alert(`Number ${newNumber} is already added to phonebook`)
    } else {
        console.log("Added person is a new")
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        onNameChange={handleNameChange}
        numberValue={newNumber}
        onNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )

}

export default App