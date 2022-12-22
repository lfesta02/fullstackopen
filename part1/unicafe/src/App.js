import { useState } from 'react'

const Header = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

// const StatisticLine = ({ text, val }) => (
//   <div>
//     {text} {val}
//   </div>
// )

const Statistics = ({ good, neutral, bad, all, avg, positive}) => {
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
      <tr>
        <td>Good</td><td>{good}</td>
      </tr>
      <tr>
        <td>Neutral</td><td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad</td><td>{bad}</td>
      </tr>
      <tr>
        <td>All</td><td>{all}</td>
      </tr>
      <tr>
        <td>Average</td><td>{avg}</td>
      </tr>
      <tr>
        <td>Positive</td><td>{positive + "%"}</td>
      </tr>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [count, setCount] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setCount(count + 1)
    setAvg((count + 1) / (all + 1))
    setPositive(((good + 1) / (all + 1)) * 100)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAvg(count / (all + 1))
    setPositive((good / (all + 1)) * 100)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setCount(count - 1)
    setAvg((count - 1) / (all + 1))
    setPositive((good / (all + 1)) * 100)
  }

  return (
    <div>
      <Header text = "Give Feedback"/>
      <Button onClick = {handleGoodClick} text = "good"/> &nbsp;
      <Button onClick = {handleNeutralClick} text = "neutral"/> &nbsp;
      <Button onClick = {handleBadClick} text = "bad"/>
      <Header text = "Statistics"/>
      <Statistics 
        good = {good} 
        neutral = {neutral}
        bad = {bad}
        all = {all}
        avg = {avg}
        positive = {positive} />
    </div>
  )
}

export default App