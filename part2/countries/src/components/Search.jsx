const Search = ({ term, setTerm }) => {
  return (
    <div>
      find countries{' '}
      <input
        type="text"
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
    </div>
  );
};

export default Search;
