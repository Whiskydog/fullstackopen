import { useEffect, useState } from 'react';
import { create, getAll, remove, update } from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);

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
      ) {
        replacePerson(foundPerson.id);
        showNotification(`Changed ${newName}'s number`, 'success');
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      create(newPerson).then((person) => setPersons(persons.concat(person)));
      showNotification(`Added ${newName}`, 'success');
    }
    setNewName('');
    setNewNumber('');
  };

  const replacePerson = (id) => {
    const changedPerson = { name: newName, number: newNumber };
    update(id, changedPerson)
      .then((newPerson) =>
        setPersons(
          persons.map((person) => (person.id !== id ? person : newPerson))
        )
      )
      .catch(() =>
        showNotification(
          `Information of ${newName} has already been removed from server`,
          'error'
        )
      );
  };

  const removePerson = (id) => {
    remove(id).then(() => {
      setPersons(persons.filter((p) => p.id !== id));
    });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const personsToShow = searchTerm
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification content={notification} />
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
