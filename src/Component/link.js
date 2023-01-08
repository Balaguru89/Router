import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const link = () => {
  return (
    <div>
      <Container>
      <h1>Welcome to link page</h1>
      <Link to="/">Home</Link>
      </Container>
    </div>
  )
}

export default link
