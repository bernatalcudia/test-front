import './App.css'
import Title from './components/Title'
import Human from './components/Human'
import { useState } from 'react'

function App() {
  const humans = [{ name: 'Juan', planet: 'Saturn' }, { name: 'Marcus', planet: 'Mars' }]
  const [showHumanView, setHumanView] = useState(false)
  const [showTitleView, setTitleView] = useState(false)

  const handleShowHuman = () => {
    setHumanView(true)
  }

  const handleShowTitle = () => {
    setTitleView(true)
  }


  return (
    <>
      <button onClick={() => setHumanView(handleShowHuman)}>Human</button>
      <button onClick={() => setTitleView(handleShowTitle)}>Title</button>

      {showHumanView &&
        <Human human={humans} />
      }
      {showTitleView &&
        <Title />
      }

    </>

  )
}

export default App
