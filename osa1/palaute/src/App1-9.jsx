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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = (good+neutral+bad)
  const avg = (good-bad)/all
  const positive = (good)/all
  
  if (all === 0) {
    return <p>No feedback given</p>
  }
  
  return (
    <>
    <Display text='good' value={good} />
    <Display text='neutral' value={neutral} />
    <Display text='bad' value={bad} />
    <Display text='avg' value={avg} />
    <Display text='positive' value={positive} additional='%' />
    </>
  )
}

const Header = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, text}) =>
  <button onClick={handleClick}>{text}</button>

const Display = ({text, value, additional}) => <div>{text} {value} {additional}</div>

export default App
