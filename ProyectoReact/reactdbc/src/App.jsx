import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import header from './pages/header'
import footer from './pages/header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header></header>      
      </div>
    </>
  )
}

export default App
