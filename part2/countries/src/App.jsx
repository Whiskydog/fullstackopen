import { useEffect, useState } from 'react';
import { getAll } from './services/countries';
import Search from './components/Search';
import Countries from './components/Countries';
import Country from './components/Country';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    getAll()
      .then((countries) => setCountries(countries))
      .catch((error) => console.warn(error.message));
  }, []);

  if (countries === null) return null;

  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showCountry = (name) => {
    setSearchTerm(name);
  };

  return (
    <div>
      <Search term={searchTerm} setTerm={setSearchTerm} />
      {searchTerm &&
        (countriesToShow.length <= 10 ? (
          countriesToShow.length === 1 ? (
            <Country country={countriesToShow[0]} />
          ) : (
            <Countries countries={countriesToShow} showCountry={showCountry} />
          )
        ) : (
          <div>Too many matches, specify another filter</div>
        ))}
    </div>
  );
};

export default App;
