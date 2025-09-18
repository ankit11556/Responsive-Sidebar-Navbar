import Sidebar from './components/Sidebar'
import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
function App() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
    <Navbar clickButton={toggleHamburger}></Navbar>
     <Sidebar isOpen={hamburgerOpen} ></Sidebar>
     
    </>
  )
}

export default App
