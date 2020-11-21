import './App.css'
import { Container, Card, Button } from 'react-bootstrap'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default App
