import { useEffect, useState } from 'react';
import { create, getAll, remove, update } from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAll().then((persons) => setPersons(persons));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const foundPerson = persons.find((person) => person.name === newName);
    if (foundPerson) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      )
        replacePerson(foundPerson.id);
    } else {
      const newPerson = { name: newName, number: newNumber };
      create(newPerson).then((person) => setPersons(persons.concat(person)));
    }
    setNewName('');
    setNewNumber('');
  };

  const replacePerson = (id) => {
    const changedPerson = { name: newName, number: newNumber };
    update(id, changedPerson).then((newPerson) =>
      setPersons(
        persons.map((person) => (person.id !== id ? person : newPerson))
      )
    );
  };

  const removePerson = (id) => {
    remove(id).then(() => {
      setPersons(persons.filter((p) => p.id !== id));
    });
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
      <Persons persons={personsToShow} removePerson={removePerson} />
    </div>
  );
};

export default App;
