import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  const avg = (good-bad)/all
  const goodsRatio = (good)/all

  return (
    <div>
      <Header title={'give feedback'}/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Header title={'statistics'}/>
      <Display text='good ' value={good} />
      <Display text='neutral ' value={neutral} />
      <Display text='bad ' value={bad} />
      <Display text='all ' value={all} />
      <Display text='avg ' value={avg} />
      <Display text='positive ' value={goodsRatio}/>
    </div>
    
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.title}</h1>
  )
}

const Button = (props) => (
  console.log(props),
  <button onClick={props.handleClick}>{props.text}</button>
)

const Display = props => <div>{props.text}{props.value}</div>

export default App
