import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filterString, setFilterString] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNum
    }
    
    const personToChange = persons.find(p => p.name.toLowerCase() === personObject.name.toLowerCase())
    
    if(personToChange !== undefined) {
      if(window.confirm(`${personToChange.name} is already added to the phonebook, replace their old number with a new one?`)) {
        updateNumber(personToChange.id, personObject.number)
      }
    } else {
      personsService.create(personObject)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setSuccessMessage(`Added ${personObject.name}`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 3000)
      })
    }
  
    setNewName('')
    setNewNum('')
  }

  const updateNumber = (id, num) => {
    const person = persons.find(p => p.id === id)
    const changedPerson = {...person, number: num}

    personsService.updateNum(id, changedPerson)
    .then(returnedPerson => {
      setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
      setSuccessMessage(`Changed ${changedPerson.name}'s number`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 3000)
    })
    .catch(error => {
      setErrorMessage(`Information of ${changedPerson.name} has already been removed from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setPersons(persons.filter(p => p.id !== id))
    })
  }

  const deletePerson = (id) => {
    if(window.confirm("Do you really want to delete this person?")) {
      personsService.del(id).then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumChange = (e) => {
    setNewNum(e.target.value)
  }

  const handleFilStrChange = (e) => {
    setFilterString(e.target.value)
  }

  const personsToShow = (filterString === '') 
      ? persons
      : persons.filter(p => p.name.toLowerCase().includes(filterString))

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={successMessage} />
      <ErrorNotification message={errorMessage} />

      <Filter val={filterString} onChangeFn={handleFilStrChange}/>

      <h3>Add New Entry</h3>

      <PersonForm onSubmitFn={addPerson} 
                  nameVal={newName} 
                  onNameChangeFn={handleNameChange}
                  numVal={newNum}
                  onNumChangeFn={handleNumChange} />

      <h3>Numbers</h3>
      
      {personsToShow.map(person =>
        <Person key = {person.id} 
                person = {person} 
                delFn = {() => deletePerson(person.id)}/>)}
    </div>
  )
}

export default App
