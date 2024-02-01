import { useState } from 'react'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  )
}

export default App
