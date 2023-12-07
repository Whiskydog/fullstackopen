const Total = ({ sum }) => {
  return (
    <p style={{ fontWeight: 'bold' }}>
      total of {sum} exercise{sum > 1 && 's'}
    </p>
  );
};

export default Total;
