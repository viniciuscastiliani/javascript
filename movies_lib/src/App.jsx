import { useState } from 'react'
import heroImg from './assets/hero.png'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div className="App">

    <h1>TESTE DO APP</h1>

      <nav id="navbar"></nav>
      <h2>
        <Link to="/">MoviesLib</Link>
      </h2>
      <Link to="/movie/1">Movie</Link>
      <Link to="/search">Search</Link>
      <h2>Movies Lib</h2>
      <Outlet />
    </div>
  )
}

export default App
