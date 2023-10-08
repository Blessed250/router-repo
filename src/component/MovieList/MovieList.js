import React from 'react' ;
import MovieCard from '../MovieCard'
import './MovieList.css' ;
const MovieList = ({movies , input}) => {
  
  
  return (
    <div className='movie-list'>
      {movies.filter((movie) => movie.title.toUpperCase().includes(input.toUpperCase())).map((move) => <MovieCard move={move} key={move.id} />) }
    </div>
  )
}

export default MovieList
