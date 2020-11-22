import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import AppTable from './components/AppTable'
import AppNavbar from './components/AppNavbar'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Container fluid>
        <AppNavbar />
        <div className="shadow mt-3 p-3">
          <AppTable />
        </div>
      </Container>
    </div>
  )
}

export default App
