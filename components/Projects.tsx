import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='bg-black text-white'>
      <div className="container mx-auto h-screen">
        <div className="flex pt-10 gap-5 flex-wrap">
          <ProjectItem />  
        </div>
      </div>
    </div>
  )
}

export default Projects
