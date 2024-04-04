import React from 'react'
import bgvideo from './assets/played.mp4'
import Ontop from './assets/Ontop'

const App = () => {
  return (
    <div className='relative'>
      <div className='w-screen h-screen bg-black'>
        <video autoPlay loop muted className='w-screen h-screen' > <source src={bgvideo} /> </video>
      </div>
      <div className='absolute top-0 left-0 z-10  opacity-80 bg-black text-white flex items-center justify-center backdrop-blur-xl'>
        <Ontop />
      </div>
    </div>
  )
}

export default App