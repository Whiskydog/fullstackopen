const Languages = ({ langs }) => {
  return (
    <div>
      <h4>languages:</h4>
      <ul>
        {langs.map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <Languages langs={Object.entries(country.languages)} />
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default Country;
