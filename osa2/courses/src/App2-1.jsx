const App = () => {
    const course = {
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
      ]
    }
  

  return (
      <Course course={course} />
  )
}

const Header = ({ course }) => {
  console.log(course)
  return (
    <h1>{course.name}</h1>
  )
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

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}

/*
const Total = ({ course }) => {
console.log(course)
return (
  <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
)
}
*/

export default App