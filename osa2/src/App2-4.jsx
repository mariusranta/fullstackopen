const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  

  return (
      <>
        <h1>Web development curriculum</h1>
        <Courses courses={courses} />
      </>
  )
}

const Header = ({ course}) => {
  console.log(course)
  return <h2>{course.name}</h2>
}

const Part = ({ name, exercises }) => {
  console.log(name, exercises)
  return (
      <p>{name} {exercises}</p>
  )
}

const Content = ({ course }) => {
  console.log(course)
  return (
    <>
      {course.parts.map(parts => 
        <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
      )}
    </>
  )
}

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map(course => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </>
  );
};

const Total = ({ course }) => {
  console.log("Täsä kohti toimii.")
  const sum = course.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  );
  console.log("Vielki toimii. Total of -->", sum)
return (
  <b>Total of {sum} exercises</b>
)
}

export default App