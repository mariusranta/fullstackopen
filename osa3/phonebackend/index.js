const express = require('express')
const app = express()

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Phonebook!</h1>')
  console.log("Phonebook! header to root page", response)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
  console.log("Requested and responded with json file")
})

app.get('/info', (request, response) => {
    const count = size(persons)
    response.send(`Phonebook has info for ${count} people\n\n`)
    console.log("Requested and responded with json file")
  })

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})