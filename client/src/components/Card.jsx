import React from 'react'

const Card = ({ title, image, link, description, technologies, colour }) => {
  return (
    <div className=' bg-bgp flex justify-center items-center h-screen sticky top-0'>
      <div className=' h-[65vh] w-[70%]' style={{ background: colour }} >

      </div>

    </div>
  )
}

export default Card