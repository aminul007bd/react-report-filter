import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import AppTable from './components/AppTable'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Container fluid>
        <AppTable />
      </Container>
    </div>
  )
}

export default App
