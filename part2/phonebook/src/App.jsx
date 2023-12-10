import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    setNewName('');
    setNewNumber('');
    if (persons.find((person) => person.name === newName))
      alert(`${newName} is already added to the phonebook`);
    else {
      const newPerson = { name: newName, number: newNumber };
      axios
        .post('http://localhost:3001/persons', newPerson)
        .then((response) => setPersons(persons.concat(response.data)));
    }
  };

  const personsToShow = searchTerm
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h3>Add a new</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
