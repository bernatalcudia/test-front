import './App.css'
import Title from './components/Title'
import Human from './components/Human'

function App() {
  const humans = [{ name: 'Juan', planet: 'Saturn' }, { name: 'Marcus', planet: 'Mars' }]




  return (
    <>
      <Human human={humans} />
      <Title />
    </>

  )
}

export default App
