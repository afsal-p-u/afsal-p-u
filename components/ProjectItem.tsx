import React from 'react'

const ProjectItem = () => {
  return (
    <div 
        className='w-[300px] bg-black overflow-hidden rounded-md cursor-pointer 
        shadow-sm shadow-slate-800 border-l-[2px] border-blue-700'
    >
      <div className="flex bg-black p-3">
        <img src="images/project11.png" alt="" className='w-full' /> 
        {/* <img src="images/project12.png" alt="" className='w-full' /> 
        <img src="images/project13.png" alt="" className='w-full' /> 
        <img src="images/project14.png" alt="" className='w-full' />  */}
      </div>
      <div className="px-4 py-3">
        <p className='text-md text-blue-700 font-medium'>CzSx E-Commerce</p>
        <p className='text-xs text-gray-400 font-medium mt-1'>
            Simple e-commerce website using MERN + firebase storage
        </p>
      </div>
    </div>
  )
}

export default ProjectItem
