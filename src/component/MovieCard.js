import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link} from 'react-router-dom'


const MovieCard = ({move}) => {

  
  
  return (
    <div>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={move.posterUrl} />
      <Card.Body>
        <Card.Title>{move.title}</Card.Title>
        <Card.Text>
          {move.description}
        </Card.Text>
       <Link to={`description/${move.title}`}><Button>Watch trailer</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
