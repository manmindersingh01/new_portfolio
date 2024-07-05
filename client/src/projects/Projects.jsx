import React from 'react'
import { project } from './data.js'

import Card from '../components/Card.jsx'
const Projects = () => {
  return (
    <div className=' mt-16 '>
      <div>
      </div>
      {
        project.map((project, idx) => {
          return (
            <Card key={idx} {...project} />
          )
        })
      }
    </div>
  )
}

export default Projects