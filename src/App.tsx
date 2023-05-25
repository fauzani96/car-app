import React from 'react'
import logo from './logo.svg'
import './App.css'
import useSWR from 'swr'

function App() {
  const {data, isLoading} = useSWR('pokemon?limit=20')

  if (isLoading) return <div>Loading...</div>
  if (!data) throw new Error()

  console.log({data})
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to car app!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
