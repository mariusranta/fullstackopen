const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const number = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content part1={part1}
      exercises1={exercises1}
      part2={part2}
      exercises2={exercises2}
      part3={part3}
      exercises3={exercises3} />
      <Total number={number}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
    {props.course}
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}

export default App