import { useState } from 'react'
import Name from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName,
      id: String(persons.length + 1),
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
        <Name key={person.id} person={person} />
        )}
        </ul>
    </div>
  )

}

export default App