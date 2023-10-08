import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Description from './Pages/Description'
import { FilmData } from './Data/Data'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [movies , setMovies] = useState(FilmData)
  const [input , setInput] = useState ("")
  const add = (newmovie) => {
    setMovies ([...movies , newmovie])
  }
  return (
    <div>
       <Routes>
         <Route path='/' element={<Home movies={movies} add={add} setInput={setInput} input={input}/>}/>
         <Route path='/description/:id' element={<Description movies={movies}/>}/>
        </Routes>

    </div>
  )
}

export default App




