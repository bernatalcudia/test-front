import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [password, setPassword] = useState('hi')
  const textPassword = 'the password color'



  const handleInputValidation = (event) => {
    const passwordLength = event.target.value.length
    setPassword(password)
    console.log(passwordLength)


    if (passwordLength > 9) {
      // h3.style.color = 'green';
      setPassword('The password is save:', password)
      console.log(password)
    }
    if (passwordLength > 7 && passwordLength < 9) {
      // h3.style.color = 'orange';
      setPassword('The password is not save', password)
      console.log(password)
    }
    if (passwordLength < 7) {
      // h3.style.color = 'red';
      setPassword('The password is too short', password)
      console.log(password)
    }

    useEffect(() => {
      handleInputValidation(password)
    }, [password])


  }

  return (
    <>
      <input onChange={handleInputValidation} type='text' placeholder='add a password' />
      <text >{textPassword}</text>
    </>

  )
}

export default App
