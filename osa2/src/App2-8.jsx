import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    
    console.log("personObject luotu")
    if (persons.some(person => person.name === newName)) {
      return window.alert(`${newName} is already added to phonebook`)
    } else if (persons.some(person => person.number === newNumber)) {
      return window.alert(`Number ${newNumber} is already added to phonebook`)
    } else {
        console.log("Added person is new")
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
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
        <Person key={person.id} person={person} />
        )}
        </ul>
    </div>
  )

}

export default App