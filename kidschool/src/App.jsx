import { useState } from 'react'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Homepage/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admission from './Components/Admision/Admission'
import About from './Components/about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Admission' element={<Admission/>}/>
      <Route path='/About-us' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
