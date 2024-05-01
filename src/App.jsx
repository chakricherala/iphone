import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Highlights from './components/Highlights'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Home />
      <Highlights />
    </main>
  )
}

export default App