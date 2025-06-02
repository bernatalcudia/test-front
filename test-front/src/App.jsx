import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import UserList from './components/UserList'
import Title from './components/Title'
import RouteNotFound from './components/RouteNotFound'

function App() {




  return (

    <>
      <BrowserRouter>
        <>
          <Link to='/users' >UserList</Link>
          <Link to='/title' >Title</Link>
        </>
        <Routes>
          <Route path='/users' element={<UserList />} />
          <Route path='/title' element={<Title />} />
          <Route path='*' element={<RouteNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )


}

export default App
