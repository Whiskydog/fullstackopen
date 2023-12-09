const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((p) => (
        <Person key={p.name} name={p.name} number={p.number} />
      ))}
    </>
  );
};

export default Persons;
