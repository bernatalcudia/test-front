import './App.css'
import Title from './components/Title'
import Human from './components/Human'
import { useState } from 'react'

function App() {
  const humans = [{ name: 'Juan', planet: 'Saturn' }, { name: 'Marcus', planet: 'Mars' }]
  const [counter, setCounter] = useState(0)




  return (
    <>
      <Human human={humans} />
      <Title />
      <button onClick={() => setCounter(counter + 1)}></button>
      <p>{counter}</p>
    </>

  )
}

export default App
