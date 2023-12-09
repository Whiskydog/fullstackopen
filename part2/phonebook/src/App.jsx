import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    setNewName('');
    if (persons.find((person) => person.name === newName))
      alert(`${newName} is already added to the phonebook`);
    else setPersons(persons.concat({ name: newName }));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{' '}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => (
        <div key={p.name}>{p.name}</div>
      ))}
    </div>
  );
};

export default App;
