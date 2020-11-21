import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { Container } from 'react-bootstrap'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [repos, setRepos] = useState<any[]>([])
  // Local environment url for fetch mock api
  const fetchURL = 'http://localhost:5000'
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${fetchURL}/report`)
      setRepos(response.data)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <Container fluid>
        {repos.map((repo) => (
          <div key={repo?.uuid}>{repo.body.bankName}</div>
        ))}
      </Container>
    </div>
  )
}

export default App
