import React from 'react'
import MovieList from '../component/MovieList/MovieList'
import Addcomponent from '../component/Addcomponent'
import FilterByName from '../component/FilterByName/FilterByName'

const Home = ({movies , add , setInput , input}) => {


  return (
    <div>
         <FilterByName  setInput={setInput}/>
     <Addcomponent add={add}/>
    <MovieList movies={movies} input={input}/>
    </div>
  )
}

export default Home
