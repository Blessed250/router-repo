import { useState } from 'react';
import './App.css';
import { FilmData } from './Data/Data';
import MovieList from './component/MovieList/MovieList';
import Addcomponent from './component/Addcomponent';
import FilterByName from './component/FilterByName/FilterByName';
function App() {
  const [movies , setMovies] = useState (FilmData)
  const [input , setInput] = useState ('')
  const add = (newMove) => {
    setMovies([...movies , newMove])
  }
  return (
    <div className="App">
        <FilterByName setInput={setInput}/>
       
        
       <Addcomponent add={add}/>
      <MovieList movies={movies} input={input}/>
    
    </div>
  );
}

export default App;
