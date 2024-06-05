import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flower from './pages/flower'
import Butterfly from './pages/butterfly'
import Poem from './pages/writeUp'


function App() {


  return (
    <>
    <div>
    <Poem/>
    <Flower/>
    <Butterfly/>
    </div>
    </>
  )
}

export default App
