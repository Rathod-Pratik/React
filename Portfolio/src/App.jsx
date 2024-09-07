import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Expertise from './Component/Expertise/Expertise'
import Language from './Component/Language/Language'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Expertise/>
      <Language/>
    </div>
  )
}

export default App
