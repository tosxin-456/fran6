import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flower from './pages/flower'
import Butterfly from './pages/butterfly'
import Poem from './pages/writeUp'
import Ourlove from './pages/ourLove'

function App() {


  return (
    <>
    <div>
    <Poem/>
    <Flower/>
    <Butterfly/>
     <Ourlove/>
    </div>
    </>
  )
}

export default App
