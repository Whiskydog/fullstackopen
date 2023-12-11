const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.cca3}>{country.name.common}</div>
      ))}
    </div>
  );
};

export default Countries;
