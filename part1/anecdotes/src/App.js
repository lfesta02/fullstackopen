import { useState } from 'react'

const Header = ({ text }) => (
  <div>
    <h2>{text}</h2>
  </div>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const AnecdoteDisplay = ({ anecdote, votes }) => (
  <div>
    {anecdote}<br></br>
    has {votes} votes
  </div>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'Trust the natural recursion.'
  ]

  const n = anecdotes.length
  const arr = Array(n).fill(0)
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(arr)
  const [top, setTop] = useState(0)

  const handleClick = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(randNum)
  }

  const handleVote = () => {
    const copy = [...votes] 
    copy[selected] += 1
    if(copy[selected] > Math.max(...votes)) {
      setTop(selected)
    }
    setVotes(copy)
  }

  return (
    <div>
      <Header text="Anecdote of the Day"/>
      <AnecdoteDisplay anecdote = {anecdotes[selected]} votes = {votes[selected]}/>
      <div>
        <Button onClick = {handleVote} text = "Vote"/>
        <Button onClick = {handleClick} text = "Next Anecdote"/>
      </div><br></br>

      <Header text="Top Anecdote"/>
      <AnecdoteDisplay anecdote = {anecdotes[top]} votes = {votes[top]}/>
    </div>
  )
}

export default App
