import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Description = ({movies}) => {
    const { id } = useParams ()
  return (
    <div>
 {movies.filter((movie)=> movie.title == id ).map((movie)=> 
     <Card style={{ width: '350px', height : '400px' }}>
   <iframe width="350" height="200" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <Card.Body>
       <Card.Title>{movie.title}</Card.Title>
       <Card.Text>
      {movie.description}
       </Card.Text>
     </Card.Body>
   </Card>
    )}
    </div>
   )
}
     
  
 


export default Description
