import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import UserList from './components/UserList'
import Title from './components/Title'

function App() {




  return (

    <>
      <BrowserRouter>
        <>
          <Link to='/userlist' >UserList</Link>
          <Link to='/title' >Title</Link>
        </>
        <Routes>
          <Route path='/userlist' element={<UserList />} />
          <Route path='/title' element={<Title />} />
        </Routes>
      </BrowserRouter>
    </>

  )


}

export default App
