import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <Header title={'give feedback'}/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Header title={'statistics'}/>
      <Display text='good ' value={good} />
      <Display text='neutral ' value={neutral} />
      <Display text='bad ' value={bad} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = props => <div>{props.text}{props.value}</div>

export default App
