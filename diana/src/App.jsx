import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Input titulo={"Ingresa un número"}></Input> 
     <br/>
     <Input titulo={"Ingresa otro número"}></Input>
     <br />
     <Button titulo={"Calcular resultado"}></Button>
    </>
  )
}

export default App
