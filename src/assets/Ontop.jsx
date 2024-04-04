import React from 'react'
import qrimage from './image-qr-code.png'
import mysong from './myaudio.mp3'

const Ontop = () => {
  return (
    <div class="bg-mentor w-screen h-screen flex flex-col items-center justify-around">
     <div class="w-[295px] bg-mentor-white flex flex-col justify-around align-middle rounded-lg shadow-white shadow-md">
     <audio autoPlay controls loop className='mx-1 my-1 rounded-md bg-transparent'>
      <source src={mysong} />
     </audio>
      <img
        src={qrimage}
        alt="QR Code Image"
        class="h-72 w-64 my-5 rounded-lg mx-auto"
      />
      <div class="text-center mt-1 mb-6">
        <p class="text-white font-bold font-outfit mx-4 text-xl">
          Improve your front-end skills by building projects
        </p>
        <p class="text-mentor-dblue text-sm mx-4 mt-3">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  </div>
  )
}

export default Ontop