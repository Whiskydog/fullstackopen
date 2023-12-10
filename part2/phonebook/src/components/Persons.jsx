const Person = ({ name, number, remove }) => {
  return (
    <div>
      {name} {number}{' '}
      <button
        onClick={() => {
          if (window.confirm(`Delete ${name}?`)) remove();
        }}
      >
        delete
      </button>
    </div>
  );
};

const Persons = ({ persons, removePerson }) => {
  return (
    <>
      {persons.map((p) => (
        <Person
          key={p.id}
          name={p.name}
          number={p.number}
          remove={() => removePerson(p.id)}
        />
      ))}
    </>
  );
};

export default Persons;
