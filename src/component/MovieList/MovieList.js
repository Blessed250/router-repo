import React from 'react' ;
import MovieCard from '../MovieCard'
import './MovieList.css' ;
const MovieList = ({movies,input}) => {
  
  
  return (
    <div className='movie-list'>
      {movies.filter ((move)=> move.title.toUpperCase().includes(input.toUpperCase())).map((movie) => <MovieCard movie={movie} key={movie.id} />) }
    </div>
  )
}

export default MovieList
