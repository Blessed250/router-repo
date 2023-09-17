import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Rate } from 'antd';
const MovieCard = ({movie}) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
       <Card.Img className='image' variant="top" src={movie.posterUrl}/>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Rate disabled defaultValue={movie.rate} />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
