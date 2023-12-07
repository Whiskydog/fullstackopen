const Header = ({ course }) => {
  return <h2>{course}</h2>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ sum }) => {
  return (
    <p style={{ fontWeight: 'bold' }}>
      total of {sum} exercise{sum > 1 && 's'}
    </p>
  );
};

const Course = ({ course }) => {
  const sumOfExercises = course.parts.reduce(
    (acc, part) => acc + part.exercises,
    0
  );

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sumOfExercises} />
    </div>
  );
};

export default Course;
